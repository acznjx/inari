'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm font-mono">
          <span className="text-white font-bold">CORE //</span> Utilizamos cookies para otimizar a performance da sua experiência.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={acceptCookies}
            className="bg-white text-black px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition"
          >
            ACEITAR
          </button>
        </div>
      </div>
    </div>
  );
}