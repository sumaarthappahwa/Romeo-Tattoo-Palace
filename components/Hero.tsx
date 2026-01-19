
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=2000" 
        alt="Romee Tattoo Palace" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h2 className="text-[#D4AF37] text-lg md:text-xl uppercase tracking-[0.5em] mb-4 font-light animate-fadeIn">Award Winning Palace</h2>
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter mb-8 leading-none">
          CRAFTING STORIES <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white">
            ON YOUR SKIN
          </span>
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light italic">
          Elevate your self-expression with custom-designed ink from Romee's most trusted tattoo artists.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            to="/portfolio" 
            className="w-full md:w-auto px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Explore Portfolio
          </Link>
          <a 
            href="tel:07289003008" 
            className="w-full md:w-auto px-12 py-5 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-zinc-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
