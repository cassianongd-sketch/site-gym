import React from 'react';
import { STRUCTURE_ITEMS } from '../data/gymData';
import { Dumbbell, Wind, Award, Layout, UserCheck, Zap, Flame, HeartHandshake } from 'lucide-react';

export const Structure: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'Wind': return <Wind className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      default: return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section id="estrutura" className="relative py-24 bg-[#050b14] overflow-hidden">
      {/* LED Beam Effect in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Dumbbell className="w-3.5 h-3.5 text-blue-400" />
            <span>Infraestrutura Completa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Nossa Estrutura e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 text-glow-blue">
              Diferenciais Exclusivos
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Projetada para garantir máximo conforto, segurança e rendimento no seu treino diário.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRUCTURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Glowing Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-600/20 text-blue-400 group-hover:text-blue-300 flex items-center justify-center mb-6 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(21,101,255,0.4)]">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Glowing Accent Line */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                <span>SPORT GYM Elite</span>
                <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 group-hover:animate-ping" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
