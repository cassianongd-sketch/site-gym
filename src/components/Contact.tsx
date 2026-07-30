import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Instagram, Clock, Send, Navigation, CheckCircle2, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Musculação / Hipertrofia');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `Olá! Meu nome é ${name || 'Visitante'}. Tenho interesse em ${goal}. ${
      message ? `Mensagem: ${message}` : 'Gostaria de agendar uma visita/aula experimental na SPORT GYM!'
    }`;
    const url = `https://wa.me/${GYM_INFO.phoneRaw}?text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* LED Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Localização e Contato</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Venha Conhecer a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300 text-glow-blue">
              Evolução de Perto
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Estamos localizados em ponto estratégico no Jardim América, Itaquaquecetuba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/30 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Endereço</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {GYM_INFO.address}<br />
                    {GYM_INFO.neighborhood} — {GYM_INFO.cityState}<br />
                    CEP {GYM_INFO.cep}
                  </p>
                  <a
                    href={GYM_INFO.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 mt-3"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Como Chegar no Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/30 shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Telefone & WhatsApp</h3>
                  <p className="text-base font-mono font-extrabold text-blue-400 mt-1">
                    {GYM_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Atendimento rápido para dúvidas e matrículas</p>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/30 shrink-0 mt-1">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Instagram Oficial</h3>
                  <a
                    href={GYM_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-cyan-300 hover:underline mt-1 block"
                  >
                    {GYM_INFO.instagram}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Acompanhe treinos, dicas e novidades diárias</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/30 shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Horário de Funcionamento</h3>
                  <div className="text-xs text-slate-300 mt-2 space-y-1">
                    <p className="flex justify-between gap-4">
                      <span>Segunda a Sexta:</span>
                      <strong className="text-white font-mono">06h00 às 23h00</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Sábados:</span>
                      <strong className="text-white font-mono">08h00 às 14h00</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map & Quick Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-slate-900 h-72 sm:h-80 relative">
              <iframe
                title="Mapa SPORT GYM Itaquaquecetuba"
                src="https://maps.google.com/maps?q=Estr.+Pedro+da+Cunha+Albuquerque+Lopes,+2635+-+Jardim+America,+Itaquaquecetuba+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-500/30 text-xs text-slate-200 font-medium">
                📍 SPORT GYM — Jardim América, Itaquaquecetuba
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-panel p-8 rounded-3xl border border-blue-500/30 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white font-display">Envie uma Mensagem Rápida</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Seu Objetivo
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                    >
                      <option value="Musculação / Hipertrofia">Musculação / Hipertrofia</option>
                      <option value="Emagrecimento & Condicionamento">Emagrecimento & Condicionamento</option>
                      <option value="Saúde e Qualidade de Vida">Saúde e Qualidade de Vida</option>
                      <option value="Aula Experimental">Agendar Aula Experimental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Sua Dúvida ou Mensagem (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Gostaria de saber os horários de pico e turmas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border border-blue-400/40 shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  <span>Enviar para WhatsApp Oficial</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
