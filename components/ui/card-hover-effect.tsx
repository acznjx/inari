"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    subtitulo?: string;
    index?: string;
    cta?: string;
  }[];
  className?: string;
}) => {
  // Estado para controlar qual card está com hover
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 py-10 gap-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* ANIMAÇÃO DE FUNDO QUE PERSEGUE O MOUSE */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand/[0.12] dark:bg-brand/[0.2] block rounded-[2.5rem] z-0"
                layoutId="hoverBackgroundSolucoes" // ID único para evitar conflitos
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          {/* CONTEÚDO DO CARD */}
          <Card>
            <div className="flex items-center justify-between mb-8">
              <span className="font-body text-2xl font-light text-brand opacity-40 italic">
                {item.index}
              </span>
              <h4 className="font-sub text-[10px] font-black text-brand uppercase tracking-[0.4em]">
                {item.subtitulo}
              </h4>
            </div>

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            {/* FOOTER ESTILO PROJETOS */}
            <div className="flex items-center justify-between w-full pt-6 mt-6 border-t border-content/10 font-sub text-[11px] font-black uppercase tracking-[0.3em] text-content">
              <span className="group-hover:text-brand transition-colors duration-300">
                {item.cta || "Solicitar orçamento"}
              </span>
              <div className="w-10 h-10 rounded-full bg-content text-surface flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-md">
                <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2.5rem] h-full w-full p-8 md:p-10 overflow-hidden bg-content/5 border border-content/10 group-hover:border-brand/40 transition-all duration-500 relative z-10",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-title text-3xl md:text-4xl text-content uppercase italic tracking-tighter group-hover:text-brand transition-colors duration-500", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 font-body text-content opacity-60 text-base md:text-lg leading-relaxed font-light max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};