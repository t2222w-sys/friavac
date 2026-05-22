import React, { useState, useEffect } from 'react';
import { CONFIG } from './config';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Clock, 
  Star, 
  Wind,
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  Thermometer,
  Sun,
  CloudSun,
  Wrench,
  Activity,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

// --- Logotipo Dinâmico em SVG (Garante que nunca há imagens partidas) ---
const DynamicLogo = ({ light = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform hover:rotate-12 ${light ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
        <Wind size={20} className="animate-pulse" />
      </div>
      <span className={`font-manrope font-extrabold text-lg tracking-wider ${light ? 'text-white' : 'text-dark'}`}>
        {CONFIG.companyName}
      </span>
    </div>
  );
};

// --- Componente do Simulador de BTUs Otimizado ---
const BTUSimulator = () => {
  const [m2, setM2] = useState(25);
  const [isSunny, setIsSunny] = useState(false);
  
  // Cálculo padrão ajustado para o clima quente de Portugal (Faro/Algarve)
  const btu = m2 * (isSunny ? 800 : 600);

  return (
    <div className="p-6 sm:p-8 bg-white border border-graphite rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Thermometer size={22} />
        </div>
        <h3 className="text-xl font-manrope font-extrabold text-dark">Simulador de Ar Condicionado</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-dark/50">Área do Espaço</span>
            <span className="font-extrabold text-primary text-sm">{m2} m²</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={m2} 
            onChange={(e) => setM2(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-graphite rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-dark/30 font-mono mt-1">
            <span>10 m²</span>
            <span>50 m²</span>
            <span>100 m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-light rounded-2xl border border-graphite">
           <div className="flex items-center gap-3">
             {isSunny ? <Sun className="text-amber-500 animate-spin-slow" size={20} /> : <CloudSun className="text-primary/60" size={20} />}
             <div>
               <span className="text-xs font-bold text-dark block">Radiação Solar Direta</span>
               <span className="text-[10px] text-dark/40">O espaço apanha sol direto no Verão?</span>
             </div>
           </div>
           <button 
             onClick={() => setIsSunny(!isSunny)}
             className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${isSunny ? 'bg-primary' : 'bg-graphite'}`}
             aria-label="Alternar radiação solar"
           >
             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${isSunny ? 'left-7' : 'left-1'}`} />
           </button>
        </div>

        <div className="pt-6 border-t border-graphite text-center">
           <div className="text-[10px] font-mono text-dark/50 uppercase tracking-widest mb-1">Potência Recomendada</div>
           <div className="text-4xl font-manrope font-extrabold tracking-tight text-dark mb-1">
             {btu.toLocaleString()} <span className="text-lg text-primary font-bold">BTUs</span>
           </div>
           <p className="text-[10px] text-dark/40 italic">Cálculo ideal para as exigências térmicas nacionais.</p>
        </div>

        <a 
          href={`https://wa.me/${CONFIG.whatsappNumber}?text=Olá! Usei o vosso simulador online e calculei que preciso de um ar condicionado de aproximadamente ${btu.toLocaleString()} BTUs para uma área de ${m2}m² (Exposição solar direta: ${isSunny ? 'Sim' : 'Não'}). Gostaria de obter um orçamento gratuito.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block py-4 bg-primary text-white text-center text-xs font-manrope font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
        >
          Pedir Orçamento Grátis
        </a>
      </div>
    </div>
  );
};

// --- Componente da FAQ Simplificada ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-graphite last:border-0 overflow-hidden bg-white px-6 rounded-2xl border mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-sm md:text-base font-bold text-dark group-hover:text-primary transition-colors">{question}</span>
        <span className={`text-primary text-xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-dark/70 text-xs md:text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Banner Informativo Rotativo (Ticker) ---
const InfoBanner = () => {
  const items = [
    `Técnicos de Climatização Licenciados (F-Gases)`,
    `Orçamentos Gratuitos e Sem Compromisso no ${CONFIG.region}`,
    `Instalações Rápidas com Garantia Oficial do Fabricante`,
    `Máquinas de Alta Eficiência Energética A++ / A+++`,
  ];
  
  // Duplicamos a lista para criar o efeito infinito contínuo do marquee
  const itemsList = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-dark text-white/90 py-2 overflow-hidden border-b border-white/5 relative z-[1001] w-full select-none">
      <div className="flex w-max">
        <div className="marquee-track flex gap-12 text-[10px] md:text-xs font-mono uppercase tracking-wider whitespace-nowrap">
          {itemsList.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- App Principal ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    localidade: '',
    mensagem: ''
  });

  // Bloqueio de scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Redireciona para o WhatsApp com os dados do formulário de forma amigável
    const text = `Olá! Solicito um contacto para orçamento.
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Localidade: ${formData.localidade}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans text-dark bg-light selection:bg-primary/20 min-h-screen relative">
      
      {/* Botão de WhatsApp Flutuante */}
      <a 
        href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`}
        className="fixed bottom-6 right-6 z-[1000] w-[56px] h-[56px] transition-all hover:scale-110 active:scale-95 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group"
        target="_blank" 
        aria-label="Contacto Direto por WhatsApp"
        rel="noopener noreferrer"
      >
        <span className="absolute right-14 bg-dark text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Dúvidas? Fale Connosco
        </span>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white drop-shadow-md">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.704 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* 1. Cabeçalho (Navbar) */}
      <header className={`navbar fixed top-0 left-0 right-0 w-full z-[1000] border-b border-graphite transition-all duration-300 bg-white/95 backdrop-blur-md`}>
        <InfoBanner />
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          
          <a href="#" className="focus:outline-none">
            <DynamicLogo />
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-manrope font-extrabold uppercase tracking-wider text-dark/70">
            <a href="#about" className="hover:text-primary transition-colors">Porquê Nós</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testemunhos</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#simulator" className="hover:text-primary transition-colors">Simulador</a>
            <a href="#faq" className="hover:text-primary transition-colors">Perguntas Comuns</a>
            <a href="#contact" className="hover:text-primary transition-colors">Orçamento</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CONFIG.phoneLink}`} 
              className="p-3 md:px-5 md:py-2.5 bg-primary text-white rounded-full hover:bg-primary/95 transition-all text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm"
              aria-label={`Ligar para ${CONFIG.companyName}`}
            >
              <Phone size={14} className="animate-pulse" />
              <span className="hidden sm:inline">{CONFIG.phone}</span>
            </a>
            
            <button 
              className="md:hidden text-dark p-2 bg-dark/5 rounded-lg hover:bg-dark/10 active:scale-95" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-[999] flex flex-col transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex-1 pt-28 pb-10 px-6 flex flex-col items-center justify-between">
          <nav className="flex flex-col items-center gap-8 w-full">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Porquê Nós</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Testemunhos</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Serviços</a>
            <a href="#simulator" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Simulador</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Perguntas Comuns</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-manrope font-extrabold uppercase text-dark">Pedir Orçamento</a>
          </nav>
          
          <div className="w-full max-w-xs flex flex-col gap-4 items-center">
            <a 
              href={`tel:${CONFIG.phoneLink}`} 
              className="w-full py-4 bg-primary text-white rounded-full text-center text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={18} /> {CONFIG.phone}
            </a>
            <span className="text-[10px] uppercase font-mono tracking-widest text-dark/30 flex items-center gap-1.5">
              <Award size={12} /> Instalações Legais em Todo o {CONFIG.region}
            </span>
          </div>
        </div>
      </div>

      <main className="pt-28">
        
        {/* 2. Hero Section (Apresentação Direta) */}
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 py-12 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Imagem de fundo moderna e abstrata focada em ar condicionado */}
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop" 
              srcSet="
                https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=640&auto=format&fit=crop 640w,
                https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1024&auto=format&fit=crop 1024w,
                https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop 1600w
              "
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
              alt="Instalação de Ar Condicionado" 
              className="w-full h-full object-cover object-center opacity-10"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] md:text-xs font-manrope font-extrabold uppercase tracking-widest mb-6">
              <Award size={14} /> Especialistas Técnicos em Climatização
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-manrope font-extrabold text-dark leading-tight tracking-tight mb-6">
              O Teu Clima Ideal.<br />
              <span className="text-primary italic">Conforto Sem Preocupações.</span>
            </h1>
            
            <p className="text-sm md:text-lg text-dark/80 max-w-2xl leading-relaxed mb-10 font-medium">
              Instalamos, reparamos e fazemos a manutenção de ar condicionado em {CONFIG.city} e em todo o {CONFIG.region}. Garante equipamentos de alta eficiência e uma climatização perfeita com o suporte de profissionais devidamente certificados por lei.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={`tel:${CONFIG.phoneLink}`} 
                className="px-8 py-3.5 bg-primary text-white text-xs md:text-sm font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <Phone size={16} /> Ligar Para Orçamento
              </a>
              <a 
                href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#25D366] text-white text-xs md:text-sm font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <MessageSquare size={16} /> WhatsApp Direto
              </a>
            </div>
          </div>
        </section>

        {/* 3. Faixa de Garantias Rápidas (Trust Bar) */}
        <section className="bg-primary py-8 text-white px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center md:flex-row md:text-left gap-4 justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wide">Técnicos Certificados</h4>
                <p className="text-xs text-white/80">Instalação 100% legal (Registo de F-Gases obrigatório).</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:text-left gap-4 justify-center border-t border-b md:border-t-0 md:border-b-0 border-white/15 py-6 md:py-0">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wide">Garantia Ativa do Fabricante</h4>
                <p className="text-xs text-white/80">Trabalhamos apenas com marcas líderes e suporte oficial.</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:text-left gap-4 justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wide">Orçamentos Claros</h4>
                <p className="text-xs text-white/80">Preço fechado e transparente, sem qualquer surpresa.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Posicionamento Estratégico (Porquê Nós / Para Quem É & Não É) */}
        <section id="about" className="py-20 px-6 bg-light">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">Transparência Total</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight">
                Como Trabalhamos e para Quem?
              </h2>
              <p className="text-sm md:text-base text-dark/50 mt-4 leading-relaxed font-medium">
                Não tentamos agradar a todos. Focamos no rigor, na lei e na satisfação real a longo prazo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Para Quem É */}
              <div className="p-8 md:p-12 bg-white border border-graphite rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-manrope font-extrabold text-dark">Para Quem É Connosco:</h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0"><ThumbsUp size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Quer Poupar na Fatura da Luz</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Recomendamos apenas equipamentos de altíssima eficiência energética (A++ ou superior), reduzindo drasticamente o consumo elétrico.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0"><ThumbsUp size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Exige Garantia Real e Instalação Legal</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Somos certificados por lei para manuseamento de gases fluorados. A instalação cumpre a regra, ativando automaticamente a garantia das marcas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0"><ThumbsUp size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Valoriza a Limpeza e Acabamento da Casa</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Garantia absoluta de entulho zero. Deixamos a casa limpa, sem pó acumulado e com todas as tubagens e furos devidamente isolados.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Para Quem NÃO É */}
              <div className="p-8 md:p-12 bg-white border border-graphite rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
                    <XCircle size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-manrope font-extrabold text-dark">Para Quem NÃO É:</h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"><XCircle size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Procura "Biscateiros" sem Certificação</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Não fazemos serviços clandestinos. Uma instalação ilegal anula a garantia oficial da máquina, arruina o equipamento e infringe a legislação ambiental.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"><XCircle size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Quer Máquinas de Baixa Qualidade</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Recusamos trabalhar com marcas de linha branca descartáveis onde não existem peças de reparação oficial nem suporte técnico pós-venda em Portugal.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"><XCircle size={16} /></div>
                    <div>
                      <strong className="text-sm text-dark block mb-0.5">Foca-se Apenas no Preço Mais Barato</strong>
                      <p className="text-xs md:text-sm text-dark/60 leading-relaxed">Instalar ar condicionado requer materiais resistentes (tubos de cobre de espessura adequada, isolamento reforçado e apoios anti-vibração). Não cortamos na qualidade.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Pós-Posicionamento */}
            <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-graphite max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="font-manrope font-extrabold text-base md:text-lg text-dark">Identificou-se com o nosso rigor?</h4>
                <p className="text-xs text-dark/60 mt-1">Garanta um serviço 100% profissional, limpo e em conformidade legal.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a 
                  href={`tel:${CONFIG.phoneLink}`} 
                  className="px-6 py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Ligar Já
                </a>
                <a 
                  href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Identifiquei-me com os vossos valores de trabalho e gostaria de solicitar um orçamento para ar condicionado.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:scale-102 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Secção de Prova Social (Testemunhos & Marcas) */}
        <section id="testimonials" className="py-20 px-6 bg-white border-t border-graphite">
          <div className="max-w-7xl mx-auto">
            
            {/* Logos de Marcas Recomendadas */}
            <div className="text-center mb-16 border-b border-graphite pb-12 max-w-5xl mx-auto">
              <span className="text-[10px] font-mono uppercase tracking-widest text-dark/40 block mb-6">Equipamentos e Marcas Líderes Que Instalamos</span>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-45 grayscale hover:opacity-75 hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm text-dark tracking-tighter">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" /> DAIKIN
                </div>
                <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm text-dark tracking-tighter">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" /> MITSUBISHI ELECTRIC
                </div>
                <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm text-dark tracking-tighter">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" /> LG ELECTRONICS
                </div>
                <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm text-dark tracking-tighter">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" /> SAMSUNG
                </div>
                <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm text-dark tracking-tighter">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" /> MIDEA
                </div>
              </div>
            </div>

            {/* Cabeçalho de Testemunhos */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">Opinião Real</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight">
                Quem Já Confia no Nosso Rigor
              </h2>
              <p className="text-sm md:text-base text-dark/50 mt-4 leading-relaxed font-medium">
                Veja o testemunho de quem escolheu uma instalação certificada, limpa e económica para a sua habitação.
              </p>
            </div>

            {/* Grelha de Testemunhos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Testemunho 1 */}
              <div className="p-6 sm:p-8 bg-light border border-graphite rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs md:text-sm text-dark/70 italic leading-relaxed mb-6 font-medium">
                    "Instalação impecável no nosso apartamento em Quarteira. O técnico foi extremamente rápido e o rigor de limpeza foi absoluto: nem um grão de pó após a perfuração da parede. Recomendo imenso!"
                  </p>
                </div>
                <div className="border-t border-graphite pt-4 flex items-center justify-between">
                  <div>
                    <strong className="text-sm text-dark block font-bold">Rui Mendes</strong>
                    <span className="text-[10px] text-dark/40 font-mono uppercase tracking-wider">Faro</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">RM</div>
                </div>
              </div>

              {/* Testemunho 2 */}
              <div className="p-6 sm:p-8 bg-light border border-graphite rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs md:text-sm text-dark/70 italic leading-relaxed mb-6 font-medium">
                    "Fiquei muito satisfeita. Ajudaram-nos a dimensionar o equipamento certo usando o simulador do site e propuseram uma máquina A+++. Notámos uma redução significativa na fatura mensal da luz."
                  </p>
                </div>
                <div className="border-t border-graphite pt-4 flex items-center justify-between">
                  <div>
                    <strong className="text-sm text-dark block font-bold">Maria Silva</strong>
                    <span className="text-[10px] text-dark/40 font-mono uppercase tracking-wider">Loulé</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">MS</div>
                </div>
              </div>

              {/* Testemunho 3 */}
              <div className="p-6 sm:p-8 bg-light border border-graphite rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs md:text-sm text-dark/70 italic leading-relaxed mb-6 font-medium">
                    "Trabalho de técnicos sérios e credenciados. Forneceram-me toda a documentação legal de registo da máquina e gases exigida pela APA, o que ativou logo a garantia de 3 anos do fabricante."
                  </p>
                </div>
                <div className="border-t border-graphite pt-4 flex items-center justify-between">
                  <div>
                    <strong className="text-sm text-dark block font-bold">Carlos Santos</strong>
                    <span className="text-[10px] text-dark/40 font-mono uppercase tracking-wider">Portimão</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">CS</div>
                </div>
              </div>

            </div>

            {/* Novo CTA de Conversão na Secção de Testemunhos */}
            <div className="mt-12 text-center bg-light p-6 rounded-2xl border border-graphite max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs md:text-sm font-bold text-dark text-left">Pretende o mesmo nível de rigor para a sua moradia?</span>
              <a 
                href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Vi os testemunhos positivos dos vossos clientes e gostaria de solicitar um orçamento para ar condicionado.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <MessageSquare size={14} /> Solicitar Orçamento
              </a>
            </div>

          </div>
        </section>

        {/* 5. Serviços Principais (Os 3 Pilares Técnicos) */}
        <section id="services" className="py-20 px-6 bg-white border-t border-b border-graphite">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">O Que Fazemos</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight">
                Serviços de Climatização Especializados
              </h2>
              <p className="text-sm md:text-base text-dark/50 mt-4 leading-relaxed font-medium">
                Soluções focadas no rigor técnico e na máxima eficiência dos teus sistemas de climatização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Instalação */}
              <div className="group p-6 sm:p-8 bg-light border border-graphite rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <Wind size={24} />
                  </div>
                  <h3 className="text-lg font-manrope font-extrabold text-dark mb-4 uppercase">Instalação de AC</h3>
                  <p className="text-xs md:text-sm text-dark/60 leading-relaxed mb-6 font-medium">
                    Instalação e dimensionamento profissional de sistemas de ar condicionado (Mural, Consola, Conduta e Multi-Split) adaptados exatamente ao teu espaço residencial ou comercial.
                  </p>
                </div>
                <a 
                  href={`https://wa.me/${CONFIG.whatsappNumber}?text=Olá! Gostaria de obter mais informações e orçamento para Instalação de Ar Condicionado.`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-6 w-full py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  Solicitar Orçamento <ChevronRight size={14} />
                </a>
              </div>

              {/* Manutenção e Limpeza */}
              <div className="group p-6 sm:p-8 bg-light border border-graphite rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-lg font-manrope font-extrabold text-dark mb-4 uppercase">Manutenção & Limpeza</h3>
                  <p className="text-xs md:text-sm text-dark/60 leading-relaxed mb-6 font-medium">
                    Higienização profunda de filtros, desinfeção contra bactérias e fungos, verificação de drenagens e controlo de pressões de gás para garantir ar saudável e consumos de luz baixos.
                  </p>
                </div>
                <a 
                  href={`https://wa.me/${CONFIG.whatsappNumber}?text=Olá! Gostaria de agendar ou obter orçamento para Manutenção e Limpeza do meu Ar Condicionado.`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-6 w-full py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  Agendar Limpeza <ChevronRight size={14} />
                </a>
              </div>

              {/* Assistência e Reparação */}
              <div className="group p-6 sm:p-8 bg-light border border-graphite rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-lg font-manrope font-extrabold text-dark mb-4 uppercase">Assistência & Reparação</h3>
                  <p className="text-xs md:text-sm text-dark/60 leading-relaxed mb-6 font-medium">
                    Deteção de fugas de refrigerante, avarias elétricas ou de compressores, e reparação técnica em todas as marcas líderes com peças originais e diagnóstico rápido.
                  </p>
                </div>
                <a 
                  href={`https://wa.me/${CONFIG.whatsappNumber}?text=Olá! Preciso de assistência técnica ou reparação urgente para o meu equipamento de Ar Condicionado.`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-6 w-full py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  Pedir Assistência <ChevronRight size={14} />
                </a>
              </div>

            </div>

            {/* CTA Pós-Serviços */}
            <div className="mt-16 text-center max-w-2xl mx-auto border-t border-graphite pt-12">
              <p className="text-sm font-bold text-dark mb-4">Já sabe de que serviço precisa para o seu espaço?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${CONFIG.phoneLink}`} 
                  className="px-8 py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:bg-primary/95 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Falar Connosco por Telefone
                </a>
                <a 
                  href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Analisei os vossos serviços de climatização e gostaria de solicitar um orçamento específico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#25D366] text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> Solicitar via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Secção do Simulador de AC */}
        <section id="simulator" className="py-20 px-6 bg-light">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1 max-w-xl">
               <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">Interativo</span>
               <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight mb-6">
                 Calcula a Potência Ideal para a Tua Divisão
               </h2>
               <p className="text-sm md:text-base text-dark/60 leading-relaxed mb-8 font-medium">
                 Evita consumos exagerados de eletricidade ou ter uma máquina incapaz de arrefecer o espaço. Utiliza o nosso simulador térmico simplificado para perceberes a potência aproximada que necessitas.
               </p>
               
               <ul className="space-y-4">
                 {["Cálculo calibrado para o clima português", "Fator de radiação solar direta incluído", "Prevenção de sobrecargas energéticas"].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wider text-dark/70">
                     <CheckCircle2 className="text-primary flex-shrink-0" size={18} /> {item}
                   </li>
                 ))}
               </ul>

               <div className="mt-8 flex flex-col sm:flex-row gap-3">
                 <a 
                   href={`tel:${CONFIG.phoneLink}`} 
                   className="px-6 py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-2"
                 >
                   <Phone size={14} /> Ligar Direto
                 </a>
                 <a 
                   href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um técnico para me ajudar a dimensionar o meu ar condicionado.")}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 py-3 bg-dark text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:bg-dark/90 transition-all text-center flex items-center justify-center gap-2"
                 >
                   <MessageSquare size={14} /> WhatsApp Técnico
                 </a>
               </div>
            </div>

            <div className="flex-1 w-full max-w-md">
               <BTUSimulator />
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 bg-white border-t border-b border-graphite">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">Tira as Tuas Dúvidas</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-2">
              <FAQItem 
                question="Os orçamentos de instalação são realmente gratuitos?" 
                answer="Sim, realizamos visitas técnicas e elaboramos orçamentos sem qualquer custo ou compromisso em toda a nossa zona de atuação." 
              />
              <FAQItem 
                question="Qual é a importância de instalar com um técnico credenciado F-Gases?" 
                answer="O manuseamento de gases de refrigeração sem licença da APA (Agência Portuguesa do Ambiente) é crime ambiental e anula imediatamente a garantia do fabricante das marcas (Daikin, Mitsubishi, LG, etc.). Nós garantimos uma instalação 100% legal certificada." 
              />
              <FAQItem 
                question="Com que frequência devo fazer a manutenção do meu ar condicionado?" 
                answer="Para uso doméstico normal, recomenda-se uma higienização e verificação técnica completa uma vez por ano (preferencialmente antes do Verão). Em espaços comerciais ou escritórios, a manutenção deve ser semestral ou trimestral." 
              />
              <FAQItem 
                question="O ar condicionado consome muita eletricidade no aquecimento de Inverno?" 
                answer="Não, pelo contrário. Os equipamentos modernos de tecnologia Inverter funcionam como bombas de calor extremamente eficientes. Consomem até 4 vezes menos eletricidade do que um termoventilador comum, aquecendo o espaço de forma uniforme." 
              />
            </div>

            {/* CTA Pós-FAQs */}
            <div className="mt-12 text-center bg-light p-8 rounded-3xl border border-graphite max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-xs md:text-sm font-bold text-dark text-left">Ainda ficou com alguma dúvida técnica por esclarecer?</span>
              <a 
                href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Estive a ler as perguntas frequentes no vosso site e tenho outra questão sobre climatização.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <MessageSquare size={14} /> Falar no WhatsApp
              </a>
            </div>

          </div>
        </section>

        {/* 7. Contactos, Formulário & Mapa */}
        <section id="contact" className="py-20 px-6 bg-light">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2 font-bold">Fala Connosco</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-dark tracking-tight">
                Pedir Orçamento Grátis
              </h2>
              <p className="text-sm md:text-base text-dark/50 mt-4 leading-relaxed font-medium">
                Envia-nos uma mensagem direta ou solicita um contacto telefónico. Estamos prontos para ajudar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Informação e Formulário (7 Colunas) */}
              <div className="lg:col-span-7 bg-white p-6 md:p-12 border border-graphite rounded-3xl shadow-sm flex flex-col justify-between">
                
                {formSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-manrope font-extrabold text-dark mb-3">Obrigado pelo Contacto!</h3>
                    <p className="text-sm text-dark/60 leading-relaxed max-w-sm mb-8">
                      O teu formulário foi enviado com sucesso e os dados foram direcionados para o nosso WhatsApp. Entraremos em contacto muito em breve.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-full hover:bg-primary/95 transition-all shadow-md"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="text-[10px] font-mono uppercase tracking-wider text-dark/50 block mb-2">O Teu Nome</label>
                        <input 
                          type="text" 
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Ex: João Silva" 
                          className="w-full px-4 py-3.5 bg-light border border-graphite rounded-xl focus:border-primary focus:outline-none text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefone" className="text-[10px] font-mono uppercase tracking-wider text-dark/50 block mb-2">Contacto Telefónico</label>
                        <input 
                          type="tel" 
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: 960 000 000" 
                          className="w-full px-4 py-3.5 bg-light border border-graphite rounded-xl focus:border-primary focus:outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="localidade" className="text-[10px] font-mono uppercase tracking-wider text-dark/50 block mb-2">Cidade / Localidade no {CONFIG.region}</label>
                      <input 
                        type="text" 
                        id="localidade"
                        name="localidade"
                        required
                        value={formData.localidade}
                        onChange={handleInputChange}
                        placeholder={`Ex: ${CONFIG.city}`} 
                        className="w-full px-4 py-3.5 bg-light border border-graphite rounded-xl focus:border-primary focus:outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="text-[10px] font-mono uppercase tracking-wider text-dark/50 block mb-2">Mensagem ou Dúvida</label>
                      <textarea 
                        id="mensagem"
                        name="mensagem"
                        required
                        rows="4"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Descreve brevemente o que procuras (Ex: Instalação de AC no quarto, Limpeza de filtros, avaria...)" 
                        className="w-full px-4 py-3.5 bg-light border border-graphite rounded-xl focus:border-primary focus:outline-none text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-primary text-white text-xs font-manrope font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      Enviar Mensagem & Orçamentar <ChevronRight size={16} />
                    </button>
                  </form>
                )}

              </div>

              {/* Informação e Mapa (5 Colunas) */}
              <div className="lg:col-span-5 bg-white border border-graphite rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
                
                {/* Detalhes da Sede */}
                <div className="p-6 md:p-8 border-b border-graphite flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-manrope font-extrabold text-dark uppercase tracking-wide mb-6">Contactos e Localização</h3>
                  
                  <div className="space-y-6 text-sm">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-xs md:text-sm text-dark font-medium leading-relaxed">
                        {CONFIG.address}<br />
                        <span className="text-dark/40 font-mono text-[10px] uppercase tracking-wider block mt-1">{CONFIG.postalCode} {CONFIG.city}, {CONFIG.region}</span>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Phone className="text-primary flex-shrink-0" size={18} />
                      <a href={`tel:${CONFIG.phoneLink}`} className="text-xs md:text-sm text-dark font-bold hover:text-primary transition-colors">{CONFIG.phone}</a>
                    </div>

                    <div className="flex items-center gap-4">
                      <Mail className="text-primary flex-shrink-0" size={18} />
                      <a href={`mailto:${CONFIG.email}`} className="text-xs md:text-sm text-dark font-bold hover:text-primary transition-colors">{CONFIG.email}</a>
                    </div>
                    
                    <div className="flex items-start gap-4 text-dark/50 pt-4 border-t border-graphite">
                      <Clock className="text-dark/20 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider leading-relaxed">
                        Segunda — Sexta: 08:30 – 17:30<br />
                        <span className="text-red-500/50">Fim de Semana: Encerrado</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Iframe */}
                <div className="h-60 relative w-full overflow-hidden bg-light border-t border-graphite">
                  <iframe 
                    src={CONFIG.mapEmbedUrl}
                    className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Sede ${CONFIG.companyName}`}
                  ></iframe>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="pt-16 pb-10 px-6 bg-dark text-white/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6">
              <DynamicLogo light={true} />
            </div>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm">
              Instalação, manutenção preventiva e assistência técnica de ar condicionado em todo o {CONFIG.region} desde {CONFIG.foundationYear}.
            </p>
            <div className="mt-6 flex items-center gap-2.5 text-green-400 font-mono text-[9px] tracking-wider uppercase font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" /> 
              Técnicos Ativos e Disponíveis no Terreno
            </div>
          </div>

          <div>
            <h4 className="text-white font-manrope font-extrabold uppercase text-xs mb-6 tracking-widest">Navegação</h4>
            <ul className="text-xs md:text-sm space-y-3 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">Porquê Nós</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testemunhos de Clientes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Os Nossos Serviços</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Simulador Térmico</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Comuns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-manrope font-extrabold uppercase text-xs mb-6 tracking-widest">Contactos Rápidos</h4>
            <a href={`tel:${CONFIG.phoneLink}`} className="text-white block mb-2 text-xl md:text-2xl font-manrope font-extrabold hover:text-primary transition-colors">{CONFIG.phone}</a>
            <p className="text-xs md:text-sm opacity-80 font-medium mb-4">{CONFIG.email}</p>
            <span className="text-[9px] uppercase font-mono tracking-widest text-primary flex items-center gap-1.5">
              <MapPin size={12} /> {CONFIG.city}, {CONFIG.region}
            </span>
          </div>

        </div>
        
        <div className="text-center text-[9px] font-mono tracking-widest pt-8 border-t border-white/5 uppercase">
           <span className="opacity-40">© {new Date().getFullYear()} {CONFIG.companyName}. Todos os direitos reservados. Foco em Eficiência Energética. Criado por </span>
           <span className="text-white font-bold">NEXTBRND</span>.
        </div>
      </footer>

    </div>
  );
}
