import React from 'react';
import { Logo } from './Logo';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050b] border-t border-slate-900 text-slate-400 py-16 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-12 bg-blue-600/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              Sua evolução começa aqui. Estrutura moderna, equipamentos de ponta e equipe dedicada no Jardim América em Itaquaquecetuba - SP.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-400 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={GYM_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-400 flex items-center justify-center transition-all"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white font-extrabold text-base font-display uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#estrutura" className="hover:text-blue-400 transition-colors">Estrutura</a></li>
              <li><a href="#planos" className="hover:text-blue-400 transition-colors">Planos de Treino</a></li>
              <li><a href="#avaliacoes" className="hover:text-blue-400 transition-colors">Avaliações Google</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Localização e Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-white font-extrabold text-base font-display uppercase tracking-wider">
              SPORT GYM
            </h3>
            <div className="text-xs text-slate-400 space-y-2">
              <p>📍 Estr. Pedro da Cunha Albuquerque Lopes, 2635 - Jardim América, Itaquaquecetuba - SP</p>
              <p>📞 WhatsApp: {GYM_INFO.phoneDisplay}</p>
              <p>📸 Instagram: {GYM_INFO.instagram}</p>
              <p>⭐ Nota 5.0 (19 avaliações no Google)</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SPORT GYM. Todos os direitos reservados. Itaquaquecetuba - SP.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
