const fs = require('fs');

const html = fs.readFileSync('about_us/code.html', 'utf8');

const startIdx = html.indexOf('tailwind.config = ');
const endIdx = html.indexOf('</script>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  let configStr = html.substring(startIdx + 'tailwind.config = '.length, endIdx).trim();
  if (configStr.endsWith(';')) configStr = configStr.slice(0, -1);
  
  const theme = eval('(' + configStr + ')').theme.extend;
  
  let currentConfigStr = fs.readFileSync('tailwind.config.js', 'utf8');
  
  const inject = (key, data) => {
    const regex = new RegExp(`(${key}:\\s*\\{)`);
    let dataStr = JSON.stringify(data, null, 2);
    dataStr = dataStr.substring(1, dataStr.length - 1).trim() + ',';
    
    currentConfigStr = currentConfigStr.replace(regex, `$1\n        ${dataStr}`);
  };

  if (theme.colors) inject('colors', theme.colors);
  if (theme.spacing) inject('spacing', theme.spacing);
  if (theme.fontSize) inject('fontSize', theme.fontSize);
  if (theme.fontFamily) inject('fontFamily', theme.fontFamily);
  if (theme.borderRadius) inject('borderRadius', theme.borderRadius);

  fs.writeFileSync('tailwind.config.js', currentConfigStr);
  console.log('Tailwind config patched successfully with about_us theme!');
} else {
  console.error("Could not parse config from about_us/code.html");
}
