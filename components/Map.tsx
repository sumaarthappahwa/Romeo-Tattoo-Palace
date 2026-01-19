
import React from 'react';

const Map: React.FC = () => {
  // Constructed Google Maps search embed URL for the specific address
  const address = "first floor, F-24/34, near Aggarwal sweet, Pocket 21, Sector 3, Rohini, Delhi, 110085";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-zinc-950 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] mb-2 font-medium">Find Us</h2>
            <h3 className="text-4xl md:text-6xl font-oswald uppercase font-bold">The Palace Location</h3>
          </div>
          <p className="text-zinc-500 max-w-sm italic">
            Visit us in the heart of Rohini for a consultation that will change your skin forever.
          </p>
        </div>
        
        <div className="relative glass-panel p-4 h-[450px] group">
          <iframe
            title="Romee Tattoo Palace Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={mapUrl}
          ></iframe>
          <div className="absolute bottom-10 left-10 p-6 bg-black/90 border-l-4 border-[#D4AF37] backdrop-blur-md hidden md:block">
            <h4 className="text-[#D4AF37] font-oswald uppercase text-lg mb-2">Visit Romee</h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              F-24/34, Sector 3, Rohini<br />
              New Delhi, 110085
            </p>
            <a 
              href="https://share.google/kWls56otAXKN35jcO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-white border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
