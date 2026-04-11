import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const statsData = [
  { label: "Anos de História", value: 30, suffix: "+", icon: Calendar, desc: "Desde 1993 no Algarve" },
  { label: "Intervenções", value: 5000, suffix: "+", icon: CheckCircle2, desc: "Soluções Técnicas Eficazes" },
  { label: "Manutenção Ativa", value: 200, suffix: "+", icon: ShieldCheck, desc: "Clientes de Longa Data" },
  { label: "Gestão F-Gases", value: 100, suffix: "%", icon: Award, desc: "Certificação APA & ADENE" }
];

const EliteStatsSection = () => {
  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group p-8 bg-white rounded-[2rem] border border-ghost/5 hover:border-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Icon size={28} />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="stat-number text-5xl font-manrope font-extrabold text-ghost" data-target={stat.value}>0</span>
                  <span className="text-3xl font-manrope font-extrabold text-accent">{stat.suffix}</span>
                </div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-ghost/40 mb-3">{stat.label}</div>
                <p className="text-sm font-medium text-ghost/30 leading-tight">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EliteStatsSection;
