import { createFileRoute } from "@tanstack/react-router";
import { SectionLayout } from "@/components/section-layout";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import tamannaPortrait from "@/assets/tamanna-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Content Creation — Tamanna Khan" },
      { name: "description", content: "Social-first content creation by Tamanna Khan — see the full feed on Instagram @tam_anna_k." },
      { property: "og:title", content: "Content Creation — Tamanna Khan" },
      { property: "og:url", content: "/content" },
    ],
    links: [{ rel: "canonical", href: "/content" }],
  }),
  component: ContentPage,
});

function ContentPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up sections on scroll
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach(elem => {
      gsap.from(elem, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
        }
      });
    });

    // Animations removed for static placement

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <SectionLayout
        eyebrow="§ Content Creation"
        title="A feed that reads like a magazine."
        intro="Concepting, shooting, and editing social content with a slow, considered eye. The full archive lives on Instagram."
      >
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center fade-up mt-12">
          
          <div className="md:col-span-6 space-y-8 md:order-1 relative">
            
            {/* Magazine decorative animated icon */}
            <div className="absolute -top-16 -left-12 md:-left-16 w-24 h-24 opacity-10 text-[color:var(--obsidian)] animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
              </svg>
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-[color:var(--obsidian)] relative z-10">
              Visit <span className="italic text-[color:var(--cherry)]">@tam_anna_k</span> for the full body of work.
            </h2>
            <p className="text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-xl">
              Reels, editorial grids, and slow-feed storytelling. The Instagram page is the
              living portfolio — updated regularly with considered visuals.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] px-8 py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-[color:var(--cherry)] transition-colors mt-4"
            >
              Open Instagram ↗
            </a>
          </div>

          <div className="md:col-span-6 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[800px] flex justify-center items-center h-[500px] md:h-[600px] mt-12 md:mt-0">
              
              {/* DESKTOP/TABLET LAYOUT (Hidden on mobile) */}
              <div className="hidden md:block w-full h-full relative">
                {/* Desktop / Macbook Pro */}
                <div className="absolute right-12 top-12 w-[500px] aspect-[16/10] bg-[color:var(--obsidian)] rounded-t-[16px] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-[4px] border-[#333] flex flex-col z-10 transform rotate-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] mx-auto mb-2 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#202020]" />
                  </div>
                  <div className="relative w-full flex-grow overflow-hidden rounded-[8px] bg-white border border-[#222]">
                    <iframe
                      src="https://www.instagram.com/tam_anna_k/embed"
                      title="Instagram Desktop"
                      className="absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none"
                      loading="lazy"
                    />
                    <div className="absolute bottom-12 right-12 z-20 pointer-events-none">
                       <a 
                         href={INSTAGRAM}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center bg-[color:var(--cherry)] text-[color:var(--pearl)] rounded-full px-6 py-3 text-xs uppercase tracking-widest font-mono shadow-xl pointer-events-auto hover:scale-105 transition-transform"
                       >
                         Follow Now
                       </a>
                    </div>
                  </div>
                  <div className="absolute -bottom-[20px] -left-[10%] w-[120%] h-[20px] bg-[#222] rounded-b-[16px] rounded-t-[4px] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex justify-center">
                     <div className="w-1/4 h-[4px] bg-[#1a1a1a] mt-1 rounded-b-md"></div>
                  </div>
                </div>

                {/* Tablet Mockup */}
                <div className="absolute left-[20%] bottom-12 w-[280px] aspect-[3/4] bg-[color:var(--obsidian)] rounded-[20px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-[2px] border-[#444] z-20 transform -rotate-3">
                   <div className="w-full h-full bg-white rounded-[12px] overflow-hidden relative">
                     <iframe
                       src="https://www.instagram.com/tam_anna_k/embed"
                       title="Instagram Tablet"
                       className="absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none"
                       loading="lazy"
                     />
                   </div>
                </div>
              </div>

              {/* MOBILE LAYOUT (Clean Embed) */}
              <div className="md:hidden w-full max-w-[400px] mx-auto h-[500px] bg-white rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#222] relative">
                 <iframe
                   src="https://www.instagram.com/tam_anna_k/embed"
                   title="Instagram Mobile"
                   className="absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none"
                   loading="lazy"
                 />
              </div>
            </div>
          </div>

        </div>
      </SectionLayout>
    </div>
  );
}
