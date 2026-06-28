import { createFileRoute } from "@tanstack/react-router";
import { SectionLayout } from "@/components/section-layout";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import geospaceReel from "@/assets/insightio-reel.mp4"; 

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title: "Marketing — Tamanna Khan" },
      { name: "description", content: "Marketing strategy, website curation, and social growth for Geospace Design." },
      { property: "og:title", content: "Marketing — Tamanna Khan" },
      { property: "og:url", content: "/marketing" },
    ],
    links: [{ rel: "canonical", href: "/marketing" }],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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
  }, { scope: containerRef });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div ref={containerRef}>
      <SectionLayout
        eyebrow="§ Marketing"
        title="Geospace Design."
        intro="End-to-end digital marketing strategy, SEO optimization, and website content curation for an architecture firm."
      >
        <div className="space-y-24 md:space-y-32">
          
          <section className="grid md:grid-cols-12 gap-8 items-start fade-up">
            <div className="md:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
                01 / The Role
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Building a digital foundation.
              </h2>
              <p className="text-[color:var(--obsidian)]/90 leading-relaxed font-medium text-lg md:text-xl">
                Led the complete website curation process, establishing a robust SEO strategy 
                and crafting the digital narrative for Geospace Design. This involved transforming 
                architectural portfolios into compelling digital experiences.
              </p>
            </div>
            <ul className="md:col-span-7 font-mono text-xs md:text-sm uppercase tracking-[0.2em] space-y-5 border-l-2 border-[color:var(--cherry)] pl-6 text-[color:var(--obsidian)]/80 font-bold">
              <li>— Website Content Curation</li>
              <li>— Search Engine Optimization (SEO)</li>
              <li>— Digital Marketing Strategy</li>
              <li>— Lead Generation Campaigns</li>
            </ul>
          </section>

          <section className="fade-up mx-auto w-full bg-[color:var(--obsidian)] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative transition-all duration-500">
            {/* Desktop Browser Bar (hidden on mobile) */}
            <div className="hidden md:flex font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--pearl)] p-4 items-center justify-center relative border-b border-white/10">
              <div className="absolute left-4 flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="opacity-70">geospacedesign.com</span>
            </div>
            
            {/* Desktop Iframe */}
            <div className="hidden md:block aspect-[16/9] w-full overflow-hidden bg-white">
              <iframe
                src="https://www.geospacedesign.com/"
                title="Geospace Design Website"
                className="w-full h-full bg-white"
                loading="lazy"
              />
            </div>

            {/* Mobile Alternative (Responsive Phone Frame) */}
            <div className="md:hidden flex flex-col items-center justify-center p-8 bg-[color:var(--obsidian)]">
               <div className="w-full max-w-[300px] aspect-[1/2] border-[12px] border-[#222] rounded-[36px] overflow-hidden shadow-2xl relative mx-auto bg-white mb-6">
                  {/* Phone Top Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-[#222] rounded-b-xl w-24 sm:w-32 mx-auto z-10"></div>
                  <iframe
                    src="https://www.geospacedesign.com/"
                    title="Geospace Design Website Mobile"
                    className="w-full h-full bg-white"
                    loading="lazy"
                  />
               </div>
               <a href="https://www.geospacedesign.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full max-w-[300px] bg-[color:var(--cherry)] text-[color:var(--pearl)] rounded-full py-4 text-[10px] uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-transform mx-auto">
                 Visit Live Site ↗
               </a>
            </div>
          </section>

          <section className="grid md:grid-cols-12 gap-8 items-start fade-up">
            <div className="md:col-span-7 flex justify-center md:order-2 relative">
              <div className="aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden bg-black rounded-[24px] relative group cursor-pointer shadow-2xl" onClick={toggleMute}>
                <video
                  ref={videoRef}
                  src={geospaceReel}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                    {isMuted ? "Tap to Unmute" : "Tap to Mute"}
                  </div>
                </div>
                {/* Floating pill indicator at the bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[8px] uppercase tracking-[0.2em] text-white/80 pointer-events-none">
                  {isMuted ? "Muted" : "Unmuted"}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 space-y-4 md:order-1 pt-12">
              <span className="font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
                02 / Social Growth
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Engagement-driven reels.
              </h2>
              <p className="text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg">
                Conceptualized and produced social media reels that significantly boosted 
                engagement metrics. Focused on showcasing the architectural process and final 
                spaces through dynamic, trend-aware storytelling.
              </p>
            </div>
          </section>
        </div>
      </SectionLayout>
    </div>
  );
}
