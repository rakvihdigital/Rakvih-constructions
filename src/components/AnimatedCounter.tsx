"use client";

import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (elementRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            const currentCount = Math.floor(easeProgress * end);
            setCount(currentCount);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      });
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  const formattedCount = count.toLocaleString('en-US');

  return <span ref={elementRef}>{formattedCount}{suffix}</span>;
}
