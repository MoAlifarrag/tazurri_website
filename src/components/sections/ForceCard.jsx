import React from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../common/FadeInWhenVisible';

const ForceCard = ({ title, img, text, delay }) => {
    return (
        <div className="group relative h-full w-full bg-[#1a1a1a] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">

            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={`/assets/${img}`}
                    alt={title}
                    className="h-full w-full object-cover grayscale brightness-[0.6] transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />
                {/* Cinematic Overlay - Stronger gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-700" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-6 md:p-12 flex flex-col justify-end">

                {/* Title */}
                <div className="overflow-hidden mb-4 md:mb-6">
                    <h3 className="text-3xl md:text-5xl font-serif text-white leading-none tracking-tight group-hover:text-[#8ba888] transition-colors duration-500">
                        {title}
                    </h3>
                </div>

                {/* Description - Visible on mobile, hover on desktop */}
                <div className="relative overflow-hidden transition-all duration-700 ease-in-out md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100">
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic border-l-2 border-[#8ba888] pl-4 md:pl-6 py-1 md:py-2">
                        {text}
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-[#8ba888] mt-4 md:mt-8 group-hover:w-full transition-all duration-700" />
            </div>

            {/* Glassmorphism Border Flare */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[24px] md:rounded-[40px] group-hover:border-[#8ba888]/30 transition-all duration-700" />
        </div>
    );
};

export default ForceCard;
