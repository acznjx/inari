"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  
  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      titleTop: "AUTORIDADE DIGITAL",
      titleMid: "ESTRATÉGICA PARA",
      titleBottom: "BRASILEIROS NOS EUA",
      description: (
        <>
          Ajudamos empreendedores brasileiros a se posicionarem com autoridade no mercado americano através de <span className="underline decoration-[#E89624] decoration-4 underline-offset-8">design de alto padrão</span> e conversão.
        </>
      ),
      btnPrimary: "Ver Projetos",
      btnSecondary: "Agendar Conversa",
      scroll: "Scroll"
    },
    EN: {
      titleTop: "DIGITAL AUTHORITY",
      titleMid: "STRATEGIC FOR",
      titleBottom: "BRAZILIANS IN THE US",
      description: (
        <>
          We help Brazilian entrepreneurs position themselves with authority in the US market through <span className="underline decoration-[#E89624] decoration-4 underline-offset-8">high-end design</span> and conversion.
        </>
      ),
      btnPrimary: "View Projects",
      btnSecondary: "Schedule a Call",
      scroll: "Scroll"
    }
  };

  const t = content[lang as keyof typeof content];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#050505] transition-colors duration-500">
      
      {/* SECTION: BACKGROUND & EFFECTS */}
      <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0">
        <div className="absolute inset-0 z-1 tech-grid pointer-events-none opacity-30" />
      </BackgroundGradientAnimation>

      {/* SECTION: MAIN CONTENT */}
      <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-6 pointer-events-none">
        <div className="h-8 md:h-16" /> 

        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              {/* TÍTULO PRINCIPAL */}
              <h1 className="text-white text-[11vw] md:text-[100px] font-black tracking-tighter leading-[0.85] uppercase italic select-none">
                {t.titleTop} <br />
                <span className="font-light not-italic text-zinc-500 block my-2 text-[5vw] md:text-[45px]">
                  {t.titleMid}
                </span>
                <span className="text-[#E89624] drop-shadow-[0_0_30px_rgba(232,150,36,0.3)]">
                  {t.titleBottom}
                </span>
              </h1>
              
              {/* DESCRIÇÃO */}
              <motion.p className="mt-6 md:mt-10 text-zinc-300 text-sm md:text-xl max-w-2xl mx-auto font-bold leading-relaxed px-4">
                {t.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECTION: CTA BUTTONS */}
        <motion.div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-center gap-4 md:gap-6 pointer-events-auto w-full sm:w-auto">
          
          <a href="#projetos" className="group w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-white text-black rounded-2xl text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {t.btnPrimary}
              </motion.span>
            </AnimatePresence>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <a href="#contato" className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 border-2 border-white text-white rounded-2xl text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {t.btnSecondary}
              </motion.span>
            </AnimatePresence>
          </a>

        </motion.div>

        <div className="h-20 md:h-28" />
      </div>

      {/* SECTION: SCROLL INDICATOR */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center items-center pointer-events-none opacity-40">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <AnimatePresence mode="wait">
            <motion.span 
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white"
            >
              {t.scroll}
            </motion.span>
          </AnimatePresence>
          
          {/* BARRA DE SCROLL - CORREÇÃO TAILWIND CANONICAL CLASS */}
          <div className="w-px h-10 md:h-14 bg-linear-to-b from-[#E89624] to-transparent" />
        </div>
      </div>

    </section>
  );
}