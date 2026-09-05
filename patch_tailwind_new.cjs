const fs = require('fs');

try {
  const extractedStr = fs.readFileSync('temp_tailwind_new.json', 'utf8');
  const stitchTheme = JSON.parse(extractedStr);
  
  let currentConfigStr = fs.readFileSync('tailwind.config.js', 'utf8');
  
  const inject = (key, dataStr) => {
    // We look for `${key}: {` inside tailwind.config.js and insert dataStr inside
    const regex = new RegExp(`(${key}:\\s*\\{)`);
    currentConfigStr = currentConfigStr.replace(regex, `$1\n${dataStr},`);
  };

  if (stitchTheme.colors) inject('colors', stitchTheme.colors);
  if (stitchTheme.textSizes) inject('fontSize', stitchTheme.textSizes);
  if (stitchTheme.fonts) inject('fontFamily', stitchTheme.fonts);
  if (stitchTheme.radii) inject('borderRadius', stitchTheme.radii);

  fs.writeFileSync('tailwind.config.js', currentConfigStr);
  console.log('Tailwind config patched successfully!');
} catch (err) {
  console.error(err);
}
