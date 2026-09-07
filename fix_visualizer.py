import re

with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

new_visualizer = '''// --- AI Brain Real-Life Visualizer ---
const AIBrainVisualizer = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-16 lg:mt-0 flex flex-col items-center justify-center relative py-4">
      
      {/* Background glow for the cluster */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Center Brain */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 20px rgba(59,130,246,0.3))", "drop-shadow(0 0 40px rgba(59,130,246,0.6))", "drop-shadow(0 0 20px rgba(59,130,246,0.3))"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] bg-slate-900/90 backdrop-blur-xl border-2 border-blue-500/50 flex flex-col items-center justify-center text-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.2)] mb-10"
      >
        <Brain className="w-14 h-14 sm:w-16 sm:h-16 mb-2" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300">AI Core</span>
      </motion.div>

      {/* Connecting Path Lines */}
      <div className="absolute top-[130px] sm:top-[160px] h-[50px] sm:h-[60px] w-px border-l-2 border-dashed border-blue-500/40 -z-10" />
      <div className="absolute top-[180px] sm:top-[220px] w-[66%] border-t-2 border-dashed border-blue-500/40 -z-10" />
      <div className="absolute top-[180px] sm:top-[220px] left-[17%] h-[20px] sm:h-[30px] w-px border-l-2 border-dashed border-blue-500/40 -z-10" />
      <div className="absolute top-[180px] sm:top-[220px] right-[17%] h-[20px] sm:h-[30px] w-px border-r-2 border-dashed border-blue-500/40 -z-10" />
      <div className="absolute top-[180px] sm:top-[220px] left-[50%] h-[20px] sm:h-[30px] w-px border-l-2 border-dashed border-blue-500/40 -z-10" />


      {/* Grid of Outcomes */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full relative z-20 mt-4 sm:mt-8">
        <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border border-emerald-500/50 flex items-center justify-center text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-3">
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-[9px] sm:text-[11px] font-bold text-slate-200 text-center uppercase tracking-wider bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800">Career</span>
        </motion.div>

        <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 5, repeat: Infinity }} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border border-amber-500/50 flex items-center justify-center text-amber-400 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-3">
            <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-[9px] sm:text-[11px] font-bold text-slate-200 text-center uppercase tracking-wider bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800">Projects</span>
        </motion.div>

        <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4.5, repeat: Infinity }} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border border-purple-500/50 flex items-center justify-center text-purple-400 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)] mb-3">
            <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-[9px] sm:text-[11px] font-bold text-slate-200 text-center uppercase tracking-wider bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800">Impact</span>
        </motion.div>
      </div>
    </div>
  );
};'''

text = re.sub(r'// --- AI Brain Real-Life Visualizer ---.*?\n    </div>\n  \);\n};', new_visualizer, text, flags=re.DOTALL)


with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('New responsive tree visualizer added')
