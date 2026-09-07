import re

with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Make sure Brain is imported
if 'Brain,' not in text:
    text = text.replace('import { \n  Rocket,', 'import { \n  Brain, Rocket,')

brain_visualizer_code = '''
// --- AI Brain Real-Life Visualizer ---
const AIBrainVisualizer = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto hidden lg:flex items-center justify-center">
      {/* Central Brain */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 20px rgba(59,130,246,0.5))", "drop-shadow(0 0 40px rgba(99,102,241,0.8))", "drop-shadow(0 0 20px rgba(59,130,246,0.5))"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-32 h-32 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-blue-500/50 flex flex-col items-center justify-center text-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
      >
        <Brain className="w-16 h-16 mb-1" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-300">AI Core</span>
      </motion.div>

      {/* SVG Connecting Lines & Data Packets */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.8)" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="100%" stopColor="rgba(245,158,11,0.8)" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.8)" />
          </linearGradient>
        </defs>
        
        {/* Line 1: Brain to Career (Top Right) */}
        <path id="path1" d="M 200 200 C 250 150, 300 150, 320 100" fill="none" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
        <circle r="4" fill="#fff" filter="blur(1px)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 C 250 150, 300 150, 320 100" />
        </circle>

        {/* Line 2: Brain to Projects (Top Left) */}
        <path id="path2" d="M 200 200 C 150 150, 100 150, 80 100" fill="none" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
        <circle r="4" fill="#fff" filter="blur(1px)">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 200 C 150 150, 100 150, 80 100" />
        </circle>

        {/* Line 3: Brain to Real Life (Bottom Center) */}
        <path id="path3" d="M 200 200 C 200 250, 200 300, 200 320" fill="none" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
        <circle r="4" fill="#fff" filter="blur(1px)">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 200 200 C 200 250, 200 300, 200 320" />
        </circle>
      </svg>

      {/* Floating Outcome Nodes */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50px] right-[40px] z-20 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <Briefcase className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-slate-300 bg-slate-950/50 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-800">Career Growth</span>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50px] left-[40px] z-20 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-amber-500/50 flex items-center justify-center text-amber-400 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          <Rocket className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-slate-300 bg-slate-950/50 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-800">Live Projects</span>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-purple-500/50 flex items-center justify-center text-purple-400 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <Globe className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-slate-300 bg-slate-950/50 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-800">Real-Life Impact</span>
      </motion.div>

    </div>
  );
};

'''

# Insert the component before "export default function Internship()"
text = text.replace('export default function Internship() {', brain_visualizer_code + '\nexport default function Internship() {')

# Change the hero section layout to grid
old_hero_container = 'className="container relative z-10 mx-auto px-4 text-center md:px-6"'
new_hero_container = 'className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left"'
text = text.replace(old_hero_container, new_hero_container)

old_badges_div = 'className="flex flex-col items-center justify-center gap-3 mb-6 animate-pulse"'
new_badges_div = 'className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-6 animate-pulse"'
text = text.replace(old_badges_div, new_badges_div)

old_buttons_div = 'className="flex flex-col sm:flex-row gap-4 justify-center"'
new_buttons_div = 'className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"'
text = text.replace(old_buttons_div, new_buttons_div)

# Add the AIBrainVisualizer next to the text block
old_text_block = '''</Button>
            </div>
          </motion.div>
        </div>
      </section>'''
new_text_block = '''</Button>
            </div>
          </motion.div>
          <AIBrainVisualizer />
        </div>
      </section>'''
text = text.replace(old_text_block, new_text_block)

with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Brain visualizer added')
