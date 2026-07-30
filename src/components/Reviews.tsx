import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="avaliacoes" className="relative py-24 bg-gradient-to-b from-[#030712] via-slate-950 to-[#050b14] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-blue-400" />
            <span>Depoimentos Reais no Google</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            O Que Nossos Alunos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 text-glow-blue">
              Falam Sobre a SPORT GYM
            </span>
          </h2>

          {/* Google Badge Summary */}
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl glass-panel border border-blue-500/30 shadow-xl mt-4">
            <div className="flex items-center gap-1.5 text-amber-400 text-xl font-black">
              <span>5.0</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-left">
              <p className="text-sm font-extrabold text-white">Avaliação Máxima 5.0</p>
              <p className="text-xs text-slate-400">{GYM_INFO.googleReviewsCount} avaliações no Google Maps</p>
            </div>
            <ShieldCheck className="w-6 h-6 text-blue-400 hidden sm:block ml-2" />
          </div>
        </div>

        {/* Carousel / Slider Container */}
        <div className="max-w-4xl mx-auto relative px-2">
          
          {/* Main Active Review Card */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-500">
            {/* Top Right Decorative Quote Icon */}
            <MessageSquareQuote className="absolute -top-4 -right-4 w-32 h-32 text-blue-600/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Stars */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 animate-pulse" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 italic leading-relaxed font-sans max-w-2xl">
                "{TESTIMONIALS[currentIndex].text}"
              </blockquote>

              {/* Author Details */}
              <div className="flex flex-col items-center gap-2 pt-4 border-t border-slate-800/80 w-full max-w-xs">
                <img
                  src={TESTIMONIALS[currentIndex].avatarUrl}
                  alt={TESTIMONIALS[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/60 shadow-lg"
                />
                <div className="text-center">
                  <h3 className="font-bold text-white text-lg font-display">
                    — {TESTIMONIALS[currentIndex].name}
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold flex items-center justify-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{TESTIMONIALS[currentIndex].badge || 'Avaliação no Google'}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-400 transition-all shadow-lg"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(21,101,255,0.8)]'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-400 transition-all shadow-lg"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
