import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Numbers } from './components/Numbers';
import { Structure } from './components/Structure';
import { Differentiators } from './components/Differentiators';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingChatbot } from './components/FloatingChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#1565FF] selection:text-white relative">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Numbers />
        <Structure />
        <Differentiators />
        <Reviews />
        <CTA />
        <Contact />
      </main>

      {/* Footer & Chatbot */}
      <Footer />
      <FloatingChatbot />
    </div>
  );
}

