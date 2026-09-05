const fs = require('fs');

try {
  let jsx = fs.readFileSync('temp_extracted_jsx.txt', 'utf8');

  // Fix inline styles
  jsx = jsx.replace(/style="(.*?)"/g, (match, p1) => {
    const parts = p1.split(';').filter(Boolean);
    const styleObj = {};
    parts.forEach(part => {
      const [key, value] = part.split(':').map(s => s.trim());
      if (key && value) {
        // camelCase key
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
  });

  // Fix tabindex to tabIndex
  jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

  const componentCode = `import React from 'react';
import { Link } from 'wouter';

export default function Internship() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

  fs.writeFileSync('src/pages/Internship.tsx', componentCode);
  console.log('JSX written to src/pages/Internship.tsx successfully.');
  
  // Now merge tailwind config
  const extractedTailwindStr = fs.readFileSync('temp_tailwind_extracted.json', 'utf8');
  // extractedTailwindStr is almost JSON but uses single quotes and has JS keys without quotes.
  // Actually, we can just evaluate it to get the object, since it's valid JS.
  const tailwindObj = eval('(' + extractedTailwindStr + ')');
  
  let currentTailwind = fs.readFileSync('tailwind.config.js', 'utf8');
  
  // We need to inject the extracted colors, fontFamily, etc. into the existing config.
  // Since it's string-based, it's safer to just rewrite the file entirely by parsing and stringifying, or inject at the end.
  // Actually, since tailwind.config.js is valid JS, let's write a new config that requires the old one, but we can't because it's ES module (export default).
  
} catch (err) {
  console.error(err);
}
