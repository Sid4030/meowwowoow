import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";

export function Navbar({ showSplash = false }: { showSplash?: boolean }) {
  const [isIslandOpen, setIsIslandOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logo Animation
  useGSAP(() => {
    gsap.to(".nav-logo-char", {
      y: -6,
      duration: 0.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.08
    });
  }, { scope: containerRef });

  // Dynamic Island / Glass Pill Animation
  useEffect(() => {
    if (isIslandOpen) {
      gsap.to(".dynamic-island", {
        height: "380px",
        borderRadius: "32px",
        duration: 0.6,
        ease: "elastic.out(1, 0.7)"
      });
      gsap.to(".island-links", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        delay: 0.2
      });
      gsap.to(".island-header", {
        opacity: 0,
        display: "none",
        duration: 0.2
      });
    } else {
      gsap.to(".dynamic-island", {
        height: "56px",
        borderRadius: "100px",
        duration: 0.5,
        ease: "power3.inOut"
      });
      gsap.to(".island-links", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.2
      });
      gsap.to(".island-header", {
        opacity: 1,
        display: "flex",
        duration: 0.3,
        delay: 0.2
      });
    }
  }, [isIslandOpen]);

  const logoText = "Tamanna";

  return (
    <div ref={containerRef}>
      {/* DESKTOP HEADER */}
      <header suppressHydrationWarning className={`hidden md:flex fixed top-0 inset-x-0 z-50 mix-blend-difference text-white px-12 h-24 items-center justify-between pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSplash ? 'opacity-0 -translate-y-[100%] pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <Link to="/" className="font-display text-2xl tracking-tighter flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-8 focus-visible:ring-offset-transparent rounded-sm">
          {logoText.split("").map((char, i) => (
            <span key={i} className="nav-logo-char inline-block">{char}</span>
          ))}
          <span className="nav-logo-char inline-block text-[color:var(--cherry)]">.</span>
        </Link>
        <ul className="flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.25em]">
          <li><Link to="/marketing" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm">Marketing</Link></li>
          <li><Link to="/content" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm">Content</Link></li>
          <li><Link to="/writing" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm">Writing</Link></li>
          <li><Link to="/community" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm">Community</Link></li>
        </ul>
        <a href="#contact" className="text-[10px] font-mono uppercase tracking-[0.25em] hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm">
          Contact
        </a>
      </header>

      {/* MOBILE WIDE FLOATING PILL NAVBAR */}
      <div suppressHydrationWarning className={`md:hidden fixed top-6 inset-x-0 z-[100] flex justify-center px-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSplash ? 'opacity-0 -translate-y-[100%] pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        
        {/* Layer 1: Frosted Glass Pill (Exactly like reference image) */}
        <div 
          className="dynamic-island w-full bg-white/40 backdrop-blur-3xl border border-white/40 flex flex-col items-center justify-start overflow-hidden pointer-events-auto shadow-sm relative"
          style={{ height: "56px", borderRadius: "100px" }}
        >
          {/* Opened State Links */}
          <div className="island-links opacity-0 pointer-events-none w-full h-full flex flex-col p-6 px-8 relative bg-white/95 text-black">
            <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
              <Link 
                to="/" 
                className="font-display text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm"
                onClick={() => setIsIslandOpen(false)}
              >
                Tamanna
              </Link>
              <button 
                className="flex flex-col gap-1.5 opacity-80 hover:opacity-100 p-2 -mr-2 relative w-6 h-6 justify-center items-center text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
                onClick={() => setIsIslandOpen(false)}
              >
                <span className="w-5 h-[1.5px] bg-black absolute rotate-45" />
                <span className="w-5 h-[1.5px] bg-black absolute -rotate-45" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 font-display text-4xl tracking-tight mt-2 text-black">
              <Link to="/marketing" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm" onClick={() => setIsIslandOpen(false)}>Marketing</Link>
              <Link to="/content" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm" onClick={() => setIsIslandOpen(false)}>Content</Link>
              <Link to="/writing" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm" onClick={() => setIsIslandOpen(false)}>Writing</Link>
              <Link to="/community" className="hover:text-[color:var(--cherry)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm" onClick={() => setIsIslandOpen(false)}>Community</Link>
            </nav>
            <div className="mt-auto flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] font-bold opacity-60 pt-4 border-t border-black/10">
              <a href="#contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm" onClick={(e) => { e.stopPropagation(); setIsIslandOpen(false); }}>Contact</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cherry)] focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm">Instagram ↗</a>
            </div>
          </div>
        </div>

        {/* Layer 2: The Text Header (Strictly Black now, no blend mode) */}
        <div 
          className="island-header absolute top-0 inset-x-4 h-[56px] flex items-center justify-between px-6 cursor-pointer text-black z-10 pointer-events-auto"
          onClick={() => !isIslandOpen && setIsIslandOpen(true)}
        >
          <Link 
            to="/" 
            className="font-display text-xl tracking-tight z-10"
            onClick={(e) => e.stopPropagation()}
          >
            Tamanna
          </Link>
          <div className="flex flex-col gap-1.5 opacity-80 z-10 p-2 -mr-2">
            <span className="w-5 h-[1.5px] bg-black" />
            <span className="w-5 h-[1.5px] bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
