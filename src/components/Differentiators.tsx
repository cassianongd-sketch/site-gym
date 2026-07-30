import React from 'react';
import { DIFFERENTIATORS } from '../data/gymData';
import { ShieldCheck, Sparkles, Cpu, MapPin, Users, GraduationCap, Layers, Star, CheckCircle } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Star': return <Star className="w-6 h-6" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1565FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1565FF]/10 border border-[#1565FF]/30 text-[#1565FF] text-[10px] font-bold uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5 text-[#1565FF]" />
            <span>Por Que Escolher a SPORT GYM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tighter text-white">
            Nossos Principais <br />
            <span className="text-[#1565FF] text-glow-blue">
              Diferenciais de Alto Padrão
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Tudo o que você precisa para treinar com conforto, segurança e motivação diária.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.id}
              className="group glass-card p-6 rounded-xl border border-white/5 hover:border-[#1565FF]/40 transition-all duration-300 flex items-center gap-4"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[#1565FF]/20 border border-[#1565FF]/30 text-[#1565FF] group-hover:bg-[#1565FF] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                {getIcon(diff.icon)}
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1565FF] shrink-0" />
                <span className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#1565FF] transition-colors">
                  {diff.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
