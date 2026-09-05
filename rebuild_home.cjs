const fs = require('fs');

const HTML_PATH = 'home/ka_degree_home_page_mobile/code.html';
const OUT_PATH = 'src/pages/Home.tsx';
const TAILWIND_PATH = 'tailwind.config.js';

let html = fs.readFileSync(HTML_PATH, 'utf8');

// 1. EXTRACT CONFIG
const startIdx = html.indexOf('tailwind.config = ');
const endIdx = html.indexOf('</script>', startIdx);
let configStr = html.substring(startIdx + 'tailwind.config = '.length, endIdx).trim();
if (configStr.endsWith(';')) configStr = configStr.slice(0, -1);
const theme = eval('(' + configStr + ')').theme.extend;

const homeColors = theme.colors || {};
const homeTypography = theme.fontFamily ? Object.keys(theme.fontFamily) : [];
const homeRadius = theme.borderRadius ? Object.keys(theme.borderRadius) : [];

// 2. PATCH TAILWIND CONFIG
let currentConfigStr = fs.readFileSync(TAILWIND_PATH, 'utf8');

// Prefix and inject
const injectWithPrefix = (key, data, prefix) => {
  const regex = new RegExp(`(${key}:\\s*\\{)`);
  let prefixedData = {};
  for (let [k, v] of Object.entries(data)) {
    if (k === 'DEFAULT') {
      prefixedData[`${prefix}-DEFAULT`] = v;
    } else {
      prefixedData[`${prefix}-${k}`] = v;
    }
  }
  let dataStr = JSON.stringify(prefixedData, null, 2);
  dataStr = dataStr.substring(1, dataStr.length - 1).trim() + ',';
  currentConfigStr = currentConfigStr.replace(regex, `$1\n        ${dataStr}`);
};

if (theme.colors) injectWithPrefix('colors', theme.colors, 'home');
if (theme.spacing) injectWithPrefix('spacing', theme.spacing, 'home');
if (theme.fontSize) injectWithPrefix('fontSize', theme.fontSize, 'home');
if (theme.fontFamily) injectWithPrefix('fontFamily', theme.fontFamily, 'home');
if (theme.borderRadius) injectWithPrefix('borderRadius', theme.borderRadius, 'home');

fs.writeFileSync(TAILWIND_PATH, currentConfigStr);
console.log('Tailwind config patched successfully with home theme!');

// 3. EXTRACT BODY
let bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/;
let mainMatch = html.match(bodyRegex);
if (!mainMatch) {
  console.error("Body not found!");
  process.exit(1);
}
let mainContent = mainMatch[1]; 

// 4. EXTRACT AND FIX SCRIPTS
let scriptContent = "";
mainContent = mainContent.replace(/<script>([\s\S]*?)<\/script>/g, (match, scriptText) => {
    // Add basic typescript safety to the extracted script
    scriptText = scriptText.replace(/var targetId = btn\.getAttribute\('data-target'\);/g, "var targetId = btn.getAttribute('data-target') || '';");
    scriptText = scriptText.replace(/var targetEl = document\.getElementById\(targetId\);/g, "var targetEl = document.getElementById(targetId);");
    scriptText = scriptText.replace(/if \(targetEl\.classList/g, "if (targetEl && targetEl.classList");
    scriptText = scriptText.replace(/targetEl\.classList/g, "targetEl?.classList");
    
    // fix duplicate container variables
    scriptText = scriptText.replace(/const container = document\.querySelector\('\.alumni-carousel-container'\);/g, "const carouselContainer = document.querySelector('.alumni-carousel-container');");
    scriptText = scriptText.replace(/if \(container\) {/g, "if (carouselContainer) {\nconst container = carouselContainer;");
    
    // cast scrolling track variables to not be null inside closures
    scriptText = scriptText.replace(/(\w+Track)\.scrollBy/g, "$1?.scrollBy");
    scriptText = scriptText.replace(/(\w+Track)\.scrollLeft/g, "($1?.scrollLeft || 0)");
    scriptText = scriptText.replace(/(\w+Track)\.scrollWidth/g, "($1?.scrollWidth || 1)");
    scriptText = scriptText.replace(/if \((\w+Track)\)/g, "if ($1)"); // Ensure if conditions are clean
    
    scriptContent += "{\n" + scriptText + "\n}\n";
    return '';
});

// 5. JSX CONVERSIONS
mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, '');
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/for=/g, 'htmlFor=');
mainContent = mainContent.replace(/style="display:block;"/g, "style={{display: 'block'}}");
mainContent = mainContent.replace(/style="display:block;width:100%;height:100%"/g, "style={{display: 'block', width: '100%', height: '100%'}}");
mainContent = mainContent.replace(/style="width:100%;height:100%"/g, "style={{width: '100%', height: '100%'}}");
mainContent = mainContent.replace(/style="font-variation-settings: 'FILL' 1;"/g, "style={{fontVariationSettings: '\\'FILL\\' 1'}}");
mainContent = mainContent.replace(/style="transition-delay: (\d+)ms;"/g, "style={{transitionDelay: '$1ms'}}");
mainContent = mainContent.replace(/<img(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return '<img' + p1 + '/>';
});
mainContent = mainContent.replace(/<input(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return '<input' + p1 + '/>';
});
mainContent = mainContent.replace(/<br>/g, '<br/>');
mainContent = mainContent.replace(/<hr>/g, '<hr/>');

// 6. REPLACE HTML PREFIXES
// Prefix Colors
Object.keys(homeColors).forEach(color => {
  const prefixes = ['bg-', 'text-', 'border-', 'from-', 'via-', 'to-', 'ring-', 'divide-'];
  prefixes.forEach(prefix => {
    const regex = new RegExp('\\b' + prefix + color + '(?!-)', 'g');
    mainContent = mainContent.replace(regex, prefix + 'home-' + color);
  });
});

// Prefix Typography
homeTypography.forEach(typo => {
  const regexText = new RegExp('\\btext-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexText, 'text-home-' + typo);
  const regexFont = new RegExp('\\bfont-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexFont, 'font-home-' + typo);
});

// Prefix Border Radius
homeRadius.forEach(rad => {
  if (rad === 'DEFAULT') {
    mainContent = mainContent.replace(/\brounded(?!-)/g, 'rounded-home-DEFAULT');
  } else {
    const regex = new RegExp('\\brounded-' + rad + '(?!-)', 'g');
    mainContent = mainContent.replace(regex, 'rounded-home-' + rad);
  }
});

// 7. WRITE TO HOME.TSX
const componentStr = `// @ts-nocheck
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    ${scriptContent}
  }, []);

  return (
    <>
      ${mainContent}
    </>
  );
}
`;

fs.writeFileSync(OUT_PATH, componentStr);
console.log("Successfully rebuilt Home.tsx!");
