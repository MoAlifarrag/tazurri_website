import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] min-h-[600px] w-full flex flex-col items-center bg-[#fcfcf9] overflow-hidden">
            
            {/* 1. THE DRAMATIC BACKDROP */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2.5 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/Final Logo-01.png"
                        className="w-full h-full object-cover grayscale opacity-100 md:opacity-40 md:scale-110 md:origin-top md:-translate-y-[12%]"
                        alt=""
                    />
                </motion.div>
            </div>

            {/* 2. THE CONTENT HUB */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 px-4 max-w-[1500px] mx-auto md:justify-between md:pt-10 md:pb-6 lg:pt-6">

                {/* TOP: Floating Logo Anchor */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        opacity: { duration: 1.2 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 pt-0 md:pt-0 md:-mt-20 pb-0 cursor-crosshair relative z-10"
                >
                    <div className="relative w-40 h-32 md:w-60 md:h-48 lg:w-48 lg:h-36 xl:w-60 xl:h-48 flex items-center justify-center">
                        <img
                            src="/assets/Final Logo-01.png"
                            className="w-full h-full object-contain select-none drop-shadow-4xl"
                            alt="Tazuri Icon"
                        />
                    </div>
                </motion.div>

                {/* CENTRE: Headline & Tagline */}
                <div className="flex flex-col items-center text-center gap-4 md:gap-10 lg:gap-6 w-full flex-grow-0 md:flex-grow justify-center mt-0 md:mt-0 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-5xl sm:text-8xl md:text-[100px] lg:text-[90px] xl:text-[115px] font-serif leading-[0.8] tracking-tighter premium-gradient-text uppercase select-none w-full"
                    >
                        NOT A COMPANY.<br />
                        <span className="italic text-[#8ba888]">A CREATION.</span>
                    </motion.h1>

                    <div className="space-y-4 md:space-y-6">
                        <p className="max-w-xl md:max-w-3xl mx-auto text-dark text-xl md:text-2xl lg:text-xl font-serif italic leading-tight px-4 opacity-90">
                            "Every empire begins with a vision. <br className="hidden md:block" /> Every masterpiece begins with a few."
                        </p>

                        <div className="flex items-center justify-center gap-4 md:gap-10 opacity-30">
                            <div className="w-16 md:w-32 h-px bg-[#8ba888]" />
                            <span className="text-[10px] md:text-xs uppercase tracking-[1.5em] text-[#8ba888] font-black italic">HERITAGE</span>
                            <div className="w-16 md:w-32 h-px bg-[#8ba888]" />
                        </div>
                    </div>
                </div>

                {/* BOTTOM: Direct Link Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="shrink-0 pb-6 w-full flex flex-col items-center relative z-10"
                >
                    <a 
                        href="#vision"
                        className="group relative px-6 py-5 md:px-12 md:py-4 bg-[#0a0a0a] hover:bg-[#8ba888] rounded-full transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#8ba888]/20 w-full md:w-auto flex justify-center overflow-hidden"
                    >
                        {/* Shimmer Effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                            animate={{ translateX: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg md:text-[13px] text-white tracking-[0.2em] font-medium uppercase transition-colors">
                            Enter The Realm
                            <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </a>

                    {/* Minimal bridge line */}
                    <div className="w-px h-6 md:h-16 bg-gradient-to-b from-[#8ba888]/60 to-transparent mt-4 md:mt-8" />
                </motion.div>

            </div>

        </section>
    );
};

export default Hero;
