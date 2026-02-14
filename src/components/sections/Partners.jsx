import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Partners = () => {
    return (
        <section id="partners" className="bg-[#fcfcf9] py-24 md:py-40 relative overflow-hidden">
            <div className="container px-6 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#8ba888] uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
                    >
                        Building Empires Together
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-serif text-[#111111]"
                    >
                        Success <span className="italic text-[#8ba888]">Partners</span>
                    </motion.h2>
                </div>

                {/* 3D Interactive Card */}
                <div className="flex justify-center items-center perspective-1000">
                    <TiltCard>
                        <div className="relative w-full max-w-5xl bg-white p-12 md:p-24 rounded-[30px] md:rounded-[60px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden group">

                            {/* The Logos Image */}
                            <img
                                src="/assets/Clients.png"
                                alt="Success Partners"
                                className="w-full h-auto object-contain relative z-20 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            />

                            {/* Dynamic Spotlight Effect overlay */}
                            <SpotlightOverlay />

                            {/* Subtle Grid Background */}
                            <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none z-0" />
                        </div>
                    </TiltCard>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#8ba888]/5 rounded-full blur-[150px] pointer-events-none z-0" />
        </section>
    );
};

const TiltCard = ({ children }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-5xl cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

const SpotlightOverlay = () => {
    // A simple radial gradient that follows the mouse would require passing coordinates down,
    // but a static sheen on hover is easier and cleaner for React.
    // Let's make a "sheen" that moves across on hover.
    return (
        <div className="absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-soft-light" />
    );
}

export default Partners;
