import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Compass,
  Target,
  Lightbulb,
  Code2,
  ShieldCheck,
  Sparkles,
  Palette,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <FadeInWhenVisible>
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-4 gradient-text">{title}</h2>
      <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-sm">{subtitle}</p>
    </div>
  </FadeInWhenVisible>
);

const ForceCard = ({ title, img, text, delay }) => {
  return (
    <FadeInWhenVisible delay={delay}>
      <div className="perspective group h-[400px] sm:h-[450px] md:h-[500px] w-full">
        <div className="relative h-full w-full transition-all duration-500 preserve-3d group-hover:[transform:rotateY(10deg)rotateX(10deg)]">
          <div className="absolute inset-0 h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
            <img
              src={`/assets/${img}`}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 md:opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white translate-z-20 w-full">
            <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-4 transform transition-transform group-hover:translate-z-50">{title}</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform md:translate-y-4 md:group-hover:translate-y-0 line-clamp-3 md:line-clamp-none">
              {text}
            </p>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      {/* Background Blobs for Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animation-delay-2000" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 py-3 md:py-4 px-5 md:px-8 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20">
        <div className="flex items-center gap-2">
          <img src="/assets/Final Logo-01.png" alt="Tazuri Logo" className="h-10 md:h-20 transition-all hover:scale-105" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-bold">
          <a href="#about" className="hover:text-primary transition-colors">Vision</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#forces" className="hover:text-primary transition-colors">The Forces</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-dark hover:text-primary transition-colors z-[70]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10 pointer-events-none'}`}>
          <img src="/assets/Final Logo-01.png" alt="Tazuri" className="h-16 mb-4" />
          <div className="flex flex-col items-center gap-6 text-xl font-serif">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Vision</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Services</a>
            <a href="#forces" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">The Forces</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 md:pt-32 px-5">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-12"
          >
            <img src="/assets/Final Logo-01.png" alt="Tazuri Logo" className="h-32 sm:h-48 md:h-72 mx-auto mb-8 md:mb-16 drop-shadow-2xl px-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-4xl sm:text-6xl md:text-[120px] mb-6 md:mb-8 font-serif leading-[1.1] md:leading-[0.9] tracking-tighter"
          >
            Not a Company.<br />
            <span className="text-primary italic">A Creation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-xs sm:max-w-xl mx-auto text-gray-500 text-base md:text-xl mb-10 md:mb-12 font-light italic px-2"
          >
            "Every empire begins with a vision. Every masterpiece begins with a few."
            <br />
            <span className="mt-4 block not-italic text-[10px] md:text-sm uppercase tracking-widest text-primary font-bold">The Story of Four Forces</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <a href="#about" className="inline-flex items-center gap-3 md:gap-4 bg-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold hover:bg-primary transition-all group shadow-xl">
              Enter the Realm <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="about" className="bg-white relative overflow-hidden py-16 md:py-40">
        <div className="container relative z-10 px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeInWhenVisible>
              <div className="relative py-10 md:py-20 px-4 md:px-10">
                <img
                  src="/assets/Compass.png"
                  alt="Compass"
                  className="w-full max-w-[300px] md:max-w-none mx-auto drop-shadow-3xl animate-float relative z-10"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-2xl md:blur-3xl -z-1" />
              </div>
            </FadeInWhenVisible>

            <div className="text-center md:text-left">
              <SectionHeading
                title="Our Vision"
                subtitle="Leading the transformation"
              />
              <p className="text-xl md:text-2xl text-dark leading-relaxed mb-10 md:mb-12 font-serif italic max-w-lg mx-auto md:mx-0">
                "To be the leading force in transforming businesses through the seamless integration of art, technology, and innovation."
              </p>

              <div className="grid grid-cols-1 gap-8 md:gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 group">
                  <div className="bg-primary/10 p-5 md:p-6 rounded-2xl h-fit group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-2 md:mb-3">Artistic Inspiration</h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">Blending art into business success, creating emotional resonance.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 group">
                  <div className="bg-primary/10 p-5 md:p-6 rounded-2xl h-fit group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Target size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-2 md:mb-3">Strategic Thinking</h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">Connecting deeply with audiences through calculated innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Forces */}
      <section id="forces" className="bg-[#1a1a1a] text-white py-20 md:py-40">
        <div className="container px-5 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 md:mb-6 block">The Architects of Tomorrow</span>
            <h2 className="text-4xl md:text-7xl font-serif">The Four <span className="text-primary italic">Forces</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Architect of Vision", img: "Vision-man.png", text: "He doesn't follow trends. He predicts them. Where others see limits, he sees expansion." },
              { title: "Power of Precision", img: "Operation-Woman.png", text: "Elegance in appearance. Authority in presence. Execution answers to her command." },
              { title: "Art of Perfection", img: "Technical-Woman.png", text: "She crafts statements. Behind every flawless detail is her obsession with excellence." },
              { title: "Code of Intelligence", img: "Coding-Man.png", text: "Silent. Analytical. Unstoppable. He turns complexity into seamless dominance." }
            ].map((force, i) => (
              <ForceCard {...force} delay={i * 0.1} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white px-5 md:px-8 py-20 md:py-40">
        <div className="container">
          <div className="mb-12 md:mb-24 text-center md:text-left">
            <span className="text-primary uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-8xl mb-4 md:mb-8 font-serif leading-tight">Creative Thinking <br className="hidden md:block" /> Meets <span className="italic text-primary">Smart Execution.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { name: "Digital Marketing", icon: <Target />, img: "Digital-Marketing.png" },
              { name: "Media Production", icon: <Sparkles />, img: "Media-Production.png" },
              { name: "Software Solutions", icon: <Code2 />, img: "Software-Solutions.png" },
              { name: "Public Relations", icon: <ShieldCheck />, img: "Public-Relations---PR.png" },
              { name: "Branding", icon: <Palette />, img: "Branding.png" },
              { name: "Business Dev", icon: <Lightbulb />, img: "Business-Development.png" }
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden bg-[#f5f5f0] p-8 md:p-16 rounded-[24px] md:rounded-[40px] hover:bg-dark hover:text-white transition-all duration-700 shadow-sm">
                <div className="mb-6 md:mb-10 text-primary group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(service.icon, { size: 40 })}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">{service.name}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 mb-6 md:mb-10 text-sm md:text-base leading-relaxed">
                  Turning bold ideas into powerful experiences with a smart-minded approach.
                </p>
                <div className="absolute bottom-[-10%] right-[-5%] w-32 md:w-48 opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-1000 grayscale group-hover:grayscale-0 pointer-events-none">
                  <img src={`/assets/${service.img}`} alt={service.name} className="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#f5f5f0] py-24 md:py-40 border-y border-black/5">
        <div className="container px-6 md:px-8">
          <SectionHeading title="Success Partners" subtitle="Building Empires Together" />
          <div className="flex justify-center items-center mt-12 md:mt-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-5xl bg-white p-10 md:p-20 rounded-[30px] md:rounded-[60px] shadow-2xl overflow-hidden text-center"
            >
              <img src="/assets/Clients.png" alt="Clients" className="w-full h-auto object-contain transition-all" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;
