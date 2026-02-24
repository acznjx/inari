"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

// ---------------------------------------------------------
// COMPONENTE: BACKGROUND GRADIENT ANIMATION
// ---------------------------------------------------------
export const BackgroundGradientAnimation = ({
  interactive = true,
  containerClassName,
  children,
}: {
  interactive?: boolean;
  containerClassName?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------
  // LÓGICA DE INTERAÇÃO (MOUSE TRACKING)
  // ---------------------------------------------------------
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      containerRef.current.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      containerRef.current.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full absolute inset-0 overflow-hidden transition-all duration-500",
        containerClassName
      )}
      style={{
        opacity: "var(--hero-gradient-opacity)",
        "--orange": "var(--accent-rgb)",
        "--yellow": "var(--yellow-rgb)",
        "--size": "65%", 
      } as React.CSSProperties}
    >
      {/* CONTAINER DOS ORBES GRADIENTES */}
      <div className="gradients-container h-full w-full blur-[130px] absolute inset-0 overflow-hidden">
        
        {/* ORBES COM TRAJETÓRIAS ALEATÓRIAS (ANIMADOS VIA CSS) */}
        <div className="absolute [background:radial-gradient(circle_at_center,rgba(var(--orange),0.8)_0,rgba(var(--orange),0)_50%)] w-(--size) h-(--size) animate-first opacity-90" />
        <div className="absolute [background:radial-gradient(circle_at_center,rgba(var(--yellow),0.7)_0,rgba(var(--yellow),0)_50%)] w-(--size) h-(--size) animate-second opacity-70" />
        <div className="absolute [background:radial-gradient(circle_at_center,rgba(var(--orange),0.8)_0,rgba(var(--orange),0)_50%)] w-(--size) h-(--size) animate-third opacity-80" />
        <div className="absolute [background:radial-gradient(circle_at_center,rgba(var(--yellow),0.6)_0,rgba(var(--yellow),0)_50%)] w-(--size) h-(--size) animate-fourth opacity-60" />
        <div className="absolute [background:radial-gradient(circle_at_center,rgba(var(--orange),0.7)_0,rgba(var(--orange),0)_50%)] w-(--size) h-(--size) animate-fifth opacity-75" />

        {/* ORBE INTERATIVO (SEGUE O MOUSE) */}
        {interactive && (
          <div
            style={{
              transform: `translate3d(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%), 0)`,
              willChange: "transform",
            }}
            className="absolute [background:radial-gradient(circle_at_center,rgba(var(--orange),0.55)_0,rgba(var(--orange),0)_50%)] w-[900px] h-[900px] top-0 left-0 opacity-100 transition-transform duration-0 ease-out"
          />
        )}
      </div>

      {/* RENDERIZAÇÃO DOS FILHOS (CONTEÚDO DO HERO) */}
      {children}
    </div>
  );
};