
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h4 className="text-2xl font-oswald font-bold mb-6 tracking-tighter uppercase">
            ROMEE <span className="text-[#D4AF37]">TATTOO</span> PALACE
          </h4>
          <p className="text-zinc-500 font-light leading-relaxed">
            Where art meets passion and skin meets excellence. Romee's finest sanctuary for high-end custom tattoos.
          </p>
        </div>

        <div>
          <h5 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-6">Quick Links</h5>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#/portfolio" className="hover:text-white transition-colors">Our Portfolio</a></li>
            <li><a href="#/contact" className="hover:text-white transition-colors">Booking</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-6">Connect</h5>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-6">Location</h5>
          <p className="text-zinc-400 font-light mb-4">
            First Floor, F-24/34, <br />
            Near Aggarwal Sweet, Pocket 21, <br />
            Sector 3, Rohini, Delhi, 110085
          </p>
          <p className="text-zinc-400 font-bold">Phone: <a href="tel:07289003008" className="hover:text-[#D4AF37]">072890 03008</a></p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
        <p>© 2024 Romee Tattoo Palace. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
