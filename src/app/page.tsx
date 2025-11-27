import { GlassCard } from '@/components/GlassCard';
import { LiquidBackground } from '@/components/LiquidBackground';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 md:p-8 font-sans text-slate-100 flex items-center justify-center">
      <LiquidBackground />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. PERFIL */}
        <GlassCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between" matte={false}>
          <div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 mb-6 border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Willian Rupert</h1>
            <p className="text-xl text-white/60 font-medium">Computer Science Student</p>
          </div>
          <p className="text-lg leading-relaxed text-white/80 mt-4">
            Desenvolvedor Fullstack apaixonado por design system e arquitetura de software. Crio soluções que unem performance e estética.
          </p>
        </GlassCard>

        {/* 2. LOCALIZAÇÃO */}
        <GlassCard className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center gap-2" matte={true}>
           <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
           </div>
           <span className="font-medium text-white/80">Recife, BR</span>
        </GlassCard>

        {/* 3. LINKS SOCIAIS */}
        <GlassCard className="md:col-span-1 md:row-span-2 flex flex-col gap-3 justify-center">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/willianrupert" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Mail, label: "Email", href: "mailto:seu@email.com" }
          ].map((item, i) => (
             <a key={i} href={item.href} target="_blank" className="group flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
               <div className="flex items-center gap-3">
                 <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                 <span className="font-medium text-sm">{item.label}</span>
               </div>
               <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
             </a>
          ))}
        </GlassCard>

        {/* 4. TECH STACK (O que você pediu) */}
        <GlassCard className="md:col-span-2 md:row-span-1" matte={true}>
           <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Tech Stack</h3>
           <div className="flex flex-wrap gap-2">
             {[
               { name: 'Python', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
               { name: 'JavaScript', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
               { name: 'React', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' },
               { name: 'C++', bg: 'bg-indigo-500/20', border: 'border-indigo-500/30' },
               { name: 'Git', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
               { name: 'GitHub', bg: 'bg-white/10', border: 'border-white/20' },
             ].map((tech) => (
               <span key={tech.name} className={`px-3 py-1.5 rounded-lg border ${tech.bg} ${tech.border} text-xs font-semibold text-white/90 shadow-sm backdrop-blur-md`}>
                 {tech.name}
               </span>
             ))}
           </div>
        </GlassCard>

        {/* 5. CTA */}
        <GlassCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-600/50 to-purple-600/50 flex items-center justify-center group cursor-pointer hover:brightness-110 border-white/20">
           <span className="text-lg font-bold group-hover:scale-105 transition-transform">Contato</span>
        </GlassCard>

      </div>
    </main>
  );
}