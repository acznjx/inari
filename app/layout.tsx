import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["200", "900"], 
  variable: "--font-inter" 
});

const bebas = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

export const metadata: Metadata = {
  title: "Inari Technology",
  description: "Estratégia para brasileiros nos EUA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${bebas.variable} antialiased bg-white text-zinc-900`}>
        {children}
        {/* REMOVIDO DAQUI PARA FUNCIONAR O IDIOMA DINÂMICO */}
      </body>
    </html>
  );
}