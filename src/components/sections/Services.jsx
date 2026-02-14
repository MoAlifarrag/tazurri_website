import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Sparkles, Code2, ShieldCheck, Palette, Lightbulb, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            id: "01",
            name: "Digital Marketing",
            icon: <Target />,
            img: "Digital-Marketing.png",
            desc: "Data-driven strategies that don't just reach audiences, but resonate with them. We turn clicks into loyal communities."
        },
        {
            id: "02",
            name: "Media Production",
            icon: <Sparkles />,
            img: "Media-Production.png",
            desc: "Cinematic storytelling that captures the essence of your brand. From concept to final cut, we create visual masterpieces."
        },
        {
            id: "03",
            name: "Software Solutions",
            icon: <Code2 />,
            img: "Software-Solutions.png",
            desc: "Robust, scalable, and beautiful code. We build the digital infrastructure that powers your business growth."
        },
        {
            id: "04",
            name: "Public Relations",
            icon: <ShieldCheck />,
            img: "Public-Relations---PR.png",
            desc: "Crafting and protecting your narrative. We build bridges between your brand and the public with strategic communication."
        },
        {
            id: "05",
            name: "Branding",
            icon: <Palette />,
            img: "Branding.png",
            desc: "More than a logo. We forge identities that stand the test of time and speak volumes without saying a word."
        },
        {
            id: "06",
            name: "Business Dev",
            icon: <Lightbulb />,
            img: "Business-Development.png",
            desc: "Strategic growth hacking. We identify opportunities and unlock new revenue streams for sustainable expansion."
        }
    ];

    return (
        <section id="services" className="bg-[#fcfcf9] py-24 md:py-40 relative overflow-hidden">
            <div className="container px-6 mx-auto">

                {/* Header */}
                <div className="mb-20 md:mb-32 max-w-4xl">
                    <span className="text-[#8ba888] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                        Our Expertise
                    </span>
                    <h2 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[0.9]">
                        Creative Thinking <br />
                        <span className="italic text-[#8ba888] pl-20 md:pl-32">Smart Execution.</span>
                    </h2>
                </div>

                {/* Interactive Accordion Gallery */}
                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[700px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            layout
                            onClick={() => setActiveIndex(index)}
                            onHoverStart={() => setActiveIndex(index)}
                            className={`relative overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === index
                                    ? 'lg:flex-[3] h-[500px] lg:h-auto bg-[#111111]'
                                    : 'lg:flex-[1] h-[120px] lg:h-auto bg-white hover:bg-gray-50'
                                }`}
                        >
                            {/* Background Image (Visible only when active) */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0 z-0"
                                    >
                                        <img
                                            src={`/assets/${service.img}`}
                                            alt={service.name}
                                            className="w-full h-full object-cover opacity-40 mix-blend-screen grayscale contrast-125"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Content Container */}
                            <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">

                                {/* Top: ID and Icon */}
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-bold tracking-widest ${activeIndex === index ? 'text-[#8ba888]' : 'text-gray-300'}`}>
                                        / {service.id}
                                    </span>
                                    <div className={`${activeIndex === index ? 'text-white bg-[#8ba888]' : 'text-[#111111] bg-gray-100'} p-3 rounded-full transition-colors duration-500`}>
                                        {React.cloneElement(service.icon, { size: activeIndex === index ? 20 : 18 })}
                                    </div>
                                </div>

                                {/* Bottom: Title and Description */}
                                <div className="mt-auto">
                                    <h3
                                        className={`font-serif text-2xl md:text-4xl leading-tight mb-4 transition-colors duration-500 ${activeIndex === index
                                                ? 'text-white'
                                                : 'text-[#111111] -rotate-90 lg:rotate-[-90deg] origin-left translate-y-20 lg:translate-x-[-50%] lg:translate-y-0 opacity-50 absolute bottom-10 left-8 whitespace-nowrap'
                                            }`}
                                    >
                                        {service.name}
                                    </h3>

                                    {/* Description (Only visible when active) */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, y: 20 }}
                                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                exit={{ opacity: 0, height: 0, y: 20 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md border-l border-[#8ba888]/50 pl-6 mb-8.">
                                                    {service.desc}
                                                </p>

                                                <div className="inline-flex items-center gap-2 text-[#8ba888] uppercase tracking-widest text-xs font-bold mt-6 group">
                                                    Explore Service
                                                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
