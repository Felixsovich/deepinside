import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VerticalScroll from './components/VerticalScroll';
import Work from './components/Work';
// import Testimonials from './components/Testimonials'; // Закомментировали
import WordSlotMachine from './components/WordSlotMachine';
// import Services from './components/Services';
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Регрессолог Елизавета [ФАМИЛИЯ]",
    "image": "https://felixsovich.github.io/deepinside/photo.jpg",
    "url": "https://felixsovich.github.io/deepinside/",
    "telePhone": "+70000000000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "description": "Сеансы регрессивного гипноза, работа с психосоматикой, поиск предназначения.",
    "priceRange": "$$"
  };

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 selection:bg-lime-500 selection:text-black">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div aria-hidden={!loading}>
        <Preloader setLoading={setLoading} />
      </div>

      <Navigation />

      <main
        role="main"
        className="w-full md:pl-44 relative transition-all duration-300"
      >
        <Hero />
        <VerticalScroll />
        <Work />
        <WordSlotMachine />
        {/* <Testimonials /> */}
        {/* <Services /> */}
        <Footer />
      </main>

    </div>
  );
};

export default App;