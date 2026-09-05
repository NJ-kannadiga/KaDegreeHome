const fs = require('fs');

let html = fs.readFileSync('Internship_page/ka_degree_internship_landing_page/code.html', 'utf8');

// Extract config
let configMatch = html.match(/tailwind\.config\s*=\s*(\{.*?\});/s);
if (!configMatch) {
  console.error("Config not found");
  process.exit(1);
}
let configStr = configMatch[1];
// Eval it to get the object
let tailwindConfig = eval('(' + configStr + ')');
let extend = tailwindConfig.theme.extend;

let stitchColors = extend.colors || {};
let stitchTypography = extend.fontFamily ? Object.keys(extend.fontFamily) : [];
let stitchRadius = extend.borderRadius ? Object.keys(extend.borderRadius) : [];

let bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/;
let mainMatch = html.match(bodyRegex);
if (!mainMatch) {
  console.error("Body not found!");
  process.exit(1);
}
let mainContent = mainMatch[1]; 

// Extract and remove Script tag
let scriptContent = "";
mainContent = mainContent.replace(/<script>([\s\S]*?)<\/script>/g, (match, scriptText) => {
    // Add basic typescript safety to the extracted script
    scriptText = scriptText.replace(/var targetId = btn\.getAttribute\('data-target'\);/g, "var targetId = btn.getAttribute('data-target') || '';");
    scriptText = scriptText.replace(/var targetEl = document\.getElementById\(targetId\);/g, "var targetEl = document.getElementById(targetId);");
    scriptText = scriptText.replace(/if \(targetEl\.classList/g, "if (targetEl && targetEl.classList");
    scriptText = scriptText.replace(/targetEl\.classList/g, "targetEl?.classList");
    
    // cast scrolling track variables to not be null inside closures
    scriptText = scriptText.replace(/catTrack\.scrollBy/g, "catTrack?.scrollBy");
    scriptText = scriptText.replace(/catTrack\.scrollLeft/g, "(catTrack?.scrollLeft || 0)");
    scriptText = scriptText.replace(/catTrack\.scrollWidth/g, "(catTrack?.scrollWidth || 1)");
    
    scriptText = scriptText.replace(/testiTrack\.scrollLeft/g, "(testiTrack?.scrollLeft || 0)");
    scriptText = scriptText.replace(/testiTrack\.scrollWidth/g, "(testiTrack?.scrollWidth || 1)");
    
    scriptContent += scriptText + "\n";
    return '';
});

// Remove Footer logic deleted

// JSX conversions
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/for=/g, 'htmlFor=');
mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, ''); 
mainContent = mainContent.replace(/stroke-width/g, 'strokeWidth');
mainContent = mainContent.replace(/stroke-linecap/g, 'strokeLinecap');
mainContent = mainContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
mainContent = mainContent.replace(/fill-rule/g, 'fillRule');
mainContent = mainContent.replace(/clip-rule/g, 'clipRule');
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

// Prefix Colors
Object.keys(stitchColors).forEach(color => {
  const prefixes = ['bg-', 'text-', 'border-', 'from-', 'via-', 'to-', 'ring-', 'divide-'];
  prefixes.forEach(prefix => {
    const regex = new RegExp('\\\\b' + prefix + color + '(?!-)', 'g');
    mainContent = mainContent.replace(regex, prefix + 'stitch-' + color);
  });
});

