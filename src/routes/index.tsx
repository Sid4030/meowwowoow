import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import tamannaPortrait from "@/assets/tamanna-portrait.jpg";
import tamanna5 from "@/assets/tamanna-5.jpeg";
import tamannaSmile from "@/assets/tamanna-smile.jpg";
import tamanna1 from "@/assets/tamanna-1.jpeg";
import tamanna10 from "@/assets/Tamanna10.jpeg"
import tamanna3 from "@/assets/tamanna-3.jpeg";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamanna Khan — Content & Marketing Associate" },
      { name: "description", content: "Selected work in marketing, content creation, and writing by Tamanna Khan." },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";
const LINKEDIN = "https://www.linkedin.com/in/tamanna-khan-84563b293";
const EMAIL = "tamtamnini111@gmail.com";

function Index() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Text Reveal
    gsap.from(".hero-text", {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.2
    });

    // Fix GSAP ScrollTrigger sync issues on mobile by refreshing after a delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    window.addEventListener("load", () => ScrollTrigger.refresh());

    gsap.fromTo(".topo-line", 
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 3, ease: "power2.out", stagger: 0.1 }
    );

    // 2. Zoom-Through Perspective Section
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Desktop Animation
      const zoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoom-section",
          start: "top top",
          end: "+=150%", // Significantly reduced from 350% so it's much faster
          scrub: 1,
          pin: true,
        }
      });

      zoomTl.to(".zoom-svg-text", {
        scale: 150,
        xPercent: 110, 
        yPercent: 15, 
        transformOrigin: "center center",
        ease: "power2.inOut",
        duration: 2
      });

      zoomTl.to(".zoom-overlay-rect", { opacity: 0, duration: 0.2 }, "-=1.4");

      zoomTl.to(".zoom-image-wrapper", {
        width: "30vw",
        height: "55vh",
        x: "-20vw",
        y: "0",
        borderRadius: "24px",
        ease: "power2.inOut",
        duration: 1.5
      }, "-=1.0"); // Starts earlier while still zooming

      zoomTl.fromTo(".zoom-reveal-block", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=1");
      zoomTl.fromTo(".zoom-reveal-line", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }, "-=0.5");
    });

    mm.add("(max-width: 768px)", () => {
      // Mobile Animation (Simplified for robustness)
      const zoomTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoom-section",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      zoomTl.to(".zoom-svg-text", {
        scale: 100,
        xPercent: 0, 
        yPercent: 0, 
        transformOrigin: "center center",
        ease: "power2.inOut",
        duration: 2
      });

      zoomTl.to(".zoom-overlay-rect", { opacity: 0, duration: 0.2 }, "-=1.4");
      
      let mm = gsap.matchMedia(containerRef);

      mm.add({
        isDesktop: "(min-width: 1280px)",
        isMobile: "(max-width: 1279px)"
      }, (context) => {
        let { isDesktop } = context.conditions as { isDesktop: boolean };

        zoomTl.to(".zoom-image-wrapper", {
          width: isDesktop ? "45vw" : "90vw",
          height: isDesktop ? "80vh" : "40vh",
          x: isDesktop ? "-25vw" : "0",
          y: isDesktop ? "0" : "-22vh",
          borderRadius: "24px",
          ease: "power2.inOut",
          duration: 1.5
        });

        zoomTl.fromTo(".zoom-reveal-block", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");
        zoomTl.fromTo(".zoom-reveal-line", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }, "-=0.5");
      });
    });

    // 3. Section Fade Ins
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

    // Image Parallax
    gsap.utils.toArray<HTMLElement>(".parallax-image").forEach(img => {
      gsap.fromTo(img, 
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    // Horizontal scroll for disciplines
    const wrapper = document.querySelector(".disciplines-wrapper") as HTMLElement;
    const sections = gsap.utils.toArray<HTMLElement>(".discipline-card");
    if (wrapper && sections.length > 0) {
      gsap.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".disciplines-container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (wrapper.scrollWidth - window.innerWidth)
        }
      });
    }

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#f2efe9] text-[color:var(--obsidian)] selection:bg-[color:var(--cherry)] selection:text-[color:var(--pearl)] overflow-x-hidden">
      
      <Navbar />

      {/* EXTRAORDINARY HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-end bg-[color:var(--sand)]/30 overflow-hidden pt-32 pb-16 px-6 md:px-12">
        {/* Topographical SVG Background */}
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <path className="topo-line" d="M -100 200 Q 300 400 800 100 T 1500 500" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <path className="topo-line" d="M -100 250 Q 300 450 800 150 T 1500 550" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <path className="topo-line" d="M -100 300 Q 300 500 800 200 T 1500 600" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <path className="topo-line" d="M -100 350 Q 300 550 800 250 T 1500 650" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <path className="topo-line" d="M -100 400 Q 300 600 800 300 T 1500 700" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <path className="topo-line" d="M -100 450 Q 300 650 800 350 T 1500 750" fill="none" stroke="var(--obsidian)" strokeWidth="1"/>
             <circle className="topo-line" cx="70%" cy="40%" r="200" fill="none" stroke="var(--obsidian)" strokeWidth="1" strokeDasharray="5,5" />
             <circle className="topo-line" cx="70%" cy="40%" r="250" fill="none" stroke="var(--obsidian)" strokeWidth="1" strokeDasharray="5,5" />
             <circle className="topo-line" cx="70%" cy="40%" r="300" fill="none" stroke="var(--obsidian)" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-end w-full h-full flex-grow">
          <div className="md:col-span-12 flex flex-col justify-end">
            <h1 className="font-display text-[18vw] md:text-[16vw] leading-[0.75] tracking-tighter uppercase text-[color:var(--cherry)] max-w-full">
              {/* Sized down slightly so the last 'A' is not clipped or overflowing horizontally */}
              <div className="pb-2 md:pb-4 pr-4 md:pr-12"><div className="hero-text inline-block">Tamanna</div></div>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between mt-4 md:mt-8 gap-8">
              <h2 className="font-display text-[18vw] md:text-[12vw] leading-[0.75] tracking-tighter italic text-[color:var(--obsidian)]">
                <div className="pb-4 pr-8"><div className="hero-text inline-block">Khan.</div></div>
              </h2>
              <div className="max-w-xs space-y-6 pb-4">
                <p className="text-base md:text-lg font-light leading-relaxed fade-up mix-blend-multiply">
                  Content & marketing associate building brand worlds through words, visuals, and quiet strategy.
                </p>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] border-t border-[color:var(--obsidian)]/20 pt-4 fade-up">
                  <span>Vol. 01 / 2026</span>
                  <span>Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZOOM-THROUGH PERSPECTIVE SECTION */}
      <section className="zoom-section relative h-[100svh] bg-transparent flex flex-col md:flex-row items-center justify-center overflow-hidden">
        
        {/* The image container that shrinks and moves */}
        <div className="zoom-image-wrapper absolute flex items-center justify-center w-full h-full overflow-hidden" style={{ willChange: "width, height, transform, border-radius" }}>
          <img 
            src={tamannaPortrait} 
            alt="Tamanna Khan Portrait" 
            className="w-full h-full object-cover object-[center_top]" 
          />
        </div>

        {/* The text that appears on the right (or bottom) after zooming */}
        <div className="zoom-reveal-block absolute xl:right-[10vw] right-0 top-[52vh] xl:top-[50vh] xl:-translate-y-1/2 w-full max-w-md pointer-events-none opacity-0 px-6 xl:px-0 z-20">
          
          {/* Decorative Watermark */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 font-display text-[120px] xl:text-[200px] text-[color:var(--obsidian)]/5 leading-none select-none -z-10">
            T.
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--cherry)] mb-3 xl:mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
            About Tamanna
          </div>
          <h2 className="font-display text-3xl xl:text-5xl leading-[1.05] text-[color:var(--obsidian)] mb-4 xl:mb-8 relative">
            <div className="zoom-reveal-line">It's not just copy,</div>
            <div className="zoom-reveal-line">it's a <span className="italic text-[color:var(--cherry)]">journey.</span></div>
          </h2>
          <div className="space-y-4 text-xs xl:text-sm leading-snug xl:leading-relaxed opacity-80 zoom-reveal-line font-light relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--cherry)] to-transparent opacity-30 hidden md:block"></div>
            <p>
              My name is Tamanna Khan, I am based in Delhi NCR. I freshly graduated from Lady Irwin College, University of Delhi with a Bachelors in Science in Home Science (major) and Psychology (minor).
            </p>
            <p>
              I am a very driven individual with over an year of experience in Marketing and over 2 years of experience in Content and creative writing. I published my own collection of poetry in November 2025. 
            </p>
            <p>
              I am eager to learn and contribute and most importantly hone my skills in every diverse sector possible.
            </p>
          </div>
        </div>

        {/* SVG Mask overlay - This is what we fall through */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="zoom-mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <text 
                className="zoom-svg-text" 
                x="50%" y="55%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill="black" 
                fontSize="18vw" 
                fontFamily="'Cormorant Garamond', serif" 
                fontWeight="bold"
                fontStyle="italic"
                letterSpacing="-0.02em"
              >
                PERSPECTIVE
              </text>
            </mask>
          </defs>
          <rect className="zoom-overlay-rect" x="0" y="0" width="100%" height="100%" fill="var(--obsidian)" mask="url(#zoom-mask)" />
        </svg>

      </section>

      {/* MARQUEE */}
      <section className="py-8 bg-[color:var(--cherry)] text-[color:var(--pearl)] overflow-hidden">
        <div className="flex whitespace-nowrap font-display text-4xl md:text-6xl italic">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0 animate-[marquee_30s_linear_infinite]">
              {["Brand Voice", "Content Strategy", "Social Storytelling", "Editorial Writing", "Campaign Copy", "Community"].map((w) => (
                <span key={w} className="flex items-center gap-16">
                  <span>{w}</span>
                  <span className="text-[color:var(--obsidian)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>

      {/* SECTIONS LIST (Pixel Melbourne Style Horizontal Scroll) */}
      <section id="sections" className="disciplines-container relative h-[100svh] flex flex-col justify-center overflow-hidden bg-transparent pt-20">
        <div className="absolute top-20 left-6 md:left-12 z-20 pointer-events-none">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter mix-blend-multiply">
            Disciplines.
          </h2>
          <p className="mt-4 max-w-xs text-sm md:text-base opacity-70 leading-relaxed font-light">
            Scroll to explore the different rooms of my work.
          </p>
        </div>

        <div className="disciplines-wrapper flex flex-nowrap h-[60vh] md:h-[70vh] items-center w-[500vw] md:w-[250vw] mt-24 md:mt-16">
          <div className="discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0">
            <SectionCard 
              n="01" 
              to="/marketing" 
              title="Marketing" 
              body="Digital strategy, SEO, and website curation for brands like Geospace Design." 
              img={tamannaPortrait}
              className="w-full h-full rounded-[40px]" 
            />
          </div>
          <div className="discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0">
            <SectionCard 
              n="02" 
              to="/content" 
              title="Content Creation" 
              body="Social-first storytelling and creative ad reels — Instagram and beyond."
              img={tamanna5} 
              className="w-full h-full rounded-[40px]" 
            />
          </div>
          <div className="discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0">
            <SectionCard 
              n="03" 
              to="/writing" 
              title="Writing" 
              body="Published author of The Truth of My Life — a collection of 40 poems." 
              img={tamanna1}
              className="w-full h-full rounded-[40px]" 
            />
          </div>
          <div className="discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0">
            <SectionCard 
              n="04" 
              to="/community" 
              title="Community Work" 
              body="Field-reported articles for Pehchaan The Street School." 
              img={tamannaSmile} 
              className="w-full h-full rounded-[40px]"
            />
          </div>
          <div className="discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0">
            <SectionCard 
              n="05" 
              to="#contact" 
              title="Let's Talk" 
              body="Ready to build a voice system that works? Reach out and let's create something extraordinary together." 
              img={tamanna10}
              className="w-full h-full rounded-[40px]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Redesigned Vibrant Full-Screen) */}
      <section id="about" className="relative min-h-[100svh] w-full flex flex-col xl:flex-row items-stretch justify-start xl:justify-center overflow-hidden bg-[color:var(--obsidian)]">
        {/* Images side */}
        <div className="w-full xl:w-5/12 h-[50vh] xl:h-auto relative overflow-hidden shrink-0 self-start xl:self-stretch">
           <div className="absolute inset-0 z-0 overflow-hidden">
             <img src={tamanna3} alt="Tamanna" className="absolute inset-0 w-full h-[150%] -top-[25%] object-cover object-[center_top] parallax-image" />
           </div>
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[color:var(--obsidian)] via-[color:var(--obsidian)]/40 to-transparent opacity-100 z-10" />
        </div>

        {/* Text side */}
        <div className="w-full xl:w-7/12 p-8 md:p-16 xl:p-24 flex flex-col justify-center relative z-20 text-[color:var(--pearl)] bg-[color:var(--obsidian)] xl:bg-transparent -mt-16 xl:mt-0">
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
             <path d="M -100 100 Q 300 300 800 -100" fill="none" stroke="var(--cherry)" strokeWidth="2"/>
             <path d="M -100 200 Q 400 400 900 0" fill="none" stroke="var(--cherry)" strokeWidth="2"/>
             <circle cx="80%" cy="80%" r="300" fill="none" stroke="var(--cherry)" strokeWidth="1" strokeDasharray="10,10"/>
          </svg>

          <div className="relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--sand)] flex items-center gap-3 mb-8 fade-up">
            <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
            Who I Am
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl fade-up">
            I build voice systems, plan campaigns, and write copy that <span className="italic text-[color:var(--cherry)]">doesn't shout.</span>
          </h2>
          
          <p className="mt-8 text-sm md:text-lg text-[color:var(--pearl)]/70 leading-relaxed font-light max-w-xl fade-up">
            I care about pacing, restraint, and the small details that make something feel considered — a published poet who treats brand work with the same eye for a line break. Open to collaborations, freelance projects, and full-time roles with teams who take taste seriously.
          </p>
          
          <div className="flex flex-wrap gap-8 md:gap-16 mt-12 fade-up">
            <div>
              <dt className="font-display text-4xl md:text-5xl text-[color:var(--cherry)]">7</dt>
              <dd className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2">Organisations</dd>
            </div>
            <div>
              <dt className="font-display text-4xl md:text-5xl text-[color:var(--cherry)]">40</dt>
              <dd className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2">Poems</dd>
            </div>
            <div>
              <dt className="font-display text-4xl md:text-5xl text-[color:var(--cherry)]">1500+</dt>
              <dd className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2">Words/Article</dd>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}

function SectionCard({ n, to, title, body, img, className = "" }: { n: string; to: string; title: string; body: string; img?: string; className?: string }) {
  const isHash = to.startsWith("#");
  const Component = isHash ? "a" : Link;
  const props = isHash ? { href: to } : { to };
  
  return (
    <Component {...props as any} className={`group relative p-10 md:p-16 w-full h-full flex flex-col justify-between overflow-hidden bg-[color:var(--obsidian)] shadow-2xl ${className}`}>
      <div className="absolute inset-0 bg-[color:var(--cherry)] transform scale-y-0 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100 z-0" />
      {img && (
        <img 
          src={img} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-700 delay-100 z-0 mix-blend-luminosity" 
        />
      )}
      
      <div className="relative z-10 flex items-start justify-between text-[color:var(--pearl)] group-hover:text-[color:var(--pearl)] transition-colors duration-500">
        <span className="font-mono text-xs opacity-70">{n} /</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Explore ↗</span>
      </div>
      
      <div className="relative z-10 space-y-4 text-[color:var(--pearl)] group-hover:text-[color:var(--pearl)] transition-colors duration-500">
        <h3 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter">{title}</h3>
        <p className="text-sm md:text-base opacity-70 max-w-sm leading-relaxed font-light">{body}</p>
      </div>
    </Component>
  );
}