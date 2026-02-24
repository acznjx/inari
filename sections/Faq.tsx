"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

interface SectionProps {
  lang: string;
}

export default function Faq({ lang }: SectionProps) {
  const [aberto, setAberto] = useState<number | null>(null);
  const containerRef = useRef(null);

  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      title: "DÚVIDAS",
      subtitle: "FREQUENTES",
      ghostText: "PRECISÃO EM SUPORTE TÉCNICO",
      items: [
        {
          pergunta: "Em quanto tempo meu projeto ficará pronto?",
          resposta: "Para Landing Pages, o prazo médio é de 2 a 4 dias úteis. Sites mais completos costumam levar de 7 a 15 dias. O tempo exato depende dos detalhes do seu projeto, mas priorizamos agilidade sem abrir mão da qualidade."
        },
        {
          pergunta: "Eu mesmo poderei alterar as informações do site?",
          resposta: "Para garantir que o design e a performance do seu site continuem impecáveis, nós cuidamos das atualizações técnicas para você. Assim, você não precisa se preocupar com códigos e tem a certeza de que tudo funcionará perfeitamente."
        },
        {
          pergunta: "O site funciona bem em celulares e tablets?",
          resposta: "Com certeza! Desenvolvemos cada site com foco total na experiência móvel. Seu cliente terá uma navegação fluida e agradável, não importa se está usando um smartphone, tablet ou computador."
        },
        {
          pergunta: "Terei auxílio após a entrega do projeto?",
          resposta: "Sim, estaremos ao seu lado! Oferecemos 30 dias de suporte gratuito para ajustes iniciais. Após esse período, continuamos disponíveis para evoluções e melhorias através de uma consultoria pontual por alteração."
        }
      ]
    },
    EN: {
      title: "FREQUENTLY",
      subtitle: "ASKED QUESTIONS",
      ghostText: "TECHNICAL SUPPORT PRECISION",
      items: [
        {
          pergunta: "How long will it take for my project to be ready?",
          resposta: "For Landing Pages, the average time is 2 to 4 business days. Full websites usually take 7 to 15 days. The exact timeframe depends on project details, but we prioritize speed without compromising quality."
        },
        {
          pergunta: "Can I update the website content myself?",
          resposta: "To ensure your site's design and performance remain flawless, we handle the technical updates for you. This way, you don't have to worry about code and can rest assured everything works perfectly."
        },
        {
          pergunta: "Does the website work well on phones and tablets?",
          resposta: "Absolutely! We build every site with a total focus on the mobile experience. Your customers will enjoy smooth navigation whether they are on a smartphone, tablet, or desktop."
        },
        {
          pergunta: "Will I have support after the project is delivered?",
          resposta: "Yes, we'll be right there with you! We offer 30 days of free support for initial adjustments. After that, we remain available for updates and improvements through a per-request consultancy."
        }
      ]
    }
  };

  const t = content[lang as keyof typeof content];
  
  // ---------------------------------------------------------
  // LÓGICA DE ANIMAÇÃO E SCROLL
  // ---------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1.2, 1]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.2, 0.5], [0, 0.8, 1]);
  const textMove = useTransform(smoothProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={containerRef}
      id="faq" 
      className="relative w-full bg-white dark:bg-[#050505] px-0 pb-32 transition-colors duration-500 overflow-hidden"
    >
      
      {/* SECTION: VISUAL HEADER (IMAGEM + GHOST TEXT) */}
      <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-white dark:bg-black flex items-center justify-center">
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }} 
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop" 
            alt="Technical Support"
            fill
            priority
            className="object-cover grayscale contrast-125 brightness-125 dark:brightness-50"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent dark:from-[#050505] dark:via-transparent dark:to-black/80" />
        
        <motion.span 
          style={{ x: textMove }}
          className="absolute text-[12vw] font-black text-zinc-100 dark:text-white/3 uppercase italic whitespace-nowrap pointer-events-none select-none"
        >
          {t.ghostText}
        </motion.span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 -mt-16 md:-mt-24">
        
        {/* SECTION: HEADER TITLES (PADRONIZADO) */}
        <div className="relative mb-24">
          <motion.div 
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute left-0 top-0 w-1 h-full z-20 bg-[#E89624] shadow-[0_0_20px_rgba(232,150,36,0.4)]"
          />
          
          <div className="pl-10">
            <h2 className="font-title text-5xl md:text-8xl text-zinc-950 dark:text-white tracking-tighter uppercase italic leading-[0.85]">
              {t.title} <br />
              <span className="font-body font-light not-italic opacity-40 dark:opacity-10 text-4xl md:text-6xl text-zinc-400">
                {t.subtitle}
              </span>
            </h2>
          </div>
        </div>

        {/* SECTION: ACCORDION LIST */}
        <div className="max-w-4xl ml-auto space-y-6">
          {t.items.map((item, index) => (
            <motion.div 
              key={index}
              className={`group relative transition-all duration-500 rounded-lg ${
                aberto === index 
                ? 'bg-zinc-50 dark:bg-zinc-900/40 translate-x-2' 
                : 'bg-transparent border-b border-zinc-100 dark:border-white/5 hover:bg-zinc-50/50 dark:hover:bg-white/2'
              }`}
            >
              {/* ACCORDION TRIGGER */}
              <button
                onClick={() => setAberto(aberto === index ? null : index)}
                className="w-full py-10 px-6 flex items-center justify-between text-left relative z-10"
              >
                <div className="flex flex-col">
                   <span className="font-mono text-[10px] text-[#E89624] mb-2 font-bold uppercase tracking-widest">Step.0{index + 1}</span>
                   <span className={`text-xl md:text-4xl font-black uppercase italic tracking-tighter transition-all duration-500 ${
                     aberto === index ? 'text-zinc-950 dark:text-white' : 'text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-950 dark:group-hover:text-zinc-300'
                   }`}>
                     {item.pergunta}
                   </span>
                </div>
                
                <div className={`transition-all duration-500 p-4 rounded-full ${
                  aberto === index 
                  ? 'bg-[#E89624] text-white dark:text-black rotate-45 scale-125 shadow-lg shadow-[#E89624]/20' 
                  : 'bg-zinc-100 dark:bg-zinc-900 text-[#E89624]'
                }`}>
                  <FaPlus size={16} />
                </div>
              </button>

              {/* ACCORDION CONTENT */}
              <AnimatePresence>
                {aberto === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-6 pb-12 ml-4 md:ml-20">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-tight font-medium text-lg md:text-2xl max-w-3xl border-l-4 border-[#E89624] pl-8 italic">
                        {item.resposta}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="hidden dark:block absolute top-1/2 left-0 w-125 h-125 bg-[#E89624]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
    </section>
  );
}