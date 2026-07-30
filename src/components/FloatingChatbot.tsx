import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, X, Send, Bot, Sparkles, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types';

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! 👋 Posso ajudar você a conhecer a SPORT GYM?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        { label: '🏋️ Quero conhecer a academia', action: 'conhecer' },
        { label: '📍 Ver localização', action: 'localizacao' },
        { label: '💬 Falar no WhatsApp', action: 'whatsapp' },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (action: string) => {
    if (action === 'conhecer') {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: 'Quero conhecer a academia e agendar uma aula experimental.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Excelente decisão! Na SPORT GYM temos equipamentos modernos, ambiente climatizado e acompanhamento profissional. Gostaria de agendar sua aula experimental no WhatsApp agora mesmo?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          { label: '✅ Agendar no WhatsApp', action: 'whatsapp_experimental' },
          { label: '📞 Falar no Atendimento', action: 'whatsapp' },
        ],
      };
      setMessages((prev) => [...prev, userMsg, botReply]);
    } else if (action === 'localizacao') {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text: 'Onde fica a SPORT GYM?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Estamos na ${GYM_INFO.address} - ${GYM_INFO.neighborhood}, ${GYM_INFO.cityState}.\n\n⏰ Horários:\nSegunda a Sexta: 06h às 23h\nSábados: 08h às 14h`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [{ label: '🗺️ Abrir Google Maps', action: 'maps' }],
      };
      setMessages((prev) => [...prev, userMsg, botReply]);
      // Also scroll to contact section
      const contactEl = document.getElementById('contato');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'whatsapp' || action === 'whatsapp_experimental') {
      window.open(GYM_INFO.whatsappUrl, '_blank');
    } else if (action === 'maps') {
      window.open(GYM_INFO.googleMapsDirections, '_blank');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    // Generate response based on user input
    setTimeout(() => {
      let botResponseText = 'Nossa equipe de atendimento está pronta para tirar suas dúvidas diretamente no WhatsApp!';
      const lower = userText.toLowerCase();

      if (lower.includes('preço') || lower.includes('valor') || lower.includes('plano') || lower.includes('quanto')) {
        botResponseText = 'Oferecemos excelentes condições com o melhor custo-benefício da região. Para consultar valores atualizados e promoções, fale conosco diretamente no WhatsApp!';
      } else if (lower.includes('horario') || lower.includes('hora') || lower.includes('abre') || lower.includes('fecha')) {
        botResponseText = 'Funcionamos de Segunda a Sexta das 06h00 às 23h00, e aos Sábados das 08h00 às 14h00!';
      } else if (lower.includes('onde') || lower.includes('endereco') || lower.includes('local')) {
        botResponseText = `Estamos na ${GYM_INFO.address} - ${GYM_INFO.neighborhood}, ${GYM_INFO.cityState}.`;
      }

      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          { label: '💬 Falar no WhatsApp Oficial', action: 'whatsapp' },
          { label: '📍 Ver no Mapa', action: 'maps' },
        ],
      };

      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-extrabold shadow-[0_0_30px_rgba(21,101,255,0.6)] hover:shadow-[0_0_45px_rgba(0,240,255,0.8)] border border-cyan-300/40 hover:scale-105 transition-all duration-300"
          aria-label="Abrir assistente virtual"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full" />
          </div>
          <span className="text-sm font-display tracking-wide hidden sm:inline">
            Atendimento SPORT GYM
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] glass-panel rounded-3xl border border-blue-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-4 border-b border-blue-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md">
                <Bot className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base font-display flex items-center gap-1.5">
                  <span>SPORT GYM Bot</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                </h3>
                <p className="text-[11px] text-blue-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Online • Resposta Instantânea</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-medium">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-900/90 text-slate-100 border border-slate-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Option Buttons */}
                {msg.options && (
                  <div className="flex flex-col gap-1.5 mt-2.5 w-full">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt.action)}
                        className="w-full text-left py-2 px-3 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-blue-200 text-xs font-bold transition-all hover:border-cyan-400 flex items-center justify-between"
                      >
                        <span>{opt.label}</span>
                        <span className="text-cyan-400 font-mono">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Digite sua dúvida aqui..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shrink-0 shadow-md"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
