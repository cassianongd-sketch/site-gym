import { Testimonial, StructureItem, Differentiator } from '../types';

export const GYM_INFO = {
  name: 'SPORT GYM',
  tagline: 'O lugar onde sua evolução começa.',
  subtagline: 'Treine com equipamentos modernos, ambiente organizado e profissionais preparados para ajudar você alcançar seus objetivos.',
  phoneDisplay: '(11) 95684-1287',
  phoneRaw: '5511956841287',
  instagram: '@sportgym_itaqua',
  instagramUrl: 'https://www.instagram.com/sportgym_itaqua/',
  address: 'Estr. Pedro da Cunha Albuquerque Lopes, 2635',
  neighborhood: 'Jardim América',
  cityState: 'Itaquaquecetuba - SP',
  cep: '08584-584',
  googleRating: 5.0,
  googleReviewsCount: 19,
  whatsappMessageBase: 'Olá! Visitei o site da SPORT GYM e gostaria de agendar uma aula experimental.',
  whatsappUrl: 'https://wa.me/5511956841287?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20SPORT%20GYM%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.88636733221!2d-46.33857!3d-23.46462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7b233a0b18f5%3A0x6b19e918bc323568!2sEstr.%20Pedro%20da%20Cunha%20Albuquerque%20Lopes%2C%202635%20-%20Jardim%20America%2C%20Itaquaquecetuba%20-%20SP%2C%2008584-584!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  googleMapsDirections: 'https://maps.google.com/?q=Estr.+Pedro+da+Cunha+Albuquerque+Lopes,+2635+-+Jardim+America,+Itaquaquecetuba+-+SP',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Francielly Nascimento',
    role: 'Local Guide Google',
    rating: 5,
    text: 'Academia top, professores determinados e te ajudam. Meninas do atendimento muito atenciosas.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    badge: 'Local Guide • 44 avaliações'
  },
  {
    id: '2',
    name: 'Beatriz Oliveira',
    role: 'Aluna Frequente',
    rating: 5,
    text: 'Ótima academia, atendimento excelente com ótimos profissionais. Nota mil.',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    badge: 'Aluna Verificada'
  },
  {
    id: '3',
    name: 'Carlos M.',
    role: 'Aluno Musculação',
    rating: 5,
    text: 'Ótima academia, estrutura boa com ótimos profissionais.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    badge: 'Aluno Verificado'
  },
  {
    id: '4',
    name: 'Juliana S.',
    role: 'Aluna SPORT GYM',
    rating: 5,
    text: 'Melhor academia da região, super recomendo.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    badge: 'Aluna Verificada'
  }
];

export const STRUCTURE_ITEMS: StructureItem[] = [
  {
    id: '1',
    title: 'Equipamentos modernos',
    description: 'Aparelhos biomecanicamente projetados para máxima eficiência de treino e segurança muscular.',
    iconName: 'Dumbbell'
  },
  {
    id: '2',
    title: 'Ambiente climatizado',
    description: 'Temperatura e ventilação controladas para proporcionar máximo conforto durante todo o seu treino.',
    iconName: 'Wind'
  },
  {
    id: '3',
    title: 'Profissionais qualificados',
    description: 'Equipe de instrutores e personal trainers atenciosos e preparados para orientar cada movimento.',
    iconName: 'Award'
  },
  {
    id: '4',
    title: 'Ambiente organizado',
    description: 'Espaço amplo, higienizado, com disposição estratégica de anilhas, halteres e máquinas.',
    iconName: 'Layout'
  },
  {
    id: '5',
    title: 'Treino para iniciantes',
    description: 'Acompanhamento passo a passo para quem está começando agora, sem pressão e no seu ritmo.',
    iconName: 'UserCheck'
  },
  {
    id: '6',
    title: 'Treino para avançados',
    description: 'Carga pesada, variedade de aparelhos e periodização para quem busca altíssimo rendimento.',
    iconName: 'Zap'
  },
  {
    id: '7',
    title: 'Área de musculação',
    description: 'Setor completo com pesos livres, barras olímpicas, halteres de variadas cargas e bancos.',
    iconName: 'Flame'
  },
  {
    id: '8',
    title: 'Excelente atendimento',
    description: 'Equipe receptiva e carismática pronta para tirar dúvidas e fazer você se sentir em casa.',
    iconName: 'HeartHandshake'
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  { id: '1', title: 'Atendimento diferenciado', icon: 'ShieldCheck' },
  { id: '2', title: 'Ambiente limpo', icon: 'Sparkles' },
  { id: '3', title: 'Equipamentos modernos', icon: 'Cpu' },
  { id: '4', title: 'Excelente localização', icon: 'MapPin' },
  { id: '6', title: 'Professores preparados', icon: 'GraduationCap' },
  { id: '7', title: 'Estrutura organizada', icon: 'Layers' },
  { id: '8', title: 'Academia nota máxima no Google', icon: 'Star' },
];
