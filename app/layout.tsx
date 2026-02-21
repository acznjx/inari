import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "@/app/globals.css";

// Inter: Configurada com pesos 200 (Extra Light) e 900 (Black)
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["200", "900"], 
  variable: "--font-inter" 
});

// Bebas Neue: Fonte para títulos de impacto
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
      </body>
    </html>
  );
}