
import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    text: "Absolutely incredible experience. The attention to detail at Romee Tattoo Palace is beyond anything I've seen. My fine-line floral piece is perfect.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Vikram Singh",
    rating: 5,
    text: "The most hygienic and professional studio in the city. The artists really take the time to understand your vision. Worth every penny.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    rating: 5,
    text: "From consultation to the final sitting, the process was seamless. The artist brought my vision to life even better than I imagined. Truly world-class.",
    date: "3 days ago"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] mb-2 font-medium">Testimonials</h2>
            <h3 className="text-4xl md:text-6xl font-oswald uppercase font-bold">Client Stories</h3>
          </div>
          <a 
            href="https://share.google/kWls56otAXKN35jcO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-[#D4AF37] hover:text-white transition-colors duration-300"
          >
            <span className="uppercase tracking-widest text-sm font-bold border-b border-[#D4AF37] group-hover:border-white">View all Google reviews</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="glass-panel p-10 flex flex-col justify-between hover:bg-white/5 transition-all duration-500">
              <div>
                <div className="flex text-[#D4AF37] mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-8 leading-relaxed font-light">"{review.text}"</p>
              </div>
              <div>
                <p className="text-white font-oswald uppercase tracking-widest">{review.name}</p>
                <p className="text-zinc-500 text-xs mt-1 uppercase tracking-tighter">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex items-center space-x-4 bg-zinc-900/50 px-8 py-4 border border-zinc-800 rounded-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-6 h-6" alt="Google" />
            <div className="text-sm">
              <span className="text-white font-bold">4.9 / 5</span>
              <span className="text-zinc-500 ml-2">Rating based on 500+ authentic reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
