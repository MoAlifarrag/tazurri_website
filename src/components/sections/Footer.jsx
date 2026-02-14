import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark text-white pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 border-b border-white/10 pb-20 md:pb-32 mb-16">
                    <div>
                        <img src="/assets/Final Logo-01.png" alt="Tazuri" className="h-16 md:h-24 mb-8 md:mb-12 brightness-0 invert" />
                        <h2 className="text-4xl md:text-5xl font-serif max-w-md leading-tight">Let’s Create Something <span className="text-primary">Remarkable</span> Together.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 pt-6 md:pt-10">
                        <div>
                            <h5 className="font-bold uppercase text-xs tracking-[0.3em] text-primary mb-8 md:mb-10">Connect</h5>
                            <ul className="space-y-4 md:space-y-6 text-lg md:text-xl font-serif">
                                <li className="hover:text-primary transition-colors cursor-pointer underline decoration-primary/30 break-all">Hello@tazuri.com</li>
                                <li className="hover:text-primary transition-colors cursor-pointer">+20 100 000 0000</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold uppercase text-xs tracking-[0.3em] text-primary mb-8 md:mb-10">Follow</h5>
                            <ul className="space-y-4 md:space-y-6 text-lg md:text-xl font-serif">
                                <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
                                <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
                                <li className="hover:text-primary transition-colors cursor-pointer">Behance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-500 text-center md:text-left">
                    <p>© 2026 TAZURI STUDIOS. ALL RIGHTS RESERVED. AND BON VOYAGE.</p>
                    <div className="flex gap-8 md:gap-12">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
