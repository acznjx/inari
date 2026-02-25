"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SectionProps {
  lang: string;
}

export default function Footer({ lang }: SectionProps) {
  
  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      description: "Elevando o padrão de interfaces digitais através de design estratégico e tecnologia de alta performance.",
      navTitle: "Navegação",
      navItems: [
        { label: "Portfólio", href: "#projetos" },
        { label: "Serviços", href: "#servicos" },
        { label: "Contato", href: "#contato" }
      ],
      ctaTitle: "VAMOS \n CRIAR?",
      ctaButton: "Conversar agora",
      rights: "Todos os direitos reservados",
      status: "Disponível para novos projetos"
    },
    EN: {
      description: "Elevating the standard of digital interfaces through strategic design and high-performance technology.",
      navTitle: "Navigation",
      navItems: [
        { label: "Portfolio", href: "#projetos" },
        { label: "Services", href: "#servicos" },
        { label: "Contact", href: "#contato" }
      ],
      ctaTitle: "LET'S \n CREATE?",
      ctaButton: "Let's talk",
      rights: "All rights reserved",
      status: "Available for new projects"
    }
  };

  const t = content[lang as keyof typeof content];

  return (
    <footer 
      id="inari-footer"
      className="relative w-full bg-white dark:bg-[#0f0f0f] pt-20 pb-8 px-6 transition-colors duration-500"
    >
      {/* SECTION: BOTÃO VOLTAR AO TOPO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <Link href="#top" className="group flex items-center justify-center">
          <div className="w-12 h-12 bg-[#E89624] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(232,150,36,0.4)] group-hover:scale-110 transition-all duration-300">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white group-hover:-translate-y-1 transition-transform"
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="square" 
              strokeLinejoin="miter"
            >
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* SECTION: BRANDING & SOCIAL */}
          <div className="md:col-span-5 space-y-6">
            <motion.div 
              initial={{ borderColor: "rgb(228 228 231 / 0.1)" }}
              whileInView={{ borderColor: "#E89624" }}
              viewport={{ once: false, amount: 0.5 }}
              className="border-l-4 pl-6 transition-colors duration-1000 ease-in-out"
            >
              <Link href="/" className="text-4xl font-black tracking-tighter text-black dark:text-white uppercase italic leading-none">
                INARI<span className="text-[#E89624]">GROUP</span>
              </Link>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                {t.description}
              </p>
            </motion.div>
            
            <div className="flex gap-5 pl-7">
              <Link href="#" className="text-zinc-400 hover:text-[#E89624] transition-colors"><FaInstagram size={20} /></Link>
              <Link href="#" className="text-zinc-400 hover:text-[#E89624] transition-colors"><FaLinkedinIn size={20} /></Link>
              <Link href="https://wa.me/5551992379704" className="text-zinc-400 hover:text-[#E89624] transition-colors"><FaWhatsapp size={20} /></Link>
            </div>
          </div>

          {/* SECTION: NAVEGAÇÃO */}
          <div className="md:col-span-3 flex flex-col gap-4 md:pt-2">
            <span className="text-[10px] font-bold text-[#E89624] uppercase tracking-[0.2em]">{t.navTitle}</span>
            <nav className="grid grid-cols-1 gap-2 text-sm font-bold uppercase tracking-tight text-zinc-600 dark:text-zinc-400">
              {t.navItems.map((item, i) => (
                <Link key={i} href={item.href} className="hover:text-[#E89624] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SECTION: CTA CARD (LARANJA) */}
          <div className="md:col-span-4 relative group">
            <div className="bg-[#E89624] rounded-3xl p-8 overflow-hidden min-h-55 flex flex-col justify-start shadow-[0_20px_40px_rgba(232,150,36,0.15)] relative">
              <div className="relative z-10 space-y-4">
                <h4 className="text-2xl font-black text-white uppercase leading-none italic whitespace-pre-line">
                  {t.ctaTitle}
                </h4>
                <Link 
                  href="https://wa.me/5551992379704" 
                  className="inline-block text-[10px] font-black uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-xl hover:bg-white hover:text-black transition-all"
                >
                  {t.ctaButton}
                </Link>
              </div>
              
              <div className="absolute right-2 bottom-2 w-32 md:w-36 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="https://i.imgur.com/7hajIpR.png" 
                  alt="Inari Mascot" 
                  width={150} 
                  height={150} 
                  className="object-contain drop-shadow-[-5px_5px_10px_rgba(0,0,0,0.2)]" 
                  unoptimized 
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: FOOTER BOTTOM (COPYRIGHT) */}
        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Inari Group</span>
            <span className="hidden md:block opacity-30">•</span>
            <span>{t.rights}</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="w-1.5 h-1.5 bg-[#E89624] rounded-full animate-pulse"></div>
            <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">
              {t.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}