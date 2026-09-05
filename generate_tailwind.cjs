const fs = require('fs');

const baseTailwind = `import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "brand-bg-warm": "#F4EFE6",
        "brand-burgundy": "#542A35",
        "brand-burgundy-dark": "#3B1520",
        "brand-text-primary": "#1C1B1B",
        "brand-text-secondary": "#504346",
        "brand-cream": "#FDFBF7"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {},
      fontSize: {},
      spacing: {}
    },
  },
  plugins: [],
}

export default config
`;

fs.writeFileSync('tailwind.config.js', baseTailwind);

// Function to extract config from HTML
const extractConfig = (htmlPath) => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const startIdx = html.indexOf('tailwind.config = ');
  const endIdx = html.indexOf('</script>', startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    let configStr = html.substring(startIdx + 'tailwind.config = '.length, endIdx).trim();
    if (configStr.endsWith(';')) configStr = configStr.slice(0, -1);
    return eval('(' + configStr + ')').theme.extend;
  }
  return null;
}

const aboutUsTheme = extractConfig('about_us/code.html');
const stitchTheme = extractConfig('internship_page/ka_degree_internship_landing_page/code.html');

let currentConfigStr = fs.readFileSync('tailwind.config.js', 'utf8');

const inject = (key, data, prefix = '') => {
  const regex = new RegExp(`(${key}:\\s*\\{)`);
  let prefixedData = {};
  for (let [k, v] of Object.entries(data)) {
    if (prefix) {
      if (k === 'DEFAULT') prefixedData[`${prefix}-DEFAULT`] = v;
      else prefixedData[`${prefix}-${k}`] = v;
    } else {
      prefixedData[k] = v;
    }
  }
  let dataStr = JSON.stringify(prefixedData, null, 2);
  dataStr = dataStr.substring(1, dataStr.length - 1).trim() + ',';
  currentConfigStr = currentConfigStr.replace(regex, `$1\n        ${dataStr}`);
};

// 1. Inject About Us (Global Theme - NO PREFIX)
if (aboutUsTheme) {
  if (aboutUsTheme.colors) inject('colors', aboutUsTheme.colors);
  if (aboutUsTheme.fontFamily) inject('fontFamily', aboutUsTheme.fontFamily);
  if (aboutUsTheme.fontSize) inject('fontSize', aboutUsTheme.fontSize);
  if (aboutUsTheme.spacing) inject('spacing', aboutUsTheme.spacing);
  if (aboutUsTheme.borderRadius) inject('borderRadius', aboutUsTheme.borderRadius);
}

// 2. Inject Internship (Isolated Theme - STITCH PREFIX)
if (stitchTheme) {
  if (stitchTheme.colors) inject('colors', stitchTheme.colors, 'stitch');
  if (stitchTheme.fontFamily) inject('fontFamily', stitchTheme.fontFamily, 'stitch');
  if (stitchTheme.fontSize) inject('fontSize', stitchTheme.fontSize, 'stitch');
  if (stitchTheme.spacing) inject('spacing', stitchTheme.spacing, 'stitch');
  if (stitchTheme.borderRadius) inject('borderRadius', stitchTheme.borderRadius, 'stitch');
}

fs.writeFileSync('tailwind.config.js', currentConfigStr);
console.log('Regenerated pristine tailwind.config.js!');
