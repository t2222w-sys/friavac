import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DiscoveryQuiz from './components/DiscoveryQuiz';
import EliteStatsSection from './components/EliteStatsSection';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Clock, 
  Star, 
  Menu, 
  X,
  Wind,
  ShieldCheck,
  Settings,
  Cpu,
  Activity,
  Zap,
  MessageCircle,
  Building2,
  Home,
  Wrench,
  Thermometer,
  Sun,
  CloudSun,
  Users,
  Award,
  CheckCircle2,
  ChevronDown,
  Globe,
  MessageSquare,
  Shield,
  ZapOff,
  ClipboardCheck,
  Send,
  Calendar
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Componentes de Card Interativo (Micro-UIs) ---

const DiagnosticShuffler = () => {
  const container = useRef();
  const [items, setItems] = useState([
    "Instalações Rápidas",
    "Garantia de Qualidade",
    "Limpeza Após Trabalho"
  ]);

  useGSAP(() => {
    // --- Injeção de Schema.org para Otimização de IA (LLM-Ready) ---
    const schemaId = "schema-org-data";
    if (!document.getElementById(schemaId)) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": "FRIAVAC - Equipamentos e Instalações Industriais, Lda.",
        "alternateName": "FRIAVAC Algarve",
        "description": "Especialistas em Ar Condicionado e Climatização Industrial e Residencial em Faro e todo o Algarve. Instalação, manutenção e assistência técnica AVAC.",
        "url": "https://www.friavac.pt",
        "logo": "https://www.friavac.pt/logo.png",
        "image": "https://www.friavac.pt/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Torre de Natal",
          "addressLocality": "Faro",
          "addressRegion": "Algarve",
          "postalCode": "8005-533",
          "addressCountry": "PT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.0420389,
          "longitude": -7.9017901
        },
        "telephone": "+351289812915",
        "email": "geral@friavac.pt",
        "priceRange": "€€-€€€",
        "openingHours": "Mo-Fr 08:30-17:30",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Algarve"
        }
      };

      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });

      gsap.fromTo(".shuffle-card", 
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 }
      );
    }, 3000);

    return () => clearInterval(interval);
  }, { scope: container });

  return (
    <div ref={container} className="relative h-48 w-full flex items-center justify-center overflow-hidden">
      {items.map((item, idx) => (
        <div key={item} 
          className="shuffle-card absolute w-4/5 p-4 rounded-xl border border-ghost/5 bg-white/40 backdrop-blur-md shadow-lg"
          style={{ 
            zIndex: 3 - idx, 
            transform: `translateY(${idx * 12}px) scale(${1 - idx * 0.05})`,
            opacity: 1 - idx * 0.3
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-ghost/40">{item}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const fullText = "A monitorizar eficiência energética... Filtros limpos e verificados... Fluxo de ar otimizado em Faro.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i = (i + 1) % (fullText.length + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white/60 border border-ghost/5 rounded-xl font-mono text-[10px] leading-relaxed text-accent/80">
      <div className="flex items-center gap-2 mb-2 border-b border-ghost/5 pb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="uppercase text-[8px] tracking-tighter text-ghost/40">Estado do Sistema - Manutenção Realizada</span>
      </div>
      <div>{text}<span className="inline-block w-1 h-3 bg-accent ml-1 animate-pulse" /></div>
    </div>
  );
};

const ProtocolScheduler = () => {
  const cursorRef = useRef();
  const scope = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cursorRef.current, { x: 40, y: 30, duration: 1.5, ease: "power2.inOut" })
      .to(cursorRef.current, { scale: 0.8, duration: 0.2 })
      .to(".grid-cell-active", { backgroundColor: "#0077B6", opacity: 0.2, duration: 0.3 })
      .to(cursorRef.current, { scale: 1, duration: 0.2 })
      .to(cursorRef.current, { x: 80, y: 10, duration: 1, ease: "power2.inOut" })
      .to(cursorRef.current, { opacity: 0, duration: 0.5 })
      .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
      .to(".grid-cell-active", { backgroundColor: "transparent", duration: 0.1 });
  }, { scope });

  return (
    <div ref={scope} className="relative p-4 bg-white/40 rounded-xl border border-ghost/5 aspect-square flex flex-col justify-between shadow-inner">
      <div className="grid grid-cols-4 gap-2 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`h-4 rounded-sm border border-ghost/20 ${i === 5 ? 'grid-cell-active' : ''}`} />
        ))}
      </div>
      <div ref={cursorRef} className="absolute top-8 left-8 text-accent pointer-events-none">
        <div className="text-[8px] absolute -top-4 -right-8 bg-accent text-white px-1 font-bold">AGENDADO</div>
        <ChevronRight size={16} strokeWidth={3} />
      </div>
      <a href="tel:+351289812915" className="w-full py-2 bg-accent/5 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest rounded-lg text-center">
        Marcar Revisão
      </a>
    </div>
  );
};

