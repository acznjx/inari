"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";

interface SectionProps {
  lang: string;
}

export default function Contato({ lang }: SectionProps) {
  const containerRef = useRef(null);

  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      title: "VAMOS",
      subtitle: "CONVERSAR",
      description: "Transformamos ideias em interfaces digitais de alta performance. Conte-nos sobre o seu projeto e vamos construir algo incrível juntos.",
      cta: "Iniciar um projeto",
      socialTitle: "Social",
      emailTitle: "E-mail"
    },
    EN: {
      title: "LET'S",
      subtitle: "TALK",
      description: "We transform ideas into high-performance digital interfaces. Tell us about your project and let's build something amazing together.",
      cta: "Start a project",
      socialTitle: "Social",
      emailTitle: "E-mail"
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
      id="contato" 
      className="relative w-full min-h-screen flex items-center bg-[#050505] px-6 py-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* SECTION: HEADER (PADRONIZADO) */}
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

        {/* SECTION: CONTEÚDO PRINCIPAL (GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pl-2 md:pl-10">
          
          {/* LADO ESQUERDO: TEXTO E CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
              {t.description}
            </p>

            <Link 
              href="https://wa.me/5551992379704" 
              target="_blank"
              className="group inline-flex items-center gap-6 text-[10px] font-black text-white uppercase tracking-[0.4em] transition-all"
            >
              <span className="border-b border-[#E89624] pb-2 group-hover:text-[#E89624] transition-colors">
                {t.cta}
              </span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E89624] group-hover:border-[#E89624] transition-all duration-500">
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform text-white" size={16} />
              </div>
            </Link>
          </motion.div>

          {/* LADO DIREITO: INFOS DE CONTATO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-16"
          >
            {/* EMAIL WRAPPER */}
            <div>
              <h4 className="text-[10px] font-bold text-[#E89624] uppercase tracking-[0.3em] mb-4 italic">
                {t.emailTitle}
              </h4>
              <p className="text-xl md:text-2xl font-title text-zinc-200 break-all tracking-tight uppercase italic group hover:text-[#E89624] transition-colors cursor-pointer">
                inaricorporate@gmail.com
              </p>
            </div>

            {/* SOCIAL MEDIA WRAPPER */}
            <div>
              <h4 className="text-[10px] font-bold text-[#E89624] uppercase tracking-[0.3em] mb-8 italic">
                {t.socialTitle}
              </h4>
              <div className="flex gap-8">
                {[ 
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaLinkedinIn />, href: "#" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/5551992379704" }
                ].map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    className="text-xl text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}