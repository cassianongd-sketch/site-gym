import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'inicio' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" aria-label="SPORT GYM Início" className="focus:outline-none">
          <Logo size={scrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-full transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Call To Action */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border border-blue-400/40 shadow-[0_0_20px_rgba(21,101,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-200 border border-slate-800 hover:text-white hover:border-blue-500/50 transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-blue-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] p-4 z-50 transition-all">
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/30 shadow-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-200 hover:text-white hover:bg-blue-600/30 rounded-xl transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-blue-500 text-xs font-mono">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col space-y-2">
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-600/30"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Falar no WhatsApp</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>(11) 95684-1287 • Itaquaquecetuba - SP</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
