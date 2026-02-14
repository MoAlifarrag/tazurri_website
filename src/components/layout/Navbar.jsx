import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const heroHeight = window.innerHeight;
        // Show navbar only after passing most of the hero section (e.g., 85%)
        if (latest > heroHeight * 0.85) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setIsMenuOpen(false); // Close mobile menu if we scroll back to top
        }
    });

    // Navigation Links
    const navLinks = [
        { name: 'Vision', href: '#vision' },
        { name: 'Forces', href: '#forces' },
        { name: 'Services', href: '#services' },
        { name: 'Partners', href: '#partners' },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0, x: "-50%" }}
                    animate={{ y: 0, opacity: 1, x: "-50%" }}
                    exit={{ y: -100, opacity: 0, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed top-6 left-1/2 z-50 w-full max-w-[90%] md:max-w-3xl"
                >
                    <div className="relative">
                        {/* The Floating Capsule */}
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl shadow-black/5 rounded-full px-4 py-3 md:px-6 md:py-3 flex items-center justify-between">

                            {/* 1. Brand / Logo (Compact) */}
                            <a href="#" className="flex items-center gap-2 group">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <img
                                        src="/assets/Final Logo-01.png"
                                        alt="Tazuri"
                                        className="w-full h-full object-contain scale-125"
                                    />
                                </div>
                                <span className="hidden md:block font-serif text-sm tracking-widest font-bold text-dark">TAZURI</span>
                            </a>

                            {/* 2. Desktop Navigation (Hidden on Mobile) */}
                            <nav className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="relative text-[11px] uppercase tracking-[0.2em] font-medium text-dark/60 hover:text-dark transition-colors py-2 group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ))}
                            </nav>

                            {/* 3. Actions / Mobile Menu Toggle */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="#contact"
                                    className="hidden md:flex items-center gap-2 px-5 py-2 bg-dark text-white rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-[#8ba888] transition-colors shadow-lg shadow-dark/20"
                                >
                                    Inquiry
                                </a>

                                {/* Mobile Hamburger */}
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors text-dark"
                                >
                                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Dropdown Menu (Animate Height) */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 10, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl p-6 flex flex-col gap-4 items-center md:hidden"
                                >
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-sm uppercase tracking-[0.2em] font-medium text-dark/80 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <div className="w-full h-px bg-black/5 my-2" />
                                    <a
                                        href="#contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full text-center py-3 bg-dark text-white rounded-xl text-xs uppercase tracking-widest font-bold"
                                    >
                                        Start a Project
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