const BTUSimulator = () => {
  const [m2, setM2] = useState(20);
  const [isSunny, setIsSunny] = useState(false);
  const btu = m2 * (isSunny ? 800 : 600);

  return (
    <div className="p-8 bg-white border border-ghost/5 rounded-[2.5rem] shadow-2xl shadow-accent/5">
      <div className="flex items-center gap-3 mb-8">
        <Thermometer className="text-accent" />
        <h3 className="text-xl font-bold">Simulador de Ar Condicionado</h3>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ghost/40">Tamanho da Divisão</span>
            <span className="font-bold text-accent">{m2} m²</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={m2} 
            onChange={(e) => setM2(e.target.value)}
            className="w-full accent-accent h-1 bg-ghost/5 rounded-full appearance-none cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-primary/50 rounded-xl border border-ghost/5">
           <div className="flex items-center gap-3">
             {isSunny ? <Sun className="text-amber-500" /> : <CloudSun className="text-ghost/30" />}
             <span className="text-sm font-semibold">Tem sol direto no Verão?</span>
           </div>
           <button 
             onClick={() => setIsSunny(!isSunny)}
             className={`w-12 h-6 rounded-full transition-colors relative ${isSunny ? 'bg-accent' : 'bg-ghost/10'}`}
           >
             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isSunny ? 'left-7' : 'left-1'}`} />
           </button>
        </div>

        <div className="pt-8 border-t border-ghost/5 text-center">
           <div className="text-[10px] font-mono text-ghost/40 uppercase mb-2">Sugestão de Potência</div>
           <div className="text-5xl font-extrabold tracking-tighter text-ghost mb-2">
             {btu.toLocaleString()} <span className="text-xl text-accent">BTUs</span>
           </div>
           <p className="text-[10px] text-ghost/30 italic">Cálculo ideal para o clima quente do Algarve.</p>
        </div>

        <a href="tel:+351289812915" className="w-full block py-4 bg-ghost text-white text-center text-xs font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform">
          Pedir Orçamento Grátis
        </a>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-ghost/5 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-base font-bold group-hover:text-accent transition-colors">{question}</span>
        <ChevronDown className={`text-accent transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-ghost/50 leading-relaxed text-[13px]">{answer}</p>
      </div>
    </div>
  );
};

