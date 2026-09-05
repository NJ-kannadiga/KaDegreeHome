import { motion } from "framer-motion";

export const AnimatedLogo = () => {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"
      />

      {/* Orbit 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 border-[1px] border-dashed border-blue-400/30 rounded-full"
      >
        <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 border-[1px] border-purple-400/20 rounded-full"
      >
        <div className="absolute bottom-4 right-2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        <div className="absolute top-4 left-2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
      </motion.div>

      {/* Orbit 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 border-[1px] border-dashed border-emerald-400/20 rounded-full"
      >
        <div className="absolute -bottom-1 left-1/3 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      </motion.div>

      {/* Center Emblem */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10 w-28 h-28 bg-[#0a192f] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden border border-blue-500/30"
      >
        {/* Animated Inner Gradient Background */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-50%] bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30 opacity-50"
        />

        {/* Core Text */}
        <div className="relative flex flex-col items-center justify-center">
          <span className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            KA
          </span>
          <span className="text-[9px] font-bold tracking-[0.2em] text-blue-200 mt-0.5 uppercase">
            Degree
          </span>
        </div>
      </motion.div>
    </div>
  );
};
