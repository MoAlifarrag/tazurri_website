import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target } from 'lucide-react';
import FadeInWhenVisible from '../common/FadeInWhenVisible';
import SectionHeading from '../common/SectionHeading';

const Vision = () => {
    return (
        <section id="vision" className="relative min-h-[50vh] md:min-h-screen w-full flex flex-col items-center justify-start md:justify-center bg-[#fcfcf9] pt-2 pb-20 md:pt-32 md:pb-32 overflow-hidden px-6">





            {/* Background Texture - Minimalist */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#8ba888]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#8ba888]/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Visual Asset Side: The "Architectural Blueprint" Portal */}
                    <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center py-10 md:py-0">
                        <FadeInWhenVisible>
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] flex items-center justify-center scale-90 sm:scale-100">

                                {/* 1. ORBITAL RINGS (4 FORCES CONCEPT) */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-dashed border-[#8ba888]/50 rounded-full"
                                >
                                    {/* Force 1 & 2 (Outer Orbit - Gold) */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#8ba888] rounded-full shadow-[0_0_15px_#8ba888]" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#8ba888] rounded-full shadow-[0_0_15px_#8ba888]" />
                                </motion.div>

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[15%] border border-[#8ba888]/30 rounded-full"
                                >
                                    {/* Force 3 & 4 (Inner Orbit - Dark) */}
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-dark rounded-full shadow-lg" />
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-dark rounded-full shadow-lg" />
                                </motion.div>

                                <div className="absolute inset-[30%] border border-dashed border-[#8ba888]/50 rounded-full opacity-40" />

                                {/* 2. THE FLOATING ICON (STRICT ICON-ONLY CROP) */}
                                <motion.div
                                    animate={{
                                        y: [0, -12, 0],
                                        scale: [1, 1.03, 1]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-20 w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 overflow-hidden flex items-start justify-center"
                                >
                                    <img
                                        src="/assets/Final Logo-01.png"
                                        className="w-full h-full object-contain grayscale-0 brightness-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] select-none"
                                        alt="Tazuri Vision"
                                    />
                                </motion.div>

                                {/* 3. CENTER GLOW */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#8ba888]/8 rounded-full blur-[60px] z-10" />
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <SectionHeading
                            title="The Vision"
                            subtitle="Redefining the Future"
                            centered={false}
                        />

                        <FadeInWhenVisible delay={0.2}>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-dark leading-snug mb-10 md:mb-16">
                                "To be the <span className="text-[#8ba888]">unrivaled force</span> in transforming businesses through the seamless integration of art and strategic intelligence."
                            </p>
                        </FadeInWhenVisible>

                        <div className="flex flex-col gap-10 md:gap-14">
                            <FadeInWhenVisible delay={0.4}>
                                <div className="space-y-4 group">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-dark text-white flex items-center justify-center group-hover:bg-[#8ba888] transition-colors duration-500 shadow-lg shrink-0">
                                            <Sparkles size={20} />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-[#8ba888]">Artistic Soul</h4>
                                    </div>
                                    <p className="text-dark/70 text-base md:text-lg lg:text-xl leading-relaxed pl-16 border-l-2 border-[#8ba888]/20 italic max-w-xl">
                                        We don't just create assets; we craft emotional experiences that resonate through time and define new standards.
                                    </p>
                                </div>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible delay={0.6}>
                                <div className="space-y-4 group border-t border-dark/5 pt-10 md:pt-0 md:border-none">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-dark text-white flex items-center justify-center group-hover:bg-[#8ba888] transition-colors duration-500 shadow-lg shrink-0">
                                            <Target size={20} />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-[#8ba888]">Strategic Mind</h4>
                                    </div>
                                    <p className="text-dark/70 text-base md:text-lg lg:text-xl leading-relaxed pl-16 border-l-2 border-[#8ba888]/20 italic max-w-xl">
                                        Every stroke is calculated. Every pixel is purposeful. We build for dominance and long-term impact.
                                    </p>
                                </div>
                            </FadeInWhenVisible>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Vision;
