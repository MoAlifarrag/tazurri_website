import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }) => {
    const [percent, setPercent] = useState(0);
    const [phase, setPhase] = useState('loading'); // loading, bursting, finished

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent(p => {
                if (p >= 100) {
                    clearInterval(timer);
                    setPhase('bursting');
                    // Sync the exit with the peak of the light expansion
                    setTimeout(onFinish, 800);
                    return 100;
                }
                return p + 1;
            });
        }, 12);
        return () => clearInterval(timer);
    }, [onFinish]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
            {/* 
                THE LIGHT PORTAL (VECTOR): 
                Only created when the loading is complete.
                This prevents any 'white halo' from appearing at the start.
            */}
            <AnimatePresence>
                {phase === 'bursting' && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 50],
                            opacity: [0, 1],
                        }}
                        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute w-32 h-32 bg-[#fcfcf9] rounded-full blur-[50px] z-50 pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* 
                LOGO CORE:
                Remains stable and clean during the loading phase.
            */}
            <motion.div
                animate={phase === 'bursting' ? {
                    scale: 5,
                    opacity: [1, 0],
                    filter: "blur(40px)",
                } : { scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeIn" }}
                className="relative z-40 flex flex-col items-center"
            >
                <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
                    {/* Ghost Logo with extremely subtle opacity */}
                    <img
                        src="/assets/Final Logo-01.png"
                        className="w-full h-full object-contain brightness-0 invert opacity-[0.05]"
                        alt="Ghost"
                    />
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <img
                            src="/assets/Final Logo-01.png"
                            className="w-full h-full object-contain brightness-0 invert"
                            style={{ clipPath: `inset(${100 - percent}% 0 0 0)` }}
                            alt="Fill"
                        />
                    </div>
                </div>

                {/* LOADING UI */}
                <motion.div
                    animate={phase === 'bursting' ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 flex flex-col items-center"
                >
                    <div className="h-[1px] w-48 bg-white/5 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-[#8ba888]"
                            style={{ width: `${percent}%` }}
                        />
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-4">
                        <span className="text-white/40 text-[11px] uppercase tracking-[1.2em] font-black italic">
                            {percent < 100 ? "Syncing Creation" : "Vision Primed"}
                        </span>
                        <span className="text-white font-serif italic text-5xl tracking-tighter">
                            {percent}%
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* ATMOSPHERIC SPACE DEPTH */}
            {phase === 'bursting' && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.1, opacity: 0 }}
                        animate={{ scale: 12, opacity: [0, 0.4, 0] }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute border border-[#8ba888]/30 rounded-full w-[40vw] h-[40vw]"
                    />
                    <motion.div
                        initial={{ scale: 0.05, opacity: 0 }}
                        animate={{ scale: 18, opacity: [0, 0.2, 0] }}
                        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
                        className="absolute border border-[#8ba888]/10 rounded-full w-[30vw] h-[30vw]"
                    />
                </div>
            )}
        </motion.div>
    );
};

export default Preloader;
