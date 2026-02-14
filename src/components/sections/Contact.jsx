import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, Loader2, Check } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        interests: [],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const availableInterests = ["Branding", "Digital Marketing", "Media Production", "Software Dev", "PR & Strategy", "Other"];

    const toggleInterest = (item) => {
        setFormState(prev => {
            const currentInterests = prev.interests;
            const newInterests = currentInterests.includes(item)
                ? currentInterests.filter(i => i !== item)
                : [...currentInterests, item];
            return { ...prev, interests: newInterests };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: '', email: '', interests: [], message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 2000);
    };

    return (
        <section id="contact" className="relative min-h-screen bg-[#0a0a0a] text-white py-24 md:py-32 flex items-center justify-center overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#8ba888]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#8ba888]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-overlay" />
            </div>

            <div className="container px-6 relative z-10 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: The Invitation */}
                    <div className="space-y-12 pt-10">
                        <div>
                            <span className="text-[#8ba888] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                                Initiate Collaboration
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
                                Ready to <br />
                                <span className="italic text-[#8ba888]">Create?</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl border-l-2 border-[#8ba888]/30 pl-8">
                                You have the vision. We have the architecture. Let's build something that defies the ordinary.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white text-sm uppercase tracking-widest opacity-70">Contact Directly</h4>
                            <div className="flex flex-col gap-4 text-xl font-light text-gray-300">
                                <a href="mailto:hello@tazuri.com" className="hover:text-[#8ba888] transition-colors w-fit">hello@tazuri.com</a>
                                <a href="tel:+201000000000" className="hover:text-[#8ba888] transition-colors w-fit">+20 (100) 000-0000</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The "Portal" Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative gradient inside form */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ba888]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">

                            <div className="space-y-8">
                                <div className="group">
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#8ba888] transition-colors">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#8ba888] transition-colors placeholder-white/10 font-serif"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#8ba888] transition-colors">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl text-white focus:outline-none focus:border-[#8ba888] transition-colors placeholder-white/10 font-serif"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                                    Areas of Interest (Select Multiple)
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {availableInterests.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => toggleInterest(item)}
                                            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${formState.interests.includes(item)
                                                ? 'bg-[#8ba888] border-[#8ba888] text-black font-bold'
                                                : 'border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="group pt-4">
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#8ba888] transition-colors">
                                    Your Vision (Optional)
                                </label>
                                <textarea
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    rows={3}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg md:text-xl text-white focus:outline-none focus:border-[#8ba888] transition-colors placeholder-white/10 resize-none font-light"
                                    placeholder="Tell us about the empire you want to build..."
                                />
                            </div>

                            <div className="pt-8 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:bg-[#8ba888] transition-colors duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <div className="relative z-10 flex items-center gap-3 font-bold uppercase tracking-widest text-sm">
                                        {isSubmitting ? (
                                            <>Processing <Loader2 className="animate-spin" size={18} /></>
                                        ) : isSuccess ? (
                                            <>Sent Successfully <Check size={18} /></>
                                        ) : (
                                            <>Send Inquiry <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></>
                                        )}
                                    </div>
                                </button>
                            </div>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
