import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HorizontalScroll from './components/HorizontalScroll';
import Work from './components/Work';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Prevent scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 selection:bg-white selection:text-black">
      {/* Hide cursor on touch devices to prevent issues, show on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      <Preloader setLoading={setLoading} />
      
      <Navigation />
      
      {/* Main Content Wrapper 
          Mobile: w-full (no margin)
          Desktop: pl-24 (pushed by sidebar)
      */}
      <main className="w-full md:pl-24 relative transition-all duration-300">
        <Hero />
        <HorizontalScroll />
        <Work />
        <Services />
        <Footer />
      </main>
      
    </div>
  );
};

export default App;