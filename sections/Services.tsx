"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface SectionProps {
  lang: string;
}

export default function Solucoes({ lang }: SectionProps) {
  const containerRef = useRef(null);

  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      title: "SOLUÇÕES",
      subtitle: "DIGITAIS",
      items: [
        {
          title: "Landing Page",
          subtitulo: "Conversão de Alta Performance",
          description: "Desenvolvimento de páginas únicas focadas em experiência do usuário e otimização de conversão para resultados imediatos.",
          link: "#contato",
          cta: "Solicitar orçamento",
          index: "01"
        },
        {
          title: "Site Completo",
          subtitulo: "Autoridade e Escalabilidade",
          description: "Ecossistemas digitais robustos projetados para consolidar sua presença de marca e dominar os resultados de busca.",
          link: "#contato",
          cta: "Solicitar orçamento",
          index: "02"
        }
      ]
    },
    EN: {
      title: "SOLUTIONS",
      subtitle: "DIGITAL",
      items: [
        {
          title: "Landing Page",
          subtitulo: "High Performance Conversion",
          description: "Development of unique pages focused on user experience and conversion optimization for immediate results.",
          link: "#contato",
          cta: "Get a quote",
          index: "01"
        },
        {
          title: "Full Website",
          subtitulo: "Authority and Scalability",
          description: "Robust digital ecosystems designed to consolidate your brand presence and dominate search results.",
          link: "#contato",
          cta: "Get a quote",
          index: "02"
        }
      ]
    }
  };

  const t = content[lang as keyof typeof content];

  // ---------------------------------------------------------
  // LÓGICA DE SCROLL (INDICADOR LATERAL)
  // ---------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      id="solucoes" 
      className="relative min-h-screen w-full flex items-center bg-[#050505] px-6 py-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* SECTION: HEADER COM INDICADOR DE SCROLL */}
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

        {/* SECTION: GRID DE CARDS (ACETERNITY UI) */}
        <div className="w-full -mt-4">
          <HoverEffect items={t.items} className="md:gap-8" />
        </div>
        
      </div>
    </section>
  );
}