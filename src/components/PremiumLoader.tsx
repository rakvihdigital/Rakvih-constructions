"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Homepage has its own CanvasSequence preloader
    if (pathname === '/') return;
    
    setIsLoading(true);
    setProgress(0);

    // Animate progress from 0 to 100
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden transition-opacity duration-700 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Outer decorative rings */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.03] animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-gold/[0.05] animate-[spin_30s_linear_infinite_reverse]" />
      
      <div className="relative flex flex-col items-center">
        {/* Logo with glow ring */}
        <div className="relative mb-10">
          <div className="absolute inset-0 -m-6 bg-gold/10 rounded-full blur-[40px] animate-pulse pointer-events-none" />
          <div className="absolute -inset-6 rounded-full border border-dashed border-gold/20 animate-[spin_8s_linear_infinite]" />
          <img
            src="/logo-transparent.png"
            alt="Rakvih"
            className="w-32 h-auto relative z-10 animate-fade-in-up"
          />
        </div>

        {/* Tagline */}
        <p className="text-white/40 text-sm tracking-[0.35em] uppercase font-light mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          Spaces Beyond Expectations
        </p>

        {/* Progress bar */}
        <div className="w-64 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(212,175,55,0.5)]" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase font-light">Loading</span>
            <span className="text-gold text-[10px] tracking-[0.2em] font-medium">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
