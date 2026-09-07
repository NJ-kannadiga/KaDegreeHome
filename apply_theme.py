import re
with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Enhance the animated background in the hero
new_bg = '''        {/* Enhanced Advanced Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* High-tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Animated Aurora Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4], x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/30 blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3], x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-1/4 top-1/4 h-[700px] w-[700px] rounded-full bg-indigo-600/30 blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen" 
          />
        </div>'''

text = re.sub(r'\{\/\* Animated Background Elements \*\/.*?<\/div>', new_bg, text, flags=re.DOTALL)

# 2. Enhance the category cards to have glassmorphism and glowing borders on hover
old_card = r'className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"'
new_card = 'className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/80 hover:bg-slate-800/60 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-hidden"'
text = text.replace(old_card, new_card)

# Add a subtle gradient sweep effect inside the card on hover
old_icon_div = r'<div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-blue-500/10 transition-colors`}>'
new_icon_div = '''<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-slate-950/80 backdrop-blur-md flex items-center justify-center mb-6 border border-slate-700/50 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-500`}>'''
text = text.replace(old_icon_div, new_icon_div)

# Make sure all headings have absolute white for contrast
text = text.replace('text-white', 'text-slate-50')

with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Advanced Dark Theme Applied')
