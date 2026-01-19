
import React from 'react';

const services = [
  {
    title: "Permanent Tattoos",
    description: "Masterpiece quality custom tattoos ranging from hyper-realism to traditional script.",
    icon: "🖋️"
  },
  {
    title: "Body Piercing",
    description: "Professional, hygienic, and safe piercing services with premium jewelry options.",
    icon: "✨"
  },
  {
    title: "Tattoo Coverups",
    description: "Breathe new life into old ink. Our artists specialize in complex coverup designs.",
    icon: "🔄"
  },
  {
    title: "Temporary Ink",
    description: "Realistic temporary tattoos for events, movies, or testing your idea before the commitment.",
    icon: "⏳"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-oswald uppercase font-bold">Premium Services</h3>
          </div>
          <p className="max-w-md text-zinc-500 font-light">
            We offer a comprehensive range of body modification services, maintained at the highest international standards of safety and hygiene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-panel p-8 group hover:border-[#D4AF37] transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h4 className="text-xl font-oswald uppercase mb-4 tracking-wider">{service.title}</h4>
              <p className="text-zinc-500 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
