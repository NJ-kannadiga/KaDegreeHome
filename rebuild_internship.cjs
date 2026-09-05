const fs = require('fs');

const stitchColors = {
  'on-primary-fixed-variant': '#772e41', 'surface-bright': '#fef9f2', 'surface-container-lowest': '#ffffff', 'error': '#ba1a1a', 'error-container': '#ffdad6', 'inverse-on-surface': '#f5f0ea', 'tertiary-fixed': '#ffd9de', 'secondary-container': '#fec97b', 'surface-container': '#f2ede7', 'on-secondary-fixed': '#291800', 'surface-container-low': '#f8f3ed', 'on-secondary': '#ffffff', 'on-background': '#1d1b18', 'secondary-fixed': '#ffddb1', 'on-tertiary-fixed': '#3f0016', 'secondary-fixed-dim': '#f2be71', 'tertiary-fixed-dim': '#ffb2bf', 'on-primary-fixed': '#3e0117', 'on-primary': '#ffffff', 'primary-fixed': '#ffd9df', 'surface-dim': '#ded9d4', 'primary': '#29000c', 'surface-container-high': '#ece7e2', 'on-secondary-container': '#78520e', 'on-error': '#ffffff', 'on-error-container': '#93000a', 'on-tertiary': '#ffffff', 'on-tertiary-container': '#d26c83', 'surface-variant': '#e6e2dc', 'on-primary-container': '#cb7185', 'on-surface-variant': '#534245', 'surface-container-highest': '#e6e2dc', 'on-surface': '#1d1b18', 'inverse-surface': '#32302c', 'outline': '#867275', 'outline-variant': '#d8c1c4', 'on-secondary-fixed-variant': '#614000', 'surface-tint': '#944558', 'primary-fixed-dim': '#ffb1c1', 'tertiary-container': '#4f031e', 'tertiary': '#29000c', 'inverse-primary': '#ffb1c1', 'surface': '#fef9f2', 'on-tertiary-fixed-variant': '#7c293f', 'primary-container': '#4b0a20', 'background': '#fef9f2', 'secondary': '#7e5713'
};

const stitchTypography = [
  "headline-md", "body-xl", "headline-sm", "caption", "display-hero-mobile", "label-md", "body-md", "headline-lg-mobile", "body-lg", "label-caps", "headline-lg", "display-hero"
];

const stitchRadius = ['DEFAULT', 'lg', 'xl', 'full'];

// 1. Update tailwind.config.js safely
let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');
tailwind = tailwind.replace(/"stitch-[^"]+":\s*"[^"]+",\s*/g, '');

let stitchColorStr = Object.entries(stitchColors).map(([k, v]) => '"stitch-' + k.replace(/^stitch-/, '') + '": "' + v + '"').join(',\n        ');
tailwind = tailwind.replace(/colors: \{/, 'colors: {\n        ' + stitchColorStr + ',');

fs.writeFileSync('tailwind.config.js', tailwind);

// 2. Process HTML
let html = fs.readFileSync('Internship/ka_degree_ai_internship_landing_page/code.html', 'utf8');
let bodyRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
let mainMatch = html.match(bodyRegex);
if (!mainMatch) {
  console.error("Main not found!");
  process.exit(1);
}
let mainContent = mainMatch[0]; // Include the <main> tag itself

// Remove Footer
mainContent = mainContent.replace(/<footer[\s\S]*?<\/footer>/, '');

// JSX conversions
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/for=/g, 'htmlFor=');
mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments
mainContent = mainContent.replace(/stroke-width/g, 'strokeWidth');
mainContent = mainContent.replace(/stroke-linecap/g, 'strokeLinecap');
mainContent = mainContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
mainContent = mainContent.replace(/fill-rule/g, 'fillRule');
mainContent = mainContent.replace(/clip-rule/g, 'clipRule');
mainContent = mainContent.replace(/<img(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return '<img' + p1 + '/>';
});
mainContent = mainContent.replace(/<input(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return '<input' + p1 + '/>';
});
mainContent = mainContent.replace(/<br>/g, '<br/>');
mainContent = mainContent.replace(/<hr>/g, '<hr/>');

