import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950">
      <div className="relative flex flex-col items-center">
        {/* Animated outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="h-24 w-24 rounded-full border-4 border-slate-800 border-t-brand-500 border-b-brand-500"
        />
        
        {/* Crest logo center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white font-extrabold text-xl shadow-[0_0_20px_rgba(14,165,233,0.5)]"
          >
            V
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <h2 className="font-sans font-bold tracking-widest text-white text-lg">
            VENITE UNIVERSITY
          </h2>
          <p className="font-mono text-xs text-brand-400 tracking-wider mt-1 uppercase">
            Inspiring Innovation & Excellence
          </p>
        </motion.div>
      </div>
    </div>
  );
}
