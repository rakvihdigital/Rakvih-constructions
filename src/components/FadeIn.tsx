"use client";

import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn({ children, delay = 0, className = "", direction = "left" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay for staggered animations if needed
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 0px 0px' } // Trigger sooner
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  let transformClass = "";
  switch (direction) {
    case 'up': transformClass = "translate-y-12"; break;
    case 'down': transformClass = "-translate-y-12"; break;
    case 'left': transformClass = "-translate-x-16"; break;
    case 'right': transformClass = "translate-x-16"; break;
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transformClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
