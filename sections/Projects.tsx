"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Link from 'next/link';

interface SectionProps {
  lang: string;
}

export default function Projetos({ lang }: SectionProps) {
  const containerRef = useRef(null);

  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      title: "PROJETOS",
      subtitle: "SELECIONADOS",
      visit: "VISITAR",
      items: [
        { id: "01", titulo: "Crochê Studio", link: "https://crochestudio.vercel.app/" },
        { id: "02", titulo: "Tork Motos", link: "https://tork-motos.vercel.app/" }
      ]
    },
    EN: {
      title: "SELECTED",
      subtitle: "PROJECTS",
      visit: "VISIT",
      items: [
        { id: "01", titulo: "Crochê Studio", link: "https://crochestudio.vercel.app/" },
        { id: "02", titulo: "Tork Motos", link: "https://tork-motos.vercel.app/" }
      ]
    }
  };

  const t = content[lang as keyof typeof content];
  
  // ---------------------------------------------------------
  // LÓGICA DE SCROLL (INDICADOR LATERAL)
  // ---------------------------------------------------------
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start end", "end start"] 
  });

  const scaleY = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="projetos" 
      className="relative w-full bg-[#050505] py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* SECTION: HEADER (PADRONIZADO COM SOLUÇÕES) */}
        <div className="relative mb-16 md:mb-24">
          <motion.div 
            style={{ scaleY: scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-1 h-full z-20 bg-[#E89624]"
          />
          
          <div className="pl-10">
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-title text-4xl md:text-6xl text-white tracking-tighter uppercase italic leading-[0.9]">
                {t.title} <br />
                <span className="font-body font-light not-italic opacity-20 text-3xl md:text-5xl tracking-normal">
                  {t.subtitle}
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* SECTION: LISTA DE PROJETOS */}
        <div className="flex flex-col border-t border-white/10">
          {t.items.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              target="_blank" 
              className="group relative flex items-center justify-between py-8 md:py-14 border-b border-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 md:gap-10 relative z-10">
                {/* ID Discreto */}
                <span className="font-mono text-[10px] md:text-xs text-zinc-600 group-hover:text-[#E89624] transition-colors">
                  {item.id}
                </span>
                
                {/* Título do Projeto */}
                <h3 className="text-2xl md:text-6xl font-title text-white uppercase italic tracking-tighter group-hover:text-[#E89624] transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-4">
                  {item.titulo}
                </h3>
              </div>

              {/* Gatilho de Link Externo */}
              <div className="flex items-center gap-4 relative z-10">
                <span className="hidden md:block font-mono text-[9px] tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors uppercase">
                  {t.visit}
                </span>
                
                <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-[#E89624] group-hover:border-[#E89624] transition-all duration-500 bg-white/5 md:bg-transparent">
                  <FaArrowRight size={14} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>

              {/* Decorador: Linha de preenchimento (Desktop Only) */}
              <div className="hidden md:block absolute left-0 bottom-0 w-full h-px bg-[#E89624] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}