// Prefix Typography
stitchTypography.forEach(typo => {
  const regexText = new RegExp('\\\\btext-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexText, 'text-stitch-' + typo);
  const regexFont = new RegExp('\\\\bfont-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexFont, 'font-stitch-' + typo);
});

// Prefix Border Radius
stitchRadius.forEach(rad => {
  if (rad === 'DEFAULT') {
    mainContent = mainContent.replace(/\\brounded(?!-)/g, 'rounded-stitch-DEFAULT');
  } else {
    mainContent = mainContent.replace(new RegExp('\\\\brounded-' + rad + '(?!-)', 'g'), 'rounded-stitch-' + rad);
  }
});

// Wrap everything inside a div with the body classes to preserve global styles
let bodyClassMatch = html.match(/<body[^>]*class="([^"]*)"/);
let bodyClasses = bodyClassMatch ? bodyClassMatch[1] : "";
// Prefix body classes
Object.keys(stitchColors).forEach(color => {
  const prefixes = ['bg-', 'text-'];
  prefixes.forEach(prefix => {
    const regex = new RegExp('\\\\b' + prefix + color + '(?!-)', 'g');
    bodyClasses = bodyClasses.replace(regex, prefix + 'stitch-' + color);
  });
});
stitchTypography.forEach(typo => {
  const regexText = new RegExp('\\\\btext-' + typo + '(?!-)', 'g');
  bodyClasses = bodyClasses.replace(regexText, 'text-stitch-' + typo);
  const regexFont = new RegExp('\\\\bfont-' + typo + '(?!-)', 'g');
  bodyClasses = bodyClasses.replace(regexFont, 'font-stitch-' + typo);
});

mainContent = `<div className="${bodyClasses} w-full">\n${mainContent}\n</div>`;

let finalScript = `
    let autoplayInterval;
    let isMouseOver = false;

    // Accordion Logic
    const initAccordion = () => {
      const items = document.querySelectorAll('.group[role="button"]');
      items.forEach(item => {
        // Remove existing listener to avoid duplicates if re-rendered
        item.replaceWith(item.cloneNode(true));
      });
      const newItems = document.querySelectorAll('.group[role="button"]');
      newItems.forEach(item => {
        item.addEventListener('click', () => {
          const content = item.nextElementSibling;
          const icon = item.querySelector('.material-symbols-outlined');
          const isExpanded = item.getAttribute('aria-expanded') === 'true';

          // Close all
          document.querySelectorAll('.group[role="button"]').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            btn.nextElementSibling?.classList.add('hidden');
            const i = btn.querySelector('.material-symbols-outlined');
            if(i) i.textContent = 'add';
          });

          if (!isExpanded) {
            item.setAttribute('aria-expanded', 'true');
            if (content) content.classList.remove('hidden');
            if (icon) icon.textContent = 'remove';
          }
        });
      });
    };

    // Original Script injected from Stitch HTML
    ${scriptContent}

    initAccordion();
    
    return () => {
        // cleanup if necessary
    }
`;

const reactComponent = "import React from 'react';\n\nexport default function Internship() {\n  React.useEffect(() => {\n" + finalScript + "\n  }, []);\n\n  return (\n    <>\n      " + mainContent + "\n    </>\n  );\n}\n";

fs.writeFileSync('src/pages/Internship.tsx', reactComponent);
console.log("Completely rebuilt Internship.tsx with exact styling and HTML from Internship_page");

// Now update tailwind.config.js
let twConfigStr = fs.readFileSync('tailwind.config.js', 'utf8');

// We will just do a simple replacement of the stitch- variables.
// Read the colors and typography from new config and format them.
let newColors = Object.entries(stitchColors).map(([k, v]) => `        "stitch-${k}": "${v}"`).join(',\n');
let newFonts = Object.entries(extend.fontFamily).map(([k, v]) => `        "stitch-${k}": ${JSON.stringify(v)}`).join(',\n');
let newRadii = Object.entries(extend.borderRadius).map(([k, v]) => `        "stitch-${k}": "${v}"`).join(',\n');
let newTextSizes = Object.entries(extend.fontSize).map(([k, v]) => `        "stitch-${k}": ${JSON.stringify(v)}`).join(',\n');

// In tailwind.config.js, we had blocks like:
// fontFamily: { "stitch-headline-md": ... 
// Let's replace anything from "stitch-" up to the next KA Degree property or the end of the block.
// Actually, it's safer to just read the file, parse it as a module? No it's commonJS, we could require it and then write it back, but it's not JSON.
// Let's create a new tailwind.config.js content entirely using string replace.

fs.writeFileSync('temp_tailwind_new.json', JSON.stringify({
    colors: newColors,
    fonts: newFonts,
    radii: newRadii,
    textSizes: newTextSizes
}));

