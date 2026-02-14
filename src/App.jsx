import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Vision from './components/sections/Vision';
import Forces from './components/sections/Forces';
import Services from './components/sections/Services';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import BackgroundEffect from './components/common/BackgroundEffect';
import Preloader from './components/common/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after hero section (roughly 80% scroll)
      setShowNavbar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcf9] selection:bg-[#8ba888] selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <BackgroundEffect />
          <AnimatePresence>
            {showNavbar && <Navbar key="navbar" />}
          </AnimatePresence>
          <main>
            <Hero />
            <Vision />
            <Forces />
            <Services />
            <Partners />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
