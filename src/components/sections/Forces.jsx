import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const Forces = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [selectedForce, setSelectedForce] = useState(null);

    const forces = [
        {
            title: "The Visionary",
            role: "Strategy & Foresight",
            img: "Vision-man.png",
            text: "Transcending boundaries, he doesn't just predict the future—he architects it. With the eyes of a hawk and the mind of a grandmaster, he sees paths others fear to tread.",
            competencies: ["Strategic Foresight", "Market Disruption", "Brand Evolution"],
            color: "#8ba888"
        },
        {
            title: "The Authority",
            role: "Operations & Command",
            img: "Operation-Woman.png",
            text: "The pulse of execution. She commands presence with absolute certainty, ensuring every detail aligns with the royal standard. Chaos is not an option.",
            competencies: ["Operational Excellence", "Team Leadership", "Process Optimization"],
            color: "#a89f88"
        },
        {
            title: "The Artisan",
            role: "Design & Aesthetics",
            img: "Technical-Woman.png",
            text: "Crafting silence into statements. Her obsession with perfection is the heartbeat of every creation. She turns raw concepts into emotional masterpieces.",
            competencies: ["Creative Direction", "UI/UX Design", "Motion Graphics"],
            color: "#889aa8"
        },
        {
            title: "The Architect",
            role: "Technology & Structure",
            img: "Coding-Man.png",
            text: "Turning complexity into seamless dominance. He speaks the language of tomorrow's intelligence, building the unbreakable skeletons of our digital empire.",
            competencies: ["Full-Stack Development", "Cloud Infrastructure", "System Security"],
            color: "#a8888b"
        }
    ];

    return (
        <section ref={containerRef} id="forces" className="relative bg-black text-white">

            {/* Header Sticky */}
            <div className="sticky top-0 z-10 w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-12 bg-gradient-to-b from-black to-transparent pointer-events-none">
                <h2 className="text-xl md:text-3xl font-serif tracking-widest uppercase text-white/30">
                    The Four Forces
                </h2>
                <div className="hidden md:block w-px h-12 bg-white/20" />
            </div>

            {/* Cards Container */}
            <div className="relative flex flex-col items-center gap-10 md:gap-20 pb-[20vh] px-4 md:px-0">
                {forces.map((force, i) => (
                    <Card
                        key={i}
                        data={force}
                        index={i}
                        total={forces.length}
                        onOpen={() => setSelectedForce(force)}
                    />
                ))}
            </div>

            {/* DETAILS MODAL OVERLAY */}
            <AnimatePresence>
                {selectedForce && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
                        onClick={() => setSelectedForce(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-[#111111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedForce(null)}
                                className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Modal Image */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                                <img
                                    src={`/assets/${selectedForce.img}`}
                                    className="w-full h-full object-cover grayscale"
                                    alt={selectedForce.title}
                                />
                                <div className="absolute inset-0 bg-[#8ba888]/20 mix-blend-overlay" />
                            </div>

                            {/* Modal Content */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-[#8ba888] tracking-[0.3em] text-xs font-bold uppercase mb-4">
                                    {selectedForce.role}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                                    {selectedForce.title}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-[#8ba888] pl-6">
                                    {selectedForce.text}
                                </p>

                                <div>
                                    <h4 className="text-white text-sm uppercase tracking-widest mb-6 opacity-70">Core Competencies</h4>
                                    <div className="grid gap-4">
                                        {selectedForce.competencies.map((skill, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group">
                                                <div className="w-8 h-8 rounded-full bg-[#8ba888]/10 flex items-center justify-center text-[#8ba888] group-hover:bg-[#8ba888] group-hover:text-black transition-colors">
                                                    <Check size={14} />
                                                </div>
                                                <span className="text-gray-300 text-lg font-light">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

const Card = ({ data, index, total, onOpen }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end end"]
    });

    // Subtly scale smaller cards in the back as we scroll (Stacking effect)
    // We adjust the input range to make them stack nicely
    const scale = useTransform(scrollYProgress, [index * 0.25, 1], [1, 1 - (total - index) * 0.05]);

    // Calculate top offset for stacking: cascading effect (e.g., 40px, 80px, 120px...)
    const topOffset = 120 + (index * 40);

    return (
        <div
            ref={cardRef}
            className="sticky h-[80vh] md:h-[85vh] flex items-center justify-center top-0 overflow-hidden px-4 md:px-0"
            style={{
                top: topOffset,
                marginBottom: `${index === total - 1 ? 0 : '10vh'}` // Spacing between card starts
            }}
        >
            <motion.div
                style={{
                    scale,
                    backgroundColor: '#111111',
                }}
                className="relative w-full max-w-6xl h-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
                {/* 1. TEXT SIDE (Left on Desktop, Bottom on Mobile) */}
                <div className="w-full md:w-[45%] h-[40%] md:h-full p-8 md:p-16 flex flex-col justify-center relative z-20 bg-[#111111]">

                    {/* Index Number */}
                    <span className="text-[100px] md:text-[180px] font-black leading-none text-white/5 absolute top-0 left-6 md:left-10 select-none pointer-events-none">
                        0{index + 1}
                    </span>

                    <div className="relative z-10 space-y-6 md:space-y-10">
                        <div>
                            <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-[#8ba888] mb-3">
                                {data.role}
                            </span>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9]">
                                {data.title}
                            </h3>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed border-l-2 border-[#8ba888]/30 pl-6">
                            "{data.text}"
                        </p>

                        <button
                            onClick={onOpen}
                            className="group flex items-center gap-3 text-sm uppercase tracking-widest text-[#8ba888] hover:text-white transition-colors mt-4"
                        >
                            View Profile
                            <div className="w-8 h-px bg-[#8ba888] group-hover:w-16 transition-all" />
                        </button>
                    </div>
                </div>

                {/* 2. IMAGE SIDE (Right on Desktop, Top on Mobile) */}
                <div className="w-full md:w-[55%] h-[60%] md:h-full relative overflow-hidden">
                    <img
                        src={`/assets/${data.img}`}
                        alt={data.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 md:scale-105 hover:scale-110" // Slight zoom default
                        style={{ objectPosition: "top center" }}
                    />

                    {/* Gradient Overlay for Text Blend (Mobile Only mainly) */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#111111] via-transparent to-transparent opacity-100" />

                    {/* Cinematic Noise/Grain */}
                    <div className="absolute inset-0 opacity-20 noise-overlay mix-blend-overlay pointer-events-none" />
                </div>

            </motion.div>
        </div>
    );
};

export default Forces;
