import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Phone, ArrowRight, Flame } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050505] via-[#091530] to-[#050505] overflow-hidden text-white border-y border-[#1565FF]/20">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1565FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Flame Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1565FF]/10 border border-[#1565FF]/30 text-[#1565FF] text-xs font-black uppercase tracking-[0.25em] mb-8 shadow-md">
          <Flame className="w-4 h-4 text-[#1565FF] animate-pulse" />
          <span>Atendimento Rápido</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight mb-6 text-white">
          Pronto para o próximo <br />
          <span className="text-[#1565FF] text-glow-blue">
            nível da sua evolução?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Tire suas dúvidas, conheça nossa estrutura e agende sua visita diretamente com nossa equipe no WhatsApp.
        </p>

        {/* Huge Centralized WhatsApp Button */}
        <div className="flex justify-center items-center">
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-xl text-lg sm:text-xl font-black uppercase tracking-wider text-white bg-[#1565FF] hover:bg-blue-600 border border-blue-400/40 shadow-[0_10px_30px_rgba(21,101,255,0.4)] hover:shadow-[0_15px_40px_rgba(21,101,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
            <span>Fale Conosco no WhatsApp</span>
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Phone Info */}
        <div className="mt-8 flex items-center justify-center gap-3 text-slate-400 text-sm font-semibold">
          <Phone className="w-4 h-4 text-[#1565FF]" />
          <span>Atendimento Direto: <strong className="text-white font-mono text-base">{GYM_INFO.phoneDisplay}</strong></span>
        </div>

      </div>
    </section>
  );
};
