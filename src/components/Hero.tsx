import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { ParticlesBackground } from './ParticlesBackground';
import { Calendar, MessageCircle, Star, ShieldCheck, ChevronDown, Zap } from 'lucide-react';
import heroBgImage from '../assets/images/gym_hero_bg_1785253723166.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="SPORT GYM Interior com iluminação LED azul"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-60 transition-transform duration-1000"
        />
        {/* Dark Vignette Overlay with Neon Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1565FF]/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1565FF]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Particle & Beams layer */}
      <ParticlesBackground />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-blue-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(21,101,255,0.25)] mb-8 animate-fade-in">
          <div className="flex items-center text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-200">
            5.0 no Google ({GYM_INFO.googleReviewsCount} avaliações)
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 font-display leading-[1.05]">
          O LUGAR ONDE SUA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 text-glow-blue inline-block">
            EVOLUÇÃO COMEÇA.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
          Treine com equipamentos modernos, ambiente organizado e profissionais preparados para ajudar você alcançar seus objetivos com padrão elite.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: Agendar Aula Experimental */}
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border border-cyan-300/40 shadow-[0_0_35px_rgba(21,101,255,0.5)] hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] transition-all duration-300 hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Agendar Aula Experimental</span>
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
          </a>

          {/* Button 2: Falar no WhatsApp */}
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-slate-100 bg-slate-900/80 hover:bg-slate-800/90 border border-blue-500/30 hover:border-blue-400/60 backdrop-blur-md shadow-lg shadow-black/50 hover:shadow-[0_0_25px_rgba(21,101,255,0.3)] transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Trust highlights */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 w-full max-w-xl flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Estrutura Climatizada</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Jardim América - Itaquaquecetuba</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Sem Taxas Escondidas</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-blue-400 hover:text-white hover:border-blue-400 animate-bounce transition-colors"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
