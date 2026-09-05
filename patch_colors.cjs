const fs = require('fs');

// Fix tailwind.config.js
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');
tailwind = tailwind.replace(/"primary": "#29000c",/, '"stitch-primary": "#29000c",');
tailwind = tailwind.replace(/"secondary": "#7e5713",/, '"stitch-secondary": "#7e5713",');
tailwind = tailwind.replace(/"background": "#fef9f2",/, '"stitch-background": "#fef9f2",');
fs.writeFileSync('tailwind.config.js', tailwind);

// Fix Internship.tsx
let internship = fs.readFileSync('src/pages/Internship.tsx', 'utf8');
internship = internship.replace(/bg-primary(?!-)/g, 'bg-stitch-primary');
internship = internship.replace(/text-primary(?!-)/g, 'text-stitch-primary');
internship = internship.replace(/border-primary(?!-)/g, 'border-stitch-primary');
internship = internship.replace(/bg-secondary(?!-)/g, 'bg-stitch-secondary');
internship = internship.replace(/text-secondary(?!-)/g, 'text-stitch-secondary');
internship = internship.replace(/border-secondary(?!-)/g, 'border-stitch-secondary');
internship = internship.replace(/bg-background(?!-)/g, 'bg-stitch-background');

fs.writeFileSync('src/pages/Internship.tsx', internship);
console.log("Patched overlapping tailwind colors!");
