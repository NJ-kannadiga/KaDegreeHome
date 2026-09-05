import re

def convert():
    with open('programs/code.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if body_match:
        body_content = body_match.group(1)
    else:
        body_content = html

    # Remove script tags
    body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)

    # Convert class to className
    body_content = body_content.replace('class=', 'className=')
    # Convert inline styles
    body_content = body_content.replace('style="width: 0;"', 'style={{width: 0}}')
    # Convert self-closing tags
    body_content = re.sub(r'<(img|br|hr|input|meta|link)([^>]*?)>', r'<\1\2 />', body_content)

    # Fix comments
    body_content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body_content, flags=re.DOTALL)

    # Build JSX component
    jsx = f"""import React, {{ useEffect }} from "react";
import {{ Helmet }} from "react-helmet-async";
import {{ Link }} from "wouter";

export default function AcademicPrograms() {{
  useEffect(() => {{
    const observerOptions = {{
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    }};

    const observer = new IntersectionObserver((entries, observer) => {{
        entries.forEach((entry, index) => {{
            if (entry.isIntersecting) {{
                setTimeout(() => {{
                    entry.target.classList.add("active");
                    const progressBars = entry.target.querySelectorAll(".progress-bar-fill");
                    progressBars.forEach((bar: any) => {{
                        const targetWidth = bar.getAttribute("data-progress");
                        setTimeout(() => {{
                            bar.style.width = targetWidth;
                        }}, 300);
                    }});
                }}, index * 100);
                observer.unobserve(entry.target);
            }}
        }});
    }}, observerOptions);

    document.querySelectorAll(".reveal-up").forEach(el => {{
        observer.observe(el);
    }});
    
    return () => observer.disconnect();
  }}, []);

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] font-['Hanken_Grotesk'] min-h-screen flex flex-col">
      <Helmet>
        <title>Academic Programs | KA Degree</title>
        <style>{{`
          .editorial-border {{ border: 1px solid #c7c7c0; }}
          .editorial-border-hover:hover {{ border-color: #570013; }}
          .reveal-up {{
              opacity: 0;
              transform: translateY(30px);
              transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }}
          .reveal-up.active {{
              opacity: 1;
              transform: translateY(0);
          }}
          .progress-bar-fill {{
              width: 0;
              transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
          }}
          .card-hover {{
              transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          }}
          .card-hover:hover {{
              transform: translateY(-4px);
              box-shadow: 0 20px 40px -20px rgba(0,0,0,0.05);
          }}
          .cta-hover:hover .material-symbols-outlined {{
              transform: translateX(4px);
          }}
          .cta-hover .material-symbols-outlined {{
              transition: transform 0.3s ease;
          }}
        `}}</style>
      </Helmet>
      
      {{/* The page content */}}
      {body_content}
    </div>
  );
}}
"""

    with open('src/pages/AcademicPrograms.tsx', 'w', encoding='utf-8') as f:
        f.write(jsx)
    print('Successfully generated src/pages/AcademicPrograms.tsx')

if __name__ == '__main__':
    convert()
