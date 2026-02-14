import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';

const SectionHeading = ({ title, subtitle, centered = true }) => (
    <FadeInWhenVisible>
        <div className={`mb-16 md:mb-24 ${centered ? 'text-center' : 'text-left'}`}>
            <span className="text-[#8ba888] uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-4 block">
                {subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif premium-gradient-text uppercase leading-tight">
                {title}
            </h2>
            <div className={`w-20 h-px bg-[#8ba888]/30 mt-8 ${centered ? 'mx-auto' : ''}`} />
        </div>
    </FadeInWhenVisible>
);

export default SectionHeading;

