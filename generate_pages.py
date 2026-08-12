import os
import sys

def generate_page(title, txt_path, out_path):
    with open(txt_path, 'r', encoding='utf-8') as f:
        content = f.read().strip()
    
    paragraphs = content.split('\n')
    p_tags = []
    for p in paragraphs:
        p = p.strip()
        if p:
            p = p.replace('{', '{{').replace('}', '}}')
            p_tags.append('            <p className="mb-4">' + p + '</p>')
    
    jsx = f"""import {{ Helmet }} from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import {{ Footer }} from "@/components/layout/Footer";

export default function {title.replace(' ', '')}() {{
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>{title} - KA Degree</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">{title}</h1>
           <div className="text-slate-300 leading-relaxed">
{chr(10).join(p_tags)}
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}}
"""
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(jsx)

generate_page('Refund Policy', r'C:\Users\njkan\Downloads\refund.txt', 'src/pages/RefundPolicy.tsx')
generate_page('Privacy Policy', r'C:\Users\njkan\Downloads\policy.txt', 'src/pages/PrivacyPolicy.tsx')
generate_page('Terms of Service', r'C:\Users\njkan\Downloads\Terms_&_Conditions.txt', 'src/pages/TermsOfService.tsx')
print("Successfully generated 3 pages.")
