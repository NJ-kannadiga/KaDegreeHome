const fs = require('fs');
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');

const typographyKeys = [
  "headline-md",
  "body-xl",
  "headline-sm",
  "caption",
  "display-hero-mobile",
  "label-md",
  "body-md",
  "headline-lg-mobile",
  "body-lg",
  "label-caps",
  "headline-lg",
  "display-hero"
];

typographyKeys.forEach(key => {
  // In fontFamily and fontSize, prefix the FIRST occurrence (which is the Stitch one)
  // Actually, let's just replace all occurrences of `"${key}":` with `"stitch-${key}":` in the first half of the file?
  // It's safer to use regex that only matches if it's before the `sans: ['Inter'` line.
  
  // Split the file at `sans: ['Inter'`
  const parts = tailwind.split('sans: [\'Inter\'');
  if (parts.length === 2) {
    let topHalf = parts[0];
    let bottomHalf = parts[1];
    
    // Replace in top half
    const regex = new RegExp(`"${key}":`, 'g');
    topHalf = topHalf.replace(regex, `"stitch-${key}":`);
    
    tailwind = topHalf + 'sans: [\'Inter\'' + bottomHalf;
  }
});

fs.writeFileSync('tailwind.config.js', tailwind);

let internship = fs.readFileSync('src/pages/Internship.tsx', 'utf8');
typographyKeys.forEach(key => {
  // Replace text-${key}
  const regexText = new RegExp(`text-${key}(?!-)`, 'g');
  internship = internship.replace(regexText, `text-stitch-${key}`);
  
  // Replace font-${key}
  const regexFont = new RegExp(`font-${key}(?!-)`, 'g');
  internship = internship.replace(regexFont, `font-stitch-${key}`);
});

fs.writeFileSync('src/pages/Internship.tsx', internship);

console.log("Patched typography!");
