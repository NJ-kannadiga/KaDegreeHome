const fs = require('fs');
let fileContent = fs.readFileSync('src/pages/Internship.tsx', 'utf8');

// Remove the <footer> block
const footerRegex = /<footer[\s\S]*?<\/footer>/;
fileContent = fileContent.replace(footerRegex, '');

fs.writeFileSync('src/pages/Internship.tsx', fileContent);
console.log("Footer removed!");
