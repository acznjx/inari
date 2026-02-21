"use client";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiFramer, SiNodedotjs } from "react-icons/si";
import { useRef } from "react";

interface SectionProps {
  lang: string;
}

const tecnologias = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Framer", icon: <SiFramer /> },
];

const doubleTechs = [...tecnologias, ...tecnologias];

export default function TechStack({ lang }: SectionProps) {
  const containerRef = useRef(null);
  
  const content = {
    PT: { title: "TECNOLOGIAS", subtitle: "UTILIZADAS" },
    EN: { title: "TECH", subtitle: "STACK" }
  };

  const t = content[lang as keyof typeof content];

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
      id="stacks" 
      className="relative w-full bg-[#050505] py-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 mb-16 md:mb-24 px-6">
        
        {/* HEADER PADRONIZADO (IGUAL AO SERVICES) */}
        <div className="relative">
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
      </div>

      {/* ESTEIRA INFINITA */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {doubleTechs.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center min-w-[140px] md:min-w-[200px] aspect-square bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-[#E89624]/40 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl text-white/20 group-hover:text-[#E89624] transition-all duration-500 transform group-hover:scale-110">
                {tech.icon}
              </div>
              
              <span className="mt-4 font-sub text-[9px] font-black text-white/40 group-hover:text-white uppercase tracking-[0.3em] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* MÁSCARAS DE GRADIENTE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>
    </section>
  );
}