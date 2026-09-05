const fs = require('fs');
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');

// The original Stitch `on-surface-variant` is at the top part of the file.
// We'll replace the first occurrence in tailwind.config.js
tailwind = tailwind.replace(/"on-surface-variant": "#534245",/, '"stitch-on-surface-variant": "#534245",');
fs.writeFileSync('tailwind.config.js', tailwind);

let internship = fs.readFileSync('src/pages/Internship.tsx', 'utf8');
internship = internship.replace(/on-surface-variant/g, 'stitch-on-surface-variant');
fs.writeFileSync('src/pages/Internship.tsx', internship);

console.log("Patched on-surface-variant!");
