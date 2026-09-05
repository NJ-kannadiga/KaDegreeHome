const fs = require('fs');
let fileContent = fs.readFileSync('src/pages/Internship.tsx', 'utf8');

const scriptRegex = /<script>([\s\S]*?)<\/script>/;
const scriptMatch = fileContent.match(scriptRegex);

if (scriptMatch) {
  let scriptContent = scriptMatch[1];
  
  // Remove document.addEventListener('DOMContentLoaded', () => { and its closing });
  scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
  // Remove the last });
  const lastIndex = scriptContent.lastIndexOf('});');
  if (lastIndex !== -1) {
    scriptContent = scriptContent.substring(0, lastIndex) + scriptContent.substring(lastIndex + 3);
  }

  // Remove the <script> block entirely from JSX
  fileContent = fileContent.replace(scriptRegex, '');

  // Add useEffect to the component
  const componentStartRegex = /export default function Internship\(\) \{([\s\S]*?)return \(/;
  fileContent = fileContent.replace(componentStartRegex, `export default function Internship() {
  React.useEffect(() => {
    ${scriptContent}
  }, []);
  return (`);

  fs.writeFileSync('src/pages/Internship.tsx', fileContent);
  console.log("Fixed JSX syntax error!");
} else {
  console.log("Script tag not found.");
}