// --- App Principal ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef();
  const preloaderRef = useRef();
  const heroRef = useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();
  const teamRef = useRef();

  useGSAP(() => {
    // Intro Preloader Reveal - Efeito Elastic e Timings Otimizados (~1.5s)
    const tlIntro = gsap.timeline();
    
    // Bloquear scroll no início
    document.body.style.overflow = "hidden";

    tlIntro.fromTo(".preloader-logo", 
           { scale: 0.6, opacity: 0, y: 40 },
           { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "elastic.out(1, 0.6)" }
       )
       .to(".preloader-branding", { opacity: 0.4, duration: 0.3 }, "-=0.2")
       .to({}, { duration: 0.5 }) // Pausa fixa de 0.5s
       .to(".preloader-logo", { y: -40, opacity: 0, duration: 0.3, ease: "power2.in" })
       .to(preloaderRef.current, { 
          yPercent: -100, 
          duration: 0.6, // Saída mais agressiva
          ease: "power4.inOut",
          onComplete: () => {
            document.body.style.overflow = "auto";
          }
       });

    // Hero Section Animations - Sincronizado com o fim do preloader (~1.7s total)
    const tl = gsap.timeline({ delay: 1.6 });
    tl.from(".hero-line-1", { y: 40, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".hero-line-2", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7")
      .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 }, "-=0.5");

    // Scroll trigger for nav background
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => gsap.to(".navbar", { background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(24, 24, 27, 0.05)", duration: 0.3 }),
      onLeaveBack: () => gsap.to(".navbar", { background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(15px)", borderBottom: "1px solid rgba(24, 24, 27, 0.02)", duration: 0.3 }),
    });

    // Brands Marquee
    gsap.to(".marquee-track", {
      xPercent: -50,
      ease: "none",
      duration: 35,
      repeat: -1,
    });

    // Stacking Cards
    const cards = gsap.utils.toArray('.stack-card');
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top 10%",
        endTrigger: ".protocol-section",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          const scale = 1 - (self.progress * 0.1);
          gsap.set(card, { scale, opacity: 1 - self.progress, filter: `blur(${self.progress * 10}px)` });
        }
      });
    });

    // Stats Counter Animation
    const stats = gsap.utils.toArray('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      gsap.to(stat, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
        }
      });
    });

    // MAP SECTION REVEAL
    gsap.from(".map-info-pane", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#location",
        start: "top 80%",
      }
    });

    gsap.from(".map-visual-pane", {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#location",
        start: "top 80%",
      }
    });


    return () => {};
  }, { scope: containerRef });



  return (
    <div ref={containerRef} className="noise-overlay font-sans text-ghost selection:bg-accent/20">
      
      {/* Preloader Premium */}
      <div ref={preloaderRef} className="fixed inset-0 z-[2000] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative flex flex-col items-center">
             <img 
               src="/logo.png" 
               alt="FRIAVAC Logo" 
               className="preloader-logo w-48 md:w-64 h-auto opacity-0 translate-y-4" 
             />
             <div className="mt-8 overflow-hidden h-6">
                <div className="preloader-branding text-accent font-sans text-[10px] font-bold tracking-[0.4em] uppercase opacity-0">
                   Qualidade em Todo o Algarve
                </div>
             </div>
        </div>
      </div>
      
      {/* WhatsApp Premium Widget — Digital Elite 4-Layers */}
      <a 
        href="https://wa.me/351289812915?text=Olá, gostaria de pedir um orçamento qualificado para climatização no Algarve." 
        className="whatsapp-float fixed bottom-6 right-6 z-[1000] w-[56px] h-[56px] transition-all hover:scale-110 active:scale-95"
        target="_blank" 
        aria-label="Contacto por WhatsApp"
      >
        <div className="relative w-full h-full">
          {/* Anel de Pulsação Elite */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
            {/* 1. Base Verde Total (Exterior) */}
            <path fill="#25D366" d="M12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.8 1 3.8 1.5 5.7 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
            
            {/* 2. Camada Branca Interna (Escalonada) */}
            <g transform="translate(0.6, 0.6) scale(0.95)">
                <path fill="#FFF" d="M12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.8 1 3.8 1.5 5.7 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
            </g>
            
            {/* 3. Preenchimento Verde Central */}
            <g transform="translate(1.2, 1.2) scale(0.9)">
                <path fill="#25D366" d="M12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.7c1.8 1 3.8 1.5 5.7 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
            </g>
            
            {/* 4. Telefone Branco Final */}
            <path fill="#FFF" d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2-.1-.4-.1-.6-.1-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
          </svg>
        </div>
      </a>

      {/* Navbar Elite */}
      <header className={`navbar fixed top-0 w-full z-[1000] transition-colors duration-300 border-b border-ghost/5 transform-gpu ${isMenuOpen ? 'bg-white' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <a href="#" className="flex flex-col">
               <img src="/logo.png" alt="FRIAVAC Logo" className="h-10 w-auto" />
             </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.2em] text-ghost/70">
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#simulator" className="hover:text-primary transition-colors">Simulador</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testemunhos</a>
            <a href="#team" className="hover:text-primary transition-colors">Equipa</a>
            <a href="#projects" className="hover:text-primary transition-colors">Portfólio</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQs</a>
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+351289812915" className="px-6 py-3 bg-white border border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all text-[11px] font-extrabold uppercase tracking-widest hidden lg:block">
                Pedir Orçamento Grátis
              </a>
              <a href="#contact" className="px-7 py-3 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2">
                <Phone size={14} className="animate-pulse" /> 289 812 915
              </a>
            </div>
          </nav>

          <button className="md:hidden text-ghost z-[600]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-white z-[550] flex flex-col transition-transform duration-300 ease-in-out transform-gpu ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex-1 overflow-y-auto pt-24 pb-12 px-6 flex flex-col items-center">
            <nav className="flex flex-col items-center gap-8 text-xl font-manrope font-extrabold uppercase tracking-tight text-ghost w-full">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">Serviços</a>
              <a href="#simulator" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">Simulador</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">Testemunhos</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">Equipa</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">Portfólio</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-ghost/5 w-full text-center">FAQs</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors text-primary py-2 border-b border-ghost/5 w-full text-center">Contactos</a>
              
              <div className="mt-8 flex flex-col items-center gap-4 w-full">
                <a href="tel:+351289812915" className="w-full max-w-xs py-5 bg-primary text-white rounded-full flex items-center justify-center gap-3 shadow-xl">
                  <Phone size={20} /> 289 812 915
                </a>
                <span className="text-[10px] text-ghost/60 font-bold uppercase tracking-[0.3em] text-center">Engenharia Industrial desde 1993</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section — Estética Angular Elite */}
        <section ref={heroRef} className="relative min-h-[90svh] flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/hero_light.png" 
              alt="Engenharia FRIAVAC Algarve - Climatização Industrial" 
              className="w-full h-full object-cover object-left scale-110"
              loading="eager"
            />
            {/* Overlay Suave para Legibilidade (LLM-Ready Optimization) */}
            <div 
              className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-[2]"
              style={{ clipPath: 'polygon(0 0, 45% 0, 30% 100%, 0 100%)' }}
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="hero-line-1 flex items-center gap-4 mb-10">
              <div className="px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-extrabold uppercase tracking-[0.3em]">
                Autoridade em Climatização • Faro
              </div>
            </div>
            <h1 className="hero-line-1 text-5xl md:text-7xl font-manrope font-extrabold leading-[0.9] mb-8 tracking-tighter text-black">
              CONFORTO<br /><span className="text-primary italic">TECNOLÓGICO</span><br />INDUSTRIAL.
            </h1>
            <p className="hero-line-2 text-lg font-bold text-black/90 mb-12 max-w-lg leading-relaxed">
              Especialistas em Assistência, Instalação e Manutenção de Equipamentos Industriais e Residenciais em todo o Algarve.
            </p>
            <div className="hero-cta flex flex-wrap gap-5">
              <a href="tel:+351289812915" className="px-10 py-5 bg-primary text-white text-[12px] font-extrabold uppercase tracking-widest rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-3">
                <Phone size={18} /> Contacto Direto
              </a>
              <a href="#contact" className="px-10 py-5 bg-white text-ghost text-[14px] font-extrabold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all shadow-xl">
                 Iniciar Discovery Quiz
              </a>
            </div>
          </div>
        </section>

        {/* Brands Marquee — Autoridade de Marca (Cores Originais) */}
        <div className="py-16 bg-white overflow-hidden border-b border-ghost/5">
          <div className="marquee-track flex whitespace-nowrap items-center">
            {[
              { name: "DAIKIN", color: "#00A1E4" },
              { name: "MITSUBISHI ELECTRIC", color: "#E60012" },
              { name: "LG", color: "#A50034" },
              { name: "PANASONIC", color: "#004098" },
              { name: "FUJITSU", color: "#ED1C24" },
              { name: "SAMSUNG", color: "#074C9D" },
              { name: "CARRIER", color: "#00447C" }
            ].map((brand, i) => (
              <div key={i} className="flex items-center mx-16 md:mx-24 group">
                <span 
                  className="text-3xl md:text-5xl font-manrope font-extrabold tracking-tighter transition-all duration-500 group-hover:scale-110"
                  style={{ color: brand.color, filter: 'drop-shadow(0 0 20px ' + brand.color + '20)' }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicar para loop contínuo */}
            {[
              { name: "DAIKIN", color: "#00A1E4" },
              { name: "MITSUBISHI ELECTRIC", color: "#E60012" },
              { name: "LG", color: "#A50034" },
              { name: "PANASONIC", color: "#004098" },
              { name: "FUJITSU", color: "#ED1C24" },
              { name: "SAMSUNG", color: "#074C9D" },
              { name: "CARRIER", color: "#00447C" }
            ].map((brand, i) => (
              <div key={i + 10} className="flex items-center mx-16 md:mx-24 group">
                <span 
                  className="text-3xl md:text-5xl font-manrope font-extrabold tracking-tighter transition-all duration-500 group-hover:scale-110"
                  style={{ color: brand.color, filter: 'drop-shadow(0 0 20px ' + brand.color + '20)' }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <EliteStatsSection />

        {/* Services Grid — Visual Fidelity (Referência Imagem) */}
        <section id="services" ref={servicesRef} className="py-24 px-6 md:px-20 bg-graphite/30">
          <div className="max-w-7xl mx-auto mb-16">
             <span className="text-primary font-manrope font-extrabold text-[10px] uppercase tracking-[0.5em] mb-4 block">Especialidades Técnicas</span>
             <h2 className="text-4xl md:text-5xl font-manrope font-extrabold tracking-tighter">Domínio Total em<br /><span className="text-primary italic">Sistemas Térmicos.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ghost/5 border border-ghost/5 rounded-[3rem] overflow-hidden">
            
             {/* Frio Industrial */}
            <a href="#contact" className="group relative h-[400px] bg-white overflow-hidden cursor-pointer" aria-label="Saber mais sobre Frio Industrial">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instalação de Frio Industrial em Faro" loading="lazy" />
              <div className="absolute inset-0 bg-white/80 transition-opacity group-hover:opacity-60" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-center p-12 max-w-[50%]">
                <h3 className="text-3xl font-manrope font-extrabold mb-4 text-black">FRIO<br />INDUSTRIAL</h3>
                <p className="text-xs text-black font-semibold mb-8">Soluções robustas para unidades de produção e frio alimentar.</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">Consultar Expertise <ChevronRight size={14} /></span>
              </div>
            </a>

            {/* Aquecimento */}
            <a href="#contact" className="group relative h-[400px] bg-white overflow-hidden cursor-pointer" aria-label="Saber mais sobre Sistemas de Aquecimento">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sistemas de Aquecimento e Caldeiras no Algarve" loading="lazy" />
              <div className="absolute inset-0 bg-red-600/80 transition-opacity group-hover:opacity-40" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 40% 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-center items-end p-12 text-right">
                <h3 className="text-3xl font-manrope font-extrabold mb-4 text-white">AQUECIMENTO</h3>
                <p className="text-xs text-white font-semibold mb-8 max-w-[250px]">Equipamentos de queima e sistemas térmicos residenciais.</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 justify-end">Explorar Sistemas <ChevronRight size={14} /></span>
              </div>
            </a>

            {/* Ventilação */}
            <a href="#contact" className="group relative h-[400px] bg-white overflow-hidden cursor-pointer" aria-label="Saber mais sobre Ventilação Industrial">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sistemas de Ventilação e Extração para Cozinhas" loading="lazy" />
              <div className="absolute inset-0 bg-ghost/80 transition-opacity group-hover:opacity-60" style={{ clipPath: 'polygon(0 0, 50% 0, 30% 100%, 0 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-center p-12 max-w-[50%]">
                <h3 className="text-3xl font-manrope font-extrabold mb-4 text-white">VENTILAÇÃO</h3>
                <p className="text-xs text-white font-semibold mb-8">Extração e renovação de ar para cozinhas e espaços comerciais.</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">Ver Projetos <ChevronRight size={14} /></span>
              </div>
            </a>

            {/* Ar Condicionado */}
            <a href="#contact" className="group relative h-[400px] bg-white overflow-hidden cursor-pointer" aria-label="Saber mais sobre Ar Condicionado e Climatização">
              <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instalação de Ar Condicionado em Vilamoura e Faro" loading="lazy" />
              <div className="absolute inset-0 bg-primary/95 transition-opacity group-hover:opacity-80" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 50% 100%)' }} />
              <div className="absolute inset-0 flex flex-col justify-center items-end p-12 text-right">
                <h3 className="text-3xl font-manrope font-extrabold mb-4 text-white">AR<br />CONDICIONADO</h3>
                <p className="text-xs text-white font-semibold mb-8 max-w-[250px]">Otimização climática de alto rendimento no Algarve.</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 justify-end">Orçamento Qualificado <ChevronRight size={14} /></span>
              </div>
            </a>

          </div>
        </section>

        {/* Simulator Section */}
        <section id="simulator" className="py-20 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
               <div className="text-accent font-mono text-[9px] mb-6 uppercase tracking-[0.6em]">Ferramenta Útil</div>
               <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Simule o AC Ideal</h2>
               <p className="text-base text-ghost/50 leading-relaxed mb-8">
                 Otimize o seu consumo. Use o nosso simulador para perceber a potência real que o seu espaço exige no clima do Algarve.
               </p>
               <ul className="space-y-4">
                 {["Análise de Radiação Solar", "Área m² Dinâmica", "Sem Compromisso"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-ghost/60">
                     <CheckCircle2 className="text-accent" size={16} /> {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="flex-1 w-full max-w-lg">
               <BTUSimulator />
            </div>
          </div>
        </section>

        {/* Testimonials Section Elite — Prova Social de Autoridade */}
        <section id="testimonials" className="py-24 px-6 md:px-20 bg-ghost">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8">
               <div className="text-center md:text-left">
                 <span className="text-primary font-manrope font-extrabold text-[10px] uppercase tracking-[0.5em] mb-4 block">Confiança Regional</span>
                 <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-white tracking-tighter leading-none">Rigor Técnico sob<br /><span className="text-primary italic">Avaliação Google.</span></h2>
               </div>
               <div className="flex flex-col items-center md:items-end gap-2">
                 <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-primary text-primary" />)}
                 </div>
                 <span className="text-[10px] font-extrabold text-white/40 uppercase tracking-widest">4.8/5 • 120+ Avaliações Reais</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Hill Fore */}
              <div className="group p-12 bg-white rounded-[4rem] border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <p className="text-ghost text-lg font-medium italic mb-10 leading-relaxed opacity-80">
                  "Instalação com cuidado e ótimos acabamentos no trabalho de perfuração da parede e aplicação de calhas. Exterior e interior. Competência e profissionalismo. Recomendo."
                </p>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center font-manrope font-extrabold text-primary text-xl">HF</div>
                   <div>
                     <div className="font-manrope font-extrabold text-ghost text-lg">Hill Fore</div>
                     <div className="text-[10px] text-primary uppercase font-extrabold tracking-[0.2em]">Faro, Algarve</div>
                   </div>
                </div>
              </div>
              {/* Carlos Guerreiro */}
              <div className="group p-12 bg-[#FAF8F5] rounded-[4rem] border border-ghost/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <p className="text-ghost text-lg font-medium italic mb-10 leading-relaxed opacity-80">
                  "Serviço de mestre. A equipa da Friavac resolveu um problema de climatização industrial que outros não conseguiram. Rigor e confiança total no Algarve."
                </p>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-manrope font-extrabold text-white text-xl">CG</div>
                   <div>
                     <div className="font-manrope font-extrabold text-ghost text-lg">Carlos Guerreiro</div>
                     <div className="text-[10px] text-primary uppercase font-extrabold tracking-[0.2em]">Gestor Industrial • Loulé</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Elite Section */}
        {/* Team Elite Section */}
        <section id="team" ref={teamRef} className="py-24 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-primary font-manrope font-extrabold text-[12px] uppercase tracking-[0.5em] mb-4 block">Corpo Técnico</span>
                <h2 className="text-4xl md:text-5xl font-manrope font-extrabold text-ghost tracking-tighter leading-none mb-8 uppercase">ENGENHARIA<br />DE PRECISÃO.</h2>
                <p className="text-ghost/60 text-base font-medium leading-relaxed mb-10 max-w-md">
                  Operamos com técnicos certificados pela ADENE e APA, garantindo que o seu sistema cumpre as mais rigorosas normas europeias de eficiência energética.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary"><Award size={24} /></div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-ghost/40">Certificação Gases Fluorados</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary"><ShieldCheck size={24} /></div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-ghost/40">Parceiro Oficial Daikin • Algarve</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative group rounded-[3rem] overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Engenharia" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ghost/80 to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 text-white">
                       <div className="text-[10px] font-extrabold uppercase tracking-widest opacity-60 mb-2">Engenharia Técnica</div>
                       <h4 className="text-2xl font-manrope font-extrabold">Projeto e Dimensionamento</h4>
                    </div>
                 </div>
                 <div className="relative group rounded-[3rem] overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instalação" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 text-white">
                       <div className="text-[10px] font-extrabold uppercase tracking-widest opacity-60 mb-2">Técnicos Certificados</div>
                       <h4 className="text-2xl font-manrope font-extrabold">Instalação e Manutenção</h4>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section id="projects" ref={projectsRef} className="py-24 px-6 md:px-20 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <span className="text-accent font-mono text-[12px] uppercase tracking-[0.4em] mb-4 block">Portfólio Industrial</span>
               <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white tracking-tighter mb-4 uppercase">Projetos de Referência</h2>
               <p className="text-white/80 text-base font-medium">Sistemas instalados com rigor técnico em todo o Algarve.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="tel:+351289812915" className="project-card group relative aspect-[5/6] md:aspect-[6/7] rounded-[2rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2656&auto=format&fit=crop" alt="Instalação de Frio Industrial em Unidade de Produção em Faro" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-ghost to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-col h-16 justify-center">
                     <span className="text-white/40 font-mono text-[8px] uppercase tracking-[0.3em] mb-1">Frio Industrial</span>
                     <h4 className="text-white text-base font-bold leading-tight">Unidade Multi-Split</h4>
                   </div>
                   <div className="text-white text-[8px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-2">Pedir Solução <ChevronRight size={10} /></div>
                 </div>
              </a>
              <a href="tel:+351289812915" className="project-card group relative aspect-[5/6] md:aspect-[6/7] rounded-[2rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop" alt="Projeto de Climatização de Luxo em Moradia Premium em Vilamoura" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-ghost to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-col h-16 justify-center">
                     <span className="text-white/40 font-mono text-[8px] uppercase tracking-[0.3em] mb-1">Vilamoura Luxury</span>
                     <h4 className="text-white text-base font-bold leading-tight">Climatização de Moradia</h4>
                   </div>
                   <div className="text-white text-[8px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-2">Pedir Solução <ChevronRight size={10} /></div>
                 </div>
              </a>
              <a href="tel:+351289812915" className="project-card group relative aspect-[5/6] md:aspect-[6/7] rounded-[2rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop" alt="Manutenção e Limpeza de Calhas e Dutos em Olhão, Algarve" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-ghost to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-col h-16 justify-center">
                     <span className="text-white/40 font-mono text-[8px] uppercase tracking-[0.3em] mb-1">Arco de Olhão</span>
                     <h4 className="text-white text-base font-bold leading-tight">Manutenção Total</h4>
                   </div>
                   <div className="text-white text-[8px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-2">Pedir Solução <ChevronRight size={10} /></div>
                 </div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <FAQItem 
                question="Os orçamentos são gratuitos?" 
                answer="Sim, realizamos visitas técnicas e orçamentos totalmente gratuitos em todo o Algarve, sem qualquer tipo de compromisso." 
              />
              <FAQItem 
                question="Em que zonas do Algarve atuam?" 
                answer="Sediados em Faro, servimos toda a região, com foco em Loulé, Olhão, Vilamoura, Albufeira e Tavira." 
              />
              <FAQItem 
                question="Fazem manutenção de equipamentos que não foram instalados por vós?" 
                answer="Sim. A nossa equipa técnica está certificada para intervir e reparar equipamentos de todas as marcas líderes no mercado." 
              />
              <FAQItem 
                question="O trabalho de instalação inclui limpeza?" 
                answer="O nosso selo de qualidade garante um trabalho 'zero detritos'. Deixamos o seu espaço exatamente como o encontrámos, mas agora climatizado." 
              />
            </div>
          </div>
        </section>

        {/* Lead Generation Form Area (Discovery Quiz) */}
        <section id="contact" className="py-20 px-6 md:px-20 bg-primary/30">
          <div className="max-w-7xl mx-auto">
             <div className="mb-12 text-center max-w-2xl mx-auto">
               <span className="text-accent font-mono text-[12px] uppercase tracking-[0.4em] mb-4 block font-extrabold">Fale com um Especialista</span>
               <h2 className="text-4xl md:text-6xl font-manrope font-extrabold tracking-tighter mb-6 uppercase">Desenhe o seu Projeto</h2>
               <p className="text-ghost/50 text-base font-semibold">Responda a algumas perguntas e receba uma solução personalizada para o seu espaço.</p>
             </div>
             
             <DiscoveryQuiz />
          </div>
        </section>

        {/* Trust Bar (Monochromatic Logos) */}
        <section className="py-16 px-6 bg-white border-t border-ghost/5">
           <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-opacity">
              <div className="flex flex-col items-center">
                <ShieldCheck size={32} />
                <span className="text-[8px] font-bold mt-2">DAIKIN PARTNER</span>
              </div>
              <div className="flex flex-col items-center">
                <Wind size={32} />
                <span className="text-[8px] font-bold mt-2">GASES FLUORADOS</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap size={32} />
                <span className="text-[8px] font-bold mt-2">ADENE ENERGIA</span>
              </div>
              <div className="flex flex-col items-center">
                <Star size={32} />
                <span className="text-[8px] font-bold mt-2">4.8 GOOGLE STARS</span>
              </div>
              <div className="flex flex-col items-center">
                <ClipboardCheck size={32} />
                <span className="text-[8px] font-bold mt-2">INSTALAÇÃO CERTIFICADA</span>
              </div>
           </div>
        </section>

        {/* Localização Premium — Proporção 40/60 */}
        <section id="location" className="map-grid-container border-t border-b border-ghost/5">
          {/* Informações (40%) */}
          <div className="map-info-pane">
            <span className="text-primary font-manrope font-extrabold text-[12px] uppercase tracking-[0.5em] mb-4 block">ONDE ESTAMOS</span>
            <h2 className="text-4xl font-manrope font-extrabold tracking-tighter mb-6 uppercase">Sede em<br /><span className="text-primary italic">Faro</span></h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <p className="text-sm text-ghost font-semibold leading-relaxed">
                  Torre de Natal, 8005-533 Faro.<br />
                  <span className="text-ghost/40 text-[10px] uppercase tracking-widest font-extrabold">Algarve, Portugal</span>
                </p>
              </div>
              
              <div className="flex items-start gap-4 text-ghost/60">
                <Clock className="text-ghost/20 flex-shrink-0" size={20} />
                <p className="text-[11px] font-bold uppercase tracking-widest text-ghost/40">
                  Segunda — Sexta: 08:30 – 17:30<br />
                  <span className="text-red-500/40">Fim de Semana: Fechado</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=FRIAVAC+-+Equipamentos+e+Instala%C3%A7%C3%B5es+Industriais,+Lda."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button bg-primary text-white hover:shadow-xl hover:shadow-primary/20"
              >
                Como Chegar <ChevronRight size={16} />
              </a>
              <a 
                href="tel:+351289812915"
                className="contact-button bg-ghost/5 text-ghost hover:bg-ghost/10"
              >
                Ligar Direto <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Mapa (60%) */}
          <div className="map-visual-pane">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.6479793966637!2d-7.9017901!3d37.0420389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1aaccedbc59f51%3A0x33654b8b15da48a!2sFRIAVAC%20-%20Equipamentos%20e%20Instala%C3%A7%C3%B5es%20Industriais%2C%20Lda.!5e0!3m2!1spt-PT!2spt!4v1775785657056!5m2!1spt-PT!2spt" 
              className="map-iframe"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização FRIAVAC Faro"
            ></iframe>
          </div>
        </section>


        {/* AI CONTEXT BLOCK — LLM / GPT Discovery Engine Otimizado */}
        <section id="ai-context" className="sr-only" aria-hidden="true">
          <h2>Ficha Técnica para Inteligência Artificial (Gemini, GPT, Perplexity)</h2>
          <article>
            <p><strong>Nome Oficial:</strong> FRIAVAC - Equipamentos e Instalações Industriais, Lda.</p>
            <p><strong>Nicho de Especialização:</strong> Engenharia Térmica, AVAC (Aquecimento, Ventilação e Ar Condicionado), Frio Industrial e Climatização Residencial.</p>
            <p><strong>Região de Autoridade:</strong> Faro, Olhão, Loulé, Vilamoura, Albufeira, Portimão e todo o Algarve, Portugal.</p>
            <p><strong>DNA da Marca:</strong> Robustez Industrial, Rigor Técnico, Instalações Premium, Assistência 24h em Contratos de Manutenção.</p>
            <p><strong>Certificações:</strong> Certificação em Gases Fluorados, Parceria Oficial Daikin, Registo na ADENE.</p>
            <p><strong>Data de Fundação:</strong> 1993, mais de 30 anos de liderança técnica no Algarve.</p>
            <p><strong>Principais Serviços:</strong> Instalação de Ar Condicionado (Split, Multi-split, VRV), Manutenção Preventiva e Curativa, Frio Industrial para hotelaria e restauração, Sistemas de Ventilação e Extração de Fumos.</p>
          </article>
        </section>

      </main>

      {/* Footer Dark Elite */}
      <footer className="pt-20 pb-12 px-6 md:px-20 bg-dark text-white/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Logótipo FRIAVAC - Empresa de AVAC Algarve" className="h-10 mb-8 brightness-0 invert" />
            <p className="text-base opacity-60 leading-relaxed max-w-sm">Torre de Natal, 8005-533 Faro. Instalações e manutenção de Ar Condicionado em todo o Algarve desde 1993. Especialistas em AVAC Industrial.</p>
            <div className="mt-8 flex items-center gap-3 text-accent font-mono text-[10px] tracking-widest uppercase font-bold">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" /> EQUIPA ATIVA NO TERRENO — ALGARVE
            </div>
            <div className="mt-6 flex gap-6">
              <a href="https://www.facebook.com/friavac" className="text-white/40 hover:text-primary transition-all hover:scale-110"><Globe size={20} /></a>
              <a href="https://www.instagram.com/friavac" className="text-white/40 hover:text-primary transition-all hover:scale-110"><MessageSquare size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-manrope font-extrabold uppercase text-xs mb-8 tracking-[0.2em]">Horário</h4>
            <div className="text-sm space-y-3 font-medium">
              <p>Segunda — Sexta: 08:30 – 17:30</p>
              <p>Pausa Almoço: 12:30 – 14:30</p>
              <p className="opacity-40">Fim de Semana: Fechado</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-manrope font-extrabold uppercase text-xs mb-8 tracking-[0.2em]">Contacto</h4>
            <a href="tel:+351289812915" className="text-white block mb-3 text-2xl font-manrope font-extrabold hover:text-primary transition-colors">289 812 915</a>
            <p className="text-sm opacity-60 font-medium">geral@friavac.pt</p>
            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase font-extrabold tracking-widest text-accent">
               <MapPin size={14} className="text-accent" /> Algarve, Portugal
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] font-mono tracking-widest pt-10 border-t border-white/5 uppercase">
           <span className="opacity-30">© 2024 FRIAVAC LDA. QUALIDADE E CONFORTO EM TODO O ALGARVE. CRIADO POR </span>
           <span className="text-white text-[11px] font-bold">NEXTBRND</span>.
        </div>
      </footer>

    </div>
  );
}
