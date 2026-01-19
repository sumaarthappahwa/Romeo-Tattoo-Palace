
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Map from './components/Map';
import Footer from './components/Footer';
import MobileContactSticky from './components/MobileContactSticky';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Portfolio limit={6} />
    <Reviews />
    <Map />
    <section className="py-20 bg-zinc-900 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-oswald mb-6 uppercase tracking-widest">Experience the Art</h2>
        <p className="text-zinc-400 text-lg mb-10 font-light leading-relaxed">
          Romee's premier destination for high-end custom tattoos in Rohini. We combine traditional craft with artistic excellence 
          to create timeless masterpieces on your skin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/portfolio" 
            className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Explore Our Work
          </Link>
          <a 
            href="tel:07289003008" 
            className="inline-block px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
          >
            Call 072890 03008
          </a>
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<div className="pt-32 px-4 max-w-7xl mx-auto min-h-screen"><h1 className="text-5xl font-oswald text-center uppercase">Contact Romee</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <MobileContactSticky />
      </div>
    </HashRouter>
  );
};

export default App;
