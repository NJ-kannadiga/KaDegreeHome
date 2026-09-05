const fs = require('fs');
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');

tailwind = tailwind.replace(/"DEFAULT": "0.125rem",/g, '"stitch-DEFAULT": "0.125rem",');
tailwind = tailwind.replace(/"lg": "0.25rem",/g, '"stitch-lg": "0.25rem",');
tailwind = tailwind.replace(/"xl": "0.5rem",/g, '"stitch-xl": "0.5rem",');
tailwind = tailwind.replace(/"full": "0.75rem",/g, '"stitch-full": "0.75rem",');

fs.writeFileSync('tailwind.config.js', tailwind);

let internship = fs.readFileSync('src/pages/Internship.tsx', 'utf8');
internship = internship.replace(/rounded-lg/g, 'rounded-stitch-lg');
internship = internship.replace(/rounded-xl/g, 'rounded-stitch-xl');
internship = internship.replace(/rounded-full/g, 'rounded-stitch-full');
internship = internship.replace(/rounded(?!\-)/g, 'rounded-stitch-DEFAULT');
fs.writeFileSync('src/pages/Internship.tsx', internship);

console.log("Patched border radius!");
