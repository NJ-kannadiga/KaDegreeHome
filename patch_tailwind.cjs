const fs = require('fs');

try {
  const extractedStr = fs.readFileSync('temp_tailwind_extracted.json', 'utf8');
  // Need to safely parse it since it's a JS object string, not strict JSON
  const stitchTheme = eval('(' + extractedStr + ')').theme.extend;
  
  let currentConfigStr = fs.readFileSync('tailwind.config.js', 'utf8');
  
  // We will stringify the stitchTheme parts and inject them into tailwind.config.js
  
  const inject = (key, data) => {
    // We look for `${key}: {` inside tailwind.config.js and insert data inside
    const regex = new RegExp(`(${key}:\\s*\\{)`);
    // Convert data to JSON string without outer braces
    let dataStr = JSON.stringify(data, null, 2);
    dataStr = dataStr.substring(1, dataStr.length - 1).trim() + ',';
    
    currentConfigStr = currentConfigStr.replace(regex, `$1\n        ${dataStr}`);
  };

  if (stitchTheme.colors) inject('colors', stitchTheme.colors);
  if (stitchTheme.spacing) inject('spacing', stitchTheme.spacing);
  if (stitchTheme.fontSize) inject('fontSize', stitchTheme.fontSize);
  if (stitchTheme.fontFamily) inject('fontFamily', stitchTheme.fontFamily);
  if (stitchTheme.borderRadius) inject('borderRadius', stitchTheme.borderRadius);

  fs.writeFileSync('tailwind.config.js', currentConfigStr);
  console.log('Tailwind config patched successfully!');
} catch (err) {
  console.error(err);
}
