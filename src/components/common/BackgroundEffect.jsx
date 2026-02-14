import React from 'react';

const BackgroundEffect = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animation-delay-2000" />
        </div>
    );
};

export default BackgroundEffect;
