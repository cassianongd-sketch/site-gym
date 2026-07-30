import React, { useEffect, useState, useRef } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Star, ThumbsUp, Users, Award } from 'lucide-react';

export const Numbers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [googleRating, setGoogleRating] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [equipmentQuality, setEquipmentQuality] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Counter animation logic
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start++;
      const progress = start / steps;

      setGoogleRating(Number((progress * GYM_INFO.googleRating).toFixed(1)));
      setReviewsCount(Math.floor(progress * GYM_INFO.googleReviewsCount));
      setSatisfaction(Math.floor(progress * 100));
      setEquipmentQuality(Math.floor(progress * 100));

      if (start >= steps) {
        clearInterval(timer);
        setGoogleRating(GYM_INFO.googleRating);
        setReviewsCount(GYM_INFO.googleReviewsCount);
        setSatisfaction(100);
        setEquipmentQuality(100);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      label: 'Nota no Google',
      value: `${googleRating.toFixed(1)}`,
      sublabel: 'Avaliação Máxima 5.0',
      icon: Star,
      stars: true,
      color: 'from-amber-400 to-amber-200'
    },
    {
      label: 'Avaliações Reais',
      value: `${reviewsCount}`,
      sublabel: 'Clientes Satisfeitos',
      icon: Users,
      color: 'from-blue-400 to-cyan-300'
    },
    {
      label: 'Satisfação',
      value: `${satisfaction}%`,
      sublabel: 'Recomendado na Região',
      icon: ThumbsUp,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      label: 'Padrão de Qualidade',
      value: `${equipmentQuality}%`,
      sublabel: 'Equipamentos Modernos',
      icon: Award,
      color: 'from-blue-500 to-cyan-400'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#030712] border-y border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting bar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-24 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/50 text-center transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Glowing Beam Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mx-auto w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                {stat.stars && (
                  <div className="flex justify-center items-center text-amber-400 gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                )}

                <div className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-1">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-200">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
