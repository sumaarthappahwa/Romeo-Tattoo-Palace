
import React, { useState } from 'react';
import { generateTattooConcept } from '../services/gemini';

const AITattooStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ imageUrl: string; description: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const data = await generateTattooConcept(prompt);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate concept. Our AI is currently resting. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mb-4">AI TATTOO <span className="text-[#D4AF37]">PALACE</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Describe your tattoo idea and let our AI-powered consultant help you visualize and refine the concept for Romee's artists.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-16">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A celestial phoenix rising from geometric ashes in neo-traditional style..."
              className="w-full bg-zinc-900 border-2 border-zinc-800 p-6 md:p-8 rounded-none text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-lg"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="mt-6 md:mt-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white disabled:bg-zinc-700 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Conceptualizing...' : 'Generate Concept'}
            </button>
          </div>
        </form>

        {error && (
          <div className="p-4 bg-red-900/20 border border-red-500 text-red-400 text-center mb-12">
            {error}
          </div>
        )}

        {result && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fadeIn">
            <div className="space-y-6">
              <div className="glass-panel p-2 rounded-sm overflow-hidden border-[#D4AF37]/40">
                <img 
                  src={result.imageUrl} 
                  alt="AI Concept" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-zinc-500 text-sm italic text-center">
                Generated AI Visual Concept - For Artistic Reference Only
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-oswald uppercase text-[#D4AF37] mb-4 tracking-wider">Artist Consultation</h3>
                <div className="prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed whitespace-pre-wrap">
                  {result.description}
                </div>
              </div>
              
              <div className="pt-8 border-t border-zinc-800">
                <button 
                  onClick={() => window.location.href = '#/contact'}
                  className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  Book with an Artist
                </button>
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-24">
            <div className="inline-block w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-8"></div>
            <p className="text-[#D4AF37] font-oswald uppercase tracking-widest animate-pulse">
              Consulting the Masters...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITattooStudio;
