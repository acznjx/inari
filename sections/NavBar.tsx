"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface NavBarProps {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ lang, setLang }: NavBarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setMounted(true);
  }, []);

  const menuItems = {
    PT: [
      { name: "Projetos", id: "projetos" },
      { name: "Serviços", id: "solucoes" },
      { name: "Dúvidas", id: "faq" },
      { name: "Contato", id: "contato" },
    ],
    EN: [
      { name: "Projects", id: "projetos" },
      { name: "Services", id: "solucoes" },
      { name: "FAQ", id: "faq" },
      { name: "Contact", id: "contato" },
    ]
  };

  if (!mounted) return null;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <motion.a 
          href="#home" 
          whileHover={{ skewX: -10 }}
          className="relative text-white font-title text-4xl tracking-[0.2em] uppercase cursor-pointer"
        >
          INARI
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-4 top-0 text-[#E89624] text-[10px]"
          >
            ●
          </motion.span>
        </motion.a>

        {/* MENU NAVEGAÇÃO */}
        <div className="hidden md:flex items-center gap-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={lang}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="flex gap-10"
            >
              {menuItems[lang as keyof typeof menuItems].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="font-sub text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 hover:text-[#E89624] transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SELETOR DE IDIOMA */}
        <div className="relative flex items-center bg-[#0a0a0a] border border-zinc-800/50 p-1.5 rounded-full backdrop-blur-xl">
          <div className="flex gap-1 relative">
            {["PT", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`relative z-10 w-12 h-8 font-mono text-[11px] font-bold transition-colors duration-500 ${
                  lang === l ? "text-black" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {l}
              </button>
            ))}

            <motion.div
              layoutId="activeLang"
              className="absolute inset-y-0 left-0 w-12 bg-[#E89624] rounded-full z-0 shadow-[0_0_20px_rgba(232,150,36,0.4)]"
              animate={{
                x: lang === "PT" ? 0 : 52,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25
              }}
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
             <motion.span 
               key={lang}
               initial={{ opacity: 0, y: -5 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[7px] font-mono text-zinc-700 tracking-[0.3em] uppercase"
             >
               Engine_Output: {lang === "PT" ? "BR_SO" : "INT_DV"}
             </motion.span>
          </div>
        </div>

      </div>
    </nav>
  );
}