// Prefix Colors
Object.keys(stitchColors).forEach(color => {
  const prefixes = ['bg-', 'text-', 'border-', 'from-', 'via-', 'to-', 'ring-', 'divide-'];
  prefixes.forEach(prefix => {
    const regex = new RegExp('\\\\b' + prefix + color + '(?!-)', 'g');
    mainContent = mainContent.replace(regex, prefix + 'stitch-' + color);
  });
});

// Prefix Typography
stitchTypography.forEach(typo => {
  const regexText = new RegExp('\\\\btext-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexText, 'text-stitch-' + typo);
  const regexFont = new RegExp('\\\\bfont-' + typo + '(?!-)', 'g');
  mainContent = mainContent.replace(regexFont, 'font-stitch-' + typo);
});

// Prefix Border Radius
stitchRadius.forEach(rad => {
  if (rad === 'DEFAULT') {
    mainContent = mainContent.replace(/\\brounded(?!-)/g, 'rounded-stitch-DEFAULT');
  } else {
    mainContent = mainContent.replace(new RegExp('\\\\brounded-' + rad + '(?!-)', 'g'), 'rounded-stitch-' + rad);
  }
});

let scriptContent = `
    // FAQ Accordion Behavior
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.material-symbols-outlined');
        const isOpen = !content?.classList.contains('hidden');

        // Close all open FAQs
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-toggle .material-symbols-outlined').forEach(i => {
          i.textContent = 'add';
          i.classList.remove('rotate-45');
        });

        if (!isOpen && content) {
          content.classList.remove('hidden');
          if (icon) icon.textContent = 'remove';
        }
      });
    });

    // Testimonial Carousel Behavior
    const carousel = document.getElementById('testimonial-carousel');
    const dots = document.getElementById('testimonial-dots')?.children;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    const totalSlides = 3;
    let autoplayInterval;

    function updateCarousel(index) {
      if (!carousel) return;
      currentIndex = (index + totalSlides) % totalSlides;
      carousel.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
      
      if (dots) {
        Array.from(dots).forEach((dot, idx) => {
          if (idx === currentIndex) {
            dot.className = 'w-2 h-2 rounded-stitch-full bg-stitch-primary';
          } else {
            dot.className = 'w-2 h-2 rounded-stitch-full bg-stitch-outline-variant';
          }
        });
      }
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(() => {
        updateCarousel(currentIndex + 1);
      }, 5000); // 5 seconds autoplay
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    }

    prevBtn?.addEventListener('click', () => {
      updateCarousel(currentIndex - 1);
      startAutoplay(); // restart timer
    });
    
    nextBtn?.addEventListener('click', () => {
      updateCarousel(currentIndex + 1);
      startAutoplay(); // restart timer
    });

    // Start autoplay on load
    startAutoplay();

    // Pause autoplay on hover
    const carouselContainer = document.getElementById('testimonial-carousel-container');
    carouselContainer?.addEventListener('mouseenter', stopAutoplay);
    carouselContainer?.addEventListener('mouseleave', startAutoplay);

    return () => {
      stopAutoplay();
      carouselContainer?.removeEventListener('mouseenter', stopAutoplay);
      carouselContainer?.removeEventListener('mouseleave', startAutoplay);
    };
`;

const reactComponent = "import React from 'react';\\nimport { Link } from 'wouter';\\n\\nexport default function Internship() {\\n  React.useEffect(() => {\\n" + scriptContent + "\\n  }, []);\\n\\n  return (\\n    <>\\n      " + mainContent + "\\n    </>\\n  );\\n}\\n";

fs.writeFileSync('src/pages/Internship.tsx', reactComponent);
console.log("Completely rebuilt Internship.tsx with exact styling!");
