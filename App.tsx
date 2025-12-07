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

  // === SEO: ЦИФРОВОЙ ПАСПОРТ ЭКСПЕРТА (Schema.org) ===
  // Это то, что объясняет Гуглу, кто ты такая на языке данных.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Регрессолог Елизавета [ФАМИЛИЯ]",
    "image": "https://felixsovich.github.io/deepinside/photo.jpg", // Замени на реальную ссылку на фото
    "url": "https://felixsovich.github.io/deepinside/",
    "telePhone": "+70000000000", // Замени на реальный
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "description": "Сеансы регрессивного гипноза, работа с психосоматикой, поиск предназначения.",
    "priceRange": "$$"
  };

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 selection:bg-white selection:text-black">

      {/* Внедряем JSON-LD прямо в тело страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hide cursor on touch devices to prevent issues, show on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Атрибут aria-hidden подсказывает роботам игнорировать прелоадер после загрузки */}
      <div aria-hidden={!loading}>
        <Preloader setLoading={setLoading} />
      </div>

      <Navigation />

      {/* Main Content Wrapper 
          Mobile: w-full (no margin)
          Desktop: pl-24 (pushed by sidebar)
      */}
      <main
        role="main"
        className="w-full md:pl-28 relative transition-all duration-300"
      >
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