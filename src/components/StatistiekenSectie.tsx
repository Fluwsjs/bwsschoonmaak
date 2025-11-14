"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface StatistiekProps {
  nummer: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const useCountUp = (end: number, start: number = 0, duration: number = 2000) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function voor smooth animatie
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, start, duration]);

  return { count, ref };
};

const StatistiekKaart = ({ nummer, label, suffix = "", prefix = "" }: StatistiekProps) => {
  const { count, ref } = useCountUp(nummer);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="text-center p-8 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/95 text-base font-semibold uppercase tracking-wide">{label}</div>
      <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-[color:var(--secondary)] to-transparent mx-auto rounded-full"></div>
    </motion.div>
  );
};

const StatistiekenSectie = () => {
  const statistieken = [
    { nummer: 500, label: "Actieve contracten", suffix: "+", prefix: "" },
    { nummer: 15, label: "Jaar expertise", suffix: "+", prefix: "" },
    { nummer: 50, label: "Gecertificeerde professionals", suffix: "+", prefix: "" },
    { nummer: 98, label: "Klanttevredenheid", suffix: "%", prefix: "" }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[color:var(--primary)] via-[color:var(--primary)] to-[color:var(--secondary)] relative overflow-hidden mb-0">
      {/* Moderne decoratieve elementen */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--secondary)]/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      {/* Professionele floating iconen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-white/8"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM15 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16H4V8h16v12zM12 15l-4-4 1.41-1.41L12 12.17l2.59-2.58L16 11l-4 4z"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 text-white/8"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5c-1.1 0-2 .9-2 2v1h18V6c0-1.1-.9-2-2-2zM6 19c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1H6v1z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/6 text-white/8"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>
          </svg>
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-white mb-6 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30">
            Bewezen Resultaten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vertrouwen door prestatie
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Onze resultaten spreken voor zich. Met meer dan 15 jaar expertise en een team van 
            gecertificeerde professionals leveren wij consistent de hoogste kwaliteit voor bedrijven door heel Nederland.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statistieken.map((stat, index) => (
            <StatistiekKaart
              key={index}
              nummer={stat.nummer}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Klaar voor professionele schoonmaak?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Sluit u aan bij meer dan 500 tevreden bedrijven die vertrouwen op onze expertise. 
              Vraag vandaag nog een vrijblijvende offerte aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Offerte aanvragen
              </Link>
              <Link href="/diensten" className="btn-white-outline">
                Bekijk diensten
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatistiekenSectie; 