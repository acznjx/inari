"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SectionProps {
  lang: string;
  setLang: (l: string) => void;
}

export default function Privacidade({ lang, setLang }: SectionProps) {
  
  // ---------------------------------------------------------
  // DICIONÁRIO DE CONTEÚDO (PT / EN)
  // ---------------------------------------------------------
  const content = {
    PT: {
      title: "Política de Privacidade e Proteção de Dados",
      subtitle: "NORMATIVA INTERNA DE COMPLIANCE",
      update: "Publicado em: 23 Fev 2026",
      back: "Voltar ao Portal",
      intro: "Este documento rege as diretrizes de tratamento de dados da Inari Technology. Nossa arquitetura de privacidade é desenhada para exceder os requisitos da LGPD (Brasil) e GDPR (Global), garantindo soberania digital aos nossos usuários.",
      sections: [
        { t: "Controladoria de Dados", d: "A Inari Technology atua como única controladora dos dados coletados. As informações são processadas com criptografia de ponta a ponta e nunca são compartilhadas com brokers de dados ou terceiros não autorizados." },
        { t: "Finalidade do Tratamento", d: "O processamento ocorre para: (i) execução de serviços contratados; (ii) comunicações técnicas de projeto; (iii) conformidade com exigências legais e fiscais vigentes no território nacional e internacional." },
        { t: "Arquitetura de Cookies", d: "Utilizamos uma estrutura minimalista de cookies. O usuário possui o direito de revogar o consentimento analítico a qualquer momento, mantendo apenas os cookies técnicos estritamente necessários para a segurança." },
        { t: "Direitos e Governança", d: "Em conformidade com o Art. 18 da LGPD, garantimos livre acesso, portabilidade e exclusão definitiva de registros. Para exercer sua titularidade, entre em contato via: inaricorporate@gmail.com." }
      ]
    },
    EN: {
      title: "Privacy Policy & Data Protection",
      subtitle: "INTERNAL COMPLIANCE NORMATIVE",
      update: "Published: Feb 23, 2026",
      back: "Back to Portal",
      intro: "This document governs Inari Technology's data handling guidelines. Our privacy architecture is designed to exceed LGPD (Brazil) and GDPR (Global) requirements, ensuring digital sovereignty for our users.",
      sections: [
        { t: "Data Controllership", d: "Inari Technology acts as the sole controller of the data collected. Information is processed with end-to-end encryption and is never shared with data brokers or unauthorized third parties." },
        { t: "Purpose of Processing", d: "Processing occurs for: (I) execution of contracted services; (II) technical project communications; (III) compliance with current national and international legal and tax requirements." },
        { t: "Cookie Architecture", d: "We use a minimalist cookie structure. The user has the right to revoke analytical consent at any time, maintaining only the technical cookies strictly necessary for security." },
        { t: "Rights and Governance", d: "In compliance with LGPD and GDPR, we guarantee free access, portability, and permanent deletion of records. To exercise your rights, contact: inaricorporate@gmail.com." }
      ]
    }
  };

  const t = lang === "EN" ? content.EN : content.PT;

  return (
    <div className="min-h-screen font-inter selection:bg-[#E89624]/20 pb-20">
      
      {/* SECTION: NAVIGATION BAR */}
      <nav className="flex justify-between items-center py-6 border-b border-zinc-100 dark:border-white/5 mb-12 sticky top-0 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md z-10 px-4 md:px-0">
        <Link 
          href="/" 
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-[#E89624] transition-all flex items-center gap-2"
        >
          <span className="text-sm">←</span> {t.back}
        </Link>

        {/* LANGUAGE SWITCHER */}
        <div className="flex gap-1 bg-zinc-100 dark:bg-white/5 p-1 rounded-full border border-zinc-200 dark:border-white/10">
          {["PT", "EN"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-[9px] font-black rounded-full transition-all duration-500 ${
                lang === l 
                ? "bg-white dark:bg-white/10 text-[#E89624] shadow-sm" 
                : "text-zinc-400"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* SECTION: MAIN CONTENT WRAPPER */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={lang}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-3xl mx-auto px-4 md:px-0"
        >
          
          {/* CONTENT: HEADER & METADATA */}
          <header className="mb-12">
            <span className="text-[9px] font-bold text-[#E89624] tracking-[0.4em] uppercase block mb-3 italic">
              {t.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl font-bebas font-normal italic uppercase tracking-tight leading-tight text-zinc-900 dark:text-white">
              {t.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-100 dark:border-white/5">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic">
                {t.update}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic">
                Ref: INARI-2026-01
              </span>
            </div>
          </header>

          {/* CONTENT: INTRO STATEMENT */}
          <div className="mb-16">
            <p className="text-base md:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 font-inter font-medium border-l border-[#E89624] pl-6 py-2 italic">
              {t.intro}
            </p>
          </div>

          {/* CONTENT: LEGAL SECTIONS */}
          <div className="space-y-12">
            {t.sections.map((sec, i) => (
              <section key={i} className="group relative">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-[#E89624]/40 font-inter">
                      § 0{i + 1}
                    </span>
                    <h2 className="text-lg md:text-xl font-bebas font-normal uppercase tracking-wide text-zinc-900 dark:text-white italic group-hover:text-[#E89624] transition-colors">
                      {sec.t}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-inter font-normal pl-7">
                    {sec.d}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* SECTION: LEGAL FOOTER */}
          <footer className="mt-24 pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-inter">
                Criptografia AES-256 Ativa
              </span>
            </div>
            <p className="text-[9px] text-zinc-300 dark:text-zinc-600 uppercase tracking-widest font-inter font-black">
              Inari Technology © 2026 Legal Counsel
            </p>
          </footer>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}