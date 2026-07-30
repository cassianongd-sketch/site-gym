import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { CheckCircle2, Shield, Flame, Target } from 'lucide-react';
import aboutInteriorImage from '../assets/images/gym_about_interior_1785253736985.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-gradient-to-b from-[#030712] via-slate-950 to-[#050b14] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-blue-400" />
              <span>Conheça a SPORT GYM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
              Muito mais que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-glow-blue">
                uma academia.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Na <strong className="text-white font-semibold">SPORT GYM</strong> você encontra um ambiente moderno, organizado e preparado para proporcionar uma experiência completa para quem deseja cuidar da saúde, ganhar força e melhorar sua qualidade de vida.
              </p>
              <p>
                Nosso compromisso é oferecer atendimento de qualidade, equipamentos modernos e um ambiente que motiva você a evoluir todos os dias com foco, segurança e alto padrão.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Foco em Resultados</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Orientação adequada para alcançar cada objetivo.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Atendimento Humano</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Professores atenciosos do iniciante ao avançado.</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Link */}
            <div className="pt-2">
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 group"
              >
                <span>Agende sua visita com nossa equipe</span>
                <span className="group-hover:translate-x-1.5 transition-transform font-mono">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image with Glowing Border & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Frame Behind Image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-900 opacity-40 blur-xl animate-pulse-glow" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl bg-slate-900">
                <img
                  src={aboutInteriorImage}
                  alt="Interior da academia SPORT GYM com aparelhos modernos"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-blue-500/40 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-blue-400">Estrutura Completa</p>
                      <p className="text-sm font-extrabold text-white">Musculação & Climatização</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-blue-500/50">
                      100%
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Nota Máxima no Google</p>
                    <p className="text-base font-bold text-white">5.0 ★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
