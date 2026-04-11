import React, { useState, useRef } from 'react';
import { 
  Home, Building2, Factory, Wrench, Zap, Settings, 
  Calendar, CheckCircle2, ArrowRight, ArrowLeft, Send,
  User, Phone, Mail, MapPin, Sparkles, Wind, Thermometer
} from 'lucide-react';
import { gsap } from 'gsap';

const DiscoveryQuiz = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    interesse: '',
    perfil: '',
    especificacao: '',
    contacto: { name: '', phone: '', email: '', localidade: '' }
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const steps = [
    {
      id: 'interesse',
      title: 'Área de Interesse',
      subtitle: 'Qual o sistema térmico que pretende abordar?',
      options: [
        { id: 'ac', label: 'Ar Condicionado', icon: Wind, desc: 'Conforto Residencial e Comercial' },
        { id: 'frio', label: 'Frio Industrial', icon: Factory, desc: 'Unidades de Produção e Logística' },
        { id: 'vent', label: 'Ventilação', icon: Wind, desc: 'Extração e Renovação de Ar' },
        { id: 'aq', label: 'Aquecimento', icon: Thermometer, desc: 'Sistemas Térmicos de Queima' },
        { id: 'mn', label: 'Manutenção', icon: Wrench, desc: 'Assistência Técnica Especializada' }
      ]
    },
    {
      id: 'perfil',
      title: 'Perfil do Projeto',
      subtitle: 'Em que tipo de ambiente será a intervenção?',
      options: [
        { id: 'res', label: 'Residencial', icon: Home, desc: 'Moradias e Apartamentos' },
        { id: 'com', label: 'Comercial', icon: Building2, desc: 'Lojas, Escritórios e Serviços' },
        { id: 'ind', label: 'Industrial / Hotelaria', icon: Factory, desc: 'Unidades Industriais e Hotéis' }
      ]
    },
    {
      id: 'especificacao',
      title: 'Especificação Técnica',
      subtitle: 'Qual a fase atual da sua necessidade?',
      options: [
        { id: 'novo', label: 'Novo Projeto', icon: Sparkles, desc: 'Instalação de raiz e dimensionamento' },
        { id: 'sub', label: 'Substituição', icon: Settings, desc: 'Upgrade de sistema existente' },
        { id: 'rep', label: 'Reparação Urgente', icon: Zap, desc: 'Avaria ou Assistência Imediata' }
      ]
    }
  ];

  const handleNext = (value) => {
    const currentStepId = steps[step].id;
    setFormData(prev => ({ ...prev, [currentStepId]: value }));

    gsap.to(contentRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setStep(prev => prev + 1);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    });
  };

  const handleBack = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.3,
      onComplete: () => {
        setStep(prev => prev - 1);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Lead Elite Qualificado:', formData);
  };

  const progress = ((step + 1) / (steps.length + 1)) * 100;

  if (isSubmitted) {
    return (
      <div className="p-16 text-center bg-white rounded-[3rem] shadow-2xl border border-primary/5">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-10">
          <Sparkles size={48} />
        </div>
        <h2 className="text-4xl font-manrope font-extrabold mb-5 tracking-tighter">Pedido Qualificado!</h2>
        <p className="text-ghost/60 mb-10 leading-relaxed max-w-md mx-auto font-medium">
          Obrigado, <span className="text-primary font-bold">{formData.contacto.name}</span>. A nossa equipa técnica foi notificada do seu interesse em <span className="text-primary font-bold">{formData.interesse}</span> e entrará em contacto em menos de 24h.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-12 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
        >
          Finalizar Sessão
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="max-w-2xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-ghost/5 overflow-hidden flex flex-col md:flex-row min-h-[380px]">
      {/* Sidebar Info Elite */}
      <div className="md:w-[30%] bg-primary p-6 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
        
        <div className="relative z-10">
          <h2 className="text-2xl font-manrope font-extrabold mb-4 leading-[1.1] text-white">QUALIFICAÇÃO<br />DE PROJETO.</h2>
          <div className="space-y-3 text-white/50 text-[10px] items-start flex flex-col font-bold uppercase tracking-widest">
            <div className={`flex items-center gap-2 transition-colors ${step >= 0 ? 'text-white' : ''}`}>
              <div className={`w-1 h-1 rounded-full ${step >= 0 ? 'bg-white animate-pulse' : 'bg-white/20'}`} />
              <span>Domínio</span>
            </div>
            <div className={`flex items-center gap-2 transition-colors ${step >= 1 ? 'text-white' : ''}`}>
              <div className={`w-1 h-1 rounded-full ${step >= 1 ? 'bg-white animate-pulse' : 'bg-white/20'}`} />
              <span>Ambiente</span>
            </div>
            <div className={`flex items-center gap-2 transition-colors ${step >= 2 ? 'text-white' : ''}`}>
              <div className={`w-1 h-1 rounded-full ${step >= 2 ? 'bg-white animate-pulse' : 'bg-white/20'}`} />
              <span>Urgência</span>
            </div>
            <div className={`flex items-center gap-2 transition-colors ${step >= 3 ? 'text-white' : ''}`}>
              <div className={`w-1 h-1 rounded-full ${step >= 3 ? 'bg-white animate-pulse' : 'bg-white/20'}`} />
              <span>Identidade</span>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="h-1 w-full bg-white/10 rounded-full mb-3">
            <div 
              className="h-full bg-white rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-extrabold">Progresso: {Math.round(progress)}%</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-6 relative bg-[#FAF8F5]">
        <div ref={contentRef} className="h-full flex flex-col">
          {step < steps.length ? (
            <>
              <div className="mb-4">
                <span className="text-primary font-manrope font-extrabold text-[10px] uppercase tracking-widest block mb-1">Passo 0{step + 1}</span>
                <h3 className="text-xl md:text-2xl font-manrope font-extrabold text-ghost tracking-tighter leading-none mb-2">{steps[step].title}</h3>
                <p className="text-ghost/40 text-xs font-medium">{steps[step].subtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-2 flex-1 overflow-y-auto pr-2">
                {steps[step].options.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleNext(option.id)}
                      className="group flex items-center p-3 bg-white border border-ghost/5 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all text-left relative overflow-hidden"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      {Icon && (
                        <div className="w-10 h-10 bg-graphite flex items-center justify-center rounded-xl mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <Icon size={18} />
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-manrope font-extrabold text-ghost leading-tight mb-0.5">{option.label}</div>
                        <div className="text-[10px] text-ghost/40 font-medium">{option.desc}</div>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-primary/20 group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
                    </button>
                  );
                })}
              </div>

              {/* Back Button Quiz — Visibilidade Elite */}
              {step > 0 && (
                <button 
                  type="button"
                  onClick={handleBack}
                  className="mt-6 flex items-center gap-3 text-ghost/50 text-[10px] font-extrabold uppercase tracking-[0.2em] hover:text-primary transition-colors group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 duration-300" /> Retroceder
                </button>
              )}
            </>
          ) : (
            <form onSubmit={handleContactSubmit} className="h-full flex flex-col">
              <div className="mb-4">
                <span className="text-primary font-manrope font-extrabold text-[10px] uppercase tracking-widest block mb-1">Finalização</span>
                <h3 className="text-2xl font-manrope font-extrabold text-ghost tracking-tighter leading-none mb-2">Dados de Contacto</h3>
                <p className="text-ghost/40 text-xs font-medium">Onde podemos enviar o seu estudo técnico qualificado?</p>
              </div>

              <div className="space-y-2 flex-1">
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-ghost/20 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="text" 
                    placeholder="Nome Completo" 
                    value={formData.contacto.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, contacto: { ...prev.contacto, name: e.target.value } }))}
                    className="w-full pl-14 pr-6 py-3 bg-white border border-ghost/5 rounded-2xl focus:border-primary/50 outline-none font-bold text-sm transition-all" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-ghost/20 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      required
                      type="tel" 
                      placeholder="Telefone" 
                      value={formData.contacto.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, contacto: { ...prev.contacto, phone: e.target.value } }))}
                      className="w-full pl-14 pr-6 py-3 bg-white border border-ghost/5 rounded-2xl focus:border-primary/50 outline-none font-bold text-sm transition-all" 
                    />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-ghost/20 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="Localidade / Faro" 
                      value={formData.contacto.localidade}
                      onChange={(e) => setFormData(prev => ({ ...prev, contacto: { ...prev.contacto, localidade: e.target.value } }))}
                      className="w-full pl-14 pr-6 py-3 bg-white border border-ghost/5 rounded-2xl focus:border-primary/50 outline-none font-bold text-sm transition-all" 
                    />
                  </div>
                </div>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-ghost/20 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="email" 
                    placeholder="E-mail profissional" 
                    value={formData.contacto.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, contacto: { ...prev.contacto, email: e.target.value } }))}
                    className="w-full pl-14 pr-6 py-3 bg-white border border-ghost/5 rounded-2xl focus:border-primary/50 outline-none font-bold text-sm transition-all" 
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-2xl font-manrope font-extrabold uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30"
                >
                  Solicitar Estudo Técnico <Send size={18} />
                </button>
                
                <button 
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-3 text-ghost/50 text-[10px] font-extrabold uppercase tracking-[0.2em] hover:text-primary transition-colors group text-left"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 duration-300" /> Retroceder
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryQuiz;
