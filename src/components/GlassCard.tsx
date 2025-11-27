'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  matte?: boolean;
}

export function GlassCard({ children, className, matte = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className={cn(
        "relative overflow-hidden rounded-[30px] border shadow-2xl transition-colors",
        matte 
          ? "bg-white/5 border-white/10 backdrop-blur-[40px] backdrop-saturate-150" 
          : "bg-white/10 border-white/20 backdrop-blur-[10px] backdrop-saturate-200",
        className
      )}
    >
      {/* Brilho superior (Highlight) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
      
      <div className="relative z-10 p-6 h-full text-white/90">
        {children}
      </div>
    </motion.div>
  );
}