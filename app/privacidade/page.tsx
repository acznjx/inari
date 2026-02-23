"use client";
import { useState, useEffect } from "react";
import Privacidade from "@/sections/privacy/Privacidade";

export default function PrivacyPage() {
  const [lang, setLang] = useState("PT");

  useEffect(() => {
    const titles: { [key: string]: string } = {
      PT: "Política de Privacidade | Inari Technology",
      EN: "Privacy Policy | Inari Technology"
    };
    document.title = titles[lang] || titles.PT;
  }, [lang]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] antialiased selection:bg-[#E89624]/30">
      <article className="max-w-4xl mx-auto py-16 px-6 sm:px-12">
        <Privacidade lang={lang} setLang={setLang} />
      </article>
    </main>
  );
}