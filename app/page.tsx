"use client";
import { useState } from "react";
import Navbar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects"; 
import Faq from "@/sections/Faq";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import CookieBanner from "@/sections/privacy/CookieBanner"; 

export default function Home() {
  const [lang, setLang] = useState("PT"); 
  return (
    <main className="relative bg-[#01161e] min-h-screen w-full flex flex-col m-0 p-0 overflow-x-hidden antialiased">
      <Navbar lang={lang} setLang={setLang} />
      
      <Hero lang={lang} />
      <Services lang={lang} />
      <TechStack lang={lang} />
      <Projects lang={lang} /> 
      <Faq lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />

      <CookieBanner lang={lang} />
    </main>
  );
}