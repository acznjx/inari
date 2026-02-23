"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const translations = {
  PT: {
    tag: "Segurança",
    title: "PRIVACIDADE DE DADOS",
    text: "Utilizamos tecnologia de ponta para otimizar sua jornada. Ao prosseguir, você concorda com nossas políticas de uso.",
    link: "Privacidade",
    btn: "Aceitar e Continuar",
    btnDecline: "Recusar"
  },
  EN: {
    tag: "Security",
    title: "DATA PRIVACY",
    text: "We use cutting-edge technology to optimize your journey. By proceeding, you agree to our usage policies.",
    link: "Privacy",
    btn: "Accept and Continue",
    btnDecline: "Decline"
  }
};

export default function CookieBanner({ lang }: { lang: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("inari-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("inari-consent", "true");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("inari-consent", "false");
    setShow(false);
  };

  const t = lang === "EN" ? translations.EN : translations.PT;

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          key={lang} 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          // Aumentado para z-100 para garantir visibilidade sobre botões do hero no mobile
          className="fixed bottom-8 right-0 md:right-8 z-[100] w-full md:w-96 px-4 md:px-0"
        >
          {/* Mantive as cores exatas: white/95 e dark:bg-[#0a0a0a]/95 */}
          <div className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E89624]">
                  {t.tag}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#E89624] animate-pulse" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-zinc-900 dark:text-white italic tracking-tighter leading-none">
                  {t.title}
                </h4>
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {t.text}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <Link 
                  href="/privacidade" 
                  className="group flex items-center gap-2 text-[11px] text-zinc-400 font-bold uppercase tracking-widest hover:text-[#E89624] transition-colors"
                >
                  <span className="w-4 h-px bg-zinc-800 group-hover:bg-[#E89624] group-hover:w-6 transition-all" />
                  {t.link}
                </Link>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={accept}
                    className="relative overflow-hidden group w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-95"
                  >
                    <span className="relative z-10">{t.btn}</span>
                    <div className="absolute inset-0 bg-[#E89624] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>

                  {/* Opção de recusar integrada de forma profissional e limpa */}
                  <button 
                    onClick={decline}
                    className="w-full text-center text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-red-500 transition-colors py-1"
                  >
                    {t.btnDecline}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}