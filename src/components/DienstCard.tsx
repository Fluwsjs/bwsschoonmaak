"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface DienstCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  delay?: number;
}

const DienstCard = ({
  title,
  description,
  icon,
  href,
  delay = 0,
}: DienstCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 lg:p-8 rounded-xl transition-all duration-300 border border-gray-100 card-float"
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="mb-4 text-[color:var(--primary)] text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="text-[color:var(--primary)] hover:text-[color:var(--secondary)] font-medium inline-flex items-center gap-1 transition-colors"
      >
        Meer informatie
        <ArrowRight className="h-4 w-4 lucide" strokeWidth={2} style={{ stroke: 'currentColor' }} />
      </Link>
    </motion.div>
  );
};

export default DienstCard; 