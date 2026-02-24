import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "@/app/globals.css";

// ---------------------------------------------------------
// CONFIGURAÇÃO DE FONTES (DESIGN SYSTEM)
// ---------------------------------------------------------
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["200", "400", "500", "700", "900"],
  variable: "--font-inter" 
});

const bebas = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

// ---------------------------------------------------------
// METADADOS DO PORTAL
// ---------------------------------------------------------
export const metadata: Metadata = {
  title: "Inari Technology",
  description: "Estratégia para brasileiros nos EUA",
};

// ---------------------------------------------------------
// LAYOUT PRINCIPAL
// ---------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body 
        className={`
          ${inter.variable} 
          ${bebas.variable} 
          antialiased 
          bg-white 
          text-zinc-900 
          selection:bg-[#E89624]/30
        `}
      >
        {/* CONTEÚDO DINÂMICO (PAGE.TSX) */}
        {children}

      </body>
    </html>
  );
}