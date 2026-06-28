import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SectionLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--pearl)] text-[color:var(--obsidian)] selection:bg-[color:var(--cherry)] selection:text-[color:var(--pearl)] overflow-x-hidden flex flex-col">
      
      {/* Shared unified Navbar for mobile & desktop */}
      <Navbar />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[color:var(--obsidian)]/10 bg-[color:var(--sand)]/20 relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 hover:text-[color:var(--cherry)] hover:opacity-100 transition-all mb-12">
            ← Back to home
          </Link>
          
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--cherry)] mb-4">
                {eyebrow}
              </div>
              <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter">
                {title}
              </h1>
            </div>
            <p className="md:col-span-4 text-base md:text-lg opacity-70 leading-relaxed font-light">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <main className="py-16 md:py-32 flex-grow">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {children}
        </div>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
