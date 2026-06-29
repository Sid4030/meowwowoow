import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import tamannaPortrait from "@/assets/tamanna-portrait.jpg";
import tamanna5 from "@/assets/tamanna-5.jpeg";
import tamannaSmile from "@/assets/tamanna-smile.jpg";
import tamanna1 from "@/assets/tamanna-1.jpeg";
import tamanna10 from "@/assets/Tamanna10.jpeg";
import tamanna3 from "@/assets/tamanna-3.jpeg";
import tamannaH1 from "@/assets/Tamanna-horizontal1.jpeg";
import tamannaH2 from "@/assets/Tamanna-horizontal2.jpeg";
import tamannaH3 from "@/assets/Tamanna-horizontal3.jpeg";

gsap.registerPlugin(ScrollTrigger);

// LoadingScreen removed as requested

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
  
  const heroImages = [tamannaH1, tamannaH2, tamanna5, tamannaH3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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

    // 2. Zoom-Through Perspective Section (Responsive DOM-based)
    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".zoom-section",
        start: "top top",
        end: "+=150%", 
        scrub: 1,
        pin: true,
        pinSpacing: true, 
        invalidateOnRefresh: true, // Recalculates function values on resize!
      }
    });

    const getTargetRect = () => {
      const ph = document.querySelector(".zoom-image-placeholder");
      const section = document.querySelector(".zoom-section");
      if (!ph || !section) return { width: 0, height: 0, x: 0, y: 0 };
      const phRect = ph.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      return {
        width: phRect.width,
        height: phRect.height,
        x: phRect.left - sectionRect.left,
        y: phRect.top - sectionRect.top
      };
    };

    // Animate image natively moving from fullscreen to its flexbox placeholder position
    zoomTl.to(".zoom-image-wrapper", {
      width: () => getTargetRect().width,
      height: () => getTargetRect().height,
      x: () => getTargetRect().x,
      y: () => getTargetRect().y,
      borderRadius: "24px",
      ease: "power2.inOut",
      duration: 1.5
    }, 0);

    // Pop up the decorative flowers
    zoomTl.to(".flower-popup", {
      opacity: 1,
      scale: 1,
      rotation: "+=15",
      ease: "back.out(1.5)",
      duration: 0.8,
      stagger: 0.15
    }, "-=0.2");

    // Reveal the text block
    zoomTl.to(".zoom-reveal-block", { 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out" 
    }, "-=0.5");

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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <>
    <div ref={containerRef} className="bg-[#f2efe9] text-[color:var(--obsidian)] selection:bg-[color:var(--cherry)] selection:text-[color:var(--pearl)] overflow-x-hidden">
      
      <Navbar />

      {/* EXTRAORDINARY HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-end bg-[color:var(--obsidian)] overflow-hidden pt-32 pb-16 px-6 md:px-12">
        {/* Slideshow Background */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
           {heroImages.map((src, idx) => (
             <img 
               key={idx}
               src={src}
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
               alt={`Slide ${idx}`}
             />
           ))}
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[color:var(--obsidian)] via-[color:var(--obsidian)]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-end w-full h-full flex-grow">
          <div className="md:col-span-12 flex flex-col justify-end">
            <h1 className="font-display text-[18vw] md:text-[16vw] leading-[0.75] tracking-tighter uppercase text-[color:var(--cherry)] max-w-full">
              {/* Sized down slightly so the last 'A' is not clipped or overflowing horizontally */}
              <div className="pb-2 md:pb-4 pr-4 md:pr-12"><div className="hero-text inline-block">Tamanna</div></div>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between mt-4 md:mt-8 gap-8">
              <h2 className="font-display text-[18vw] md:text-[12vw] leading-[0.75] tracking-tighter italic text-[color:var(--pearl)]">
                <div className="pb-4 pr-8"><div className="hero-text inline-block">Khan.</div></div>
              </h2>
              <div className="max-w-xs space-y-6 pb-4">
                <p className="text-base md:text-lg font-light leading-relaxed fade-up text-[color:var(--pearl)] drop-shadow-md">
                  Content & marketing associate building brand worlds through words, visuals, and quiet strategy.
                </p>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] border-t border-[color:var(--pearl)]/20 pt-4 fade-up text-[color:var(--pearl)]/80">
                  <span>Vol. 01 / 2026</span>
                  <span>Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZOOM-THROUGH PERSPECTIVE SECTION (Inherently Responsive) */}
      <section className="zoom-section relative h-[100svh] bg-transparent flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-24 overflow-hidden px-4 xl:px-24">
        
        {/* Decorative background elements for laptop view to fill empty sides */}
        <div className="hidden xl:block absolute left-[-5vw] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none -z-10 rotate-12">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="var(--cherry)">
             <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0" />
          </svg>
        </div>
        <div className="hidden xl:block absolute right-[2vw] top-1/3 opacity-30 pointer-events-none -z-10 rotate-12">
          {/* Sunflower graphic */}
          <svg width="250" height="250" viewBox="0 0 100 100" fill="var(--obsidian)">
             {Array.from({length: 12}).map((_, i) => (
                <path key={i} d="M47 25 Q50 5 53 25 Q50 40 47 25" fill="var(--cherry)" transform={`rotate(${i * 30} 50 50)`} />
             ))}
             <circle cx="50" cy="50" r="15" fill="var(--obsidian)" />
          </svg>
        </div>

        {/* The Native CSS Placeholder - dynamically scales down aggressively on short mobile screens */}
        <div className="zoom-image-placeholder relative w-full max-w-[220px] sm:max-w-sm xl:max-w-md max-h-[35svh] xl:max-h-none aspect-[4/5] opacity-0 pointer-events-none flex-shrink-0"></div>

        {/* The text block - Native CSS positioning next to or below the placeholder */}
        <div className="zoom-reveal-block w-full max-w-md opacity-0 z-20 text-center xl:text-left mx-auto xl:mx-0">
          {/* Decorative Watermark */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 font-display text-[100px] xl:text-[200px] text-[color:var(--obsidian)]/5 leading-none select-none -z-10">
            T.
          </div>

          <div className="font-mono text-[9px] xl:text-[10px] uppercase tracking-[0.25em] text-[color:var(--cherry)] mb-2 xl:mb-6 flex items-center justify-center xl:justify-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--cherry)]" />
            About Tamanna
          </div>
          <h2 className="font-display text-2xl sm:text-4xl xl:text-5xl leading-[1.05] text-[color:var(--obsidian)] mb-2 xl:mb-8">
            <div>It's not just a Story,</div>
            <div>it's a <span className="italic text-[color:var(--cherry)]">journey.</span></div>
          </h2>
          <div className="space-y-1.5 sm:space-y-4 text-[11px] sm:text-sm leading-[1.4] xl:leading-relaxed opacity-80 font-light relative px-2 xl:px-0">
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

        {/* The actual image that starts Full Screen Absolute and shrinks into the Placeholder */}
        <div className="zoom-image-wrapper absolute top-0 left-0 w-[100vw] h-[100vh] z-20 flex items-center justify-center">
          <div className="w-full h-full relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden" style={{ borderRadius: "inherit" }}>
            <img 
              src={tamannaPortrait} 
              alt="Tamanna Khan Portrait" 
              className="w-full h-full object-cover object-[center_top]" 
            />
            {/* Subtle inner shadow for a premium feel */}
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] pointer-events-none" style={{ borderRadius: "inherit" }}></div>
          </div>
          
          {/* Flower Popups placed outside the hidden overflow, so they can peek out! */}
          <svg className="flower-popup absolute -top-12 -left-12 w-28 h-28 text-[color:var(--cherry)] opacity-0 -z-10 drop-shadow-xl" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0" />
            <circle cx="50" cy="50" r="10" fill="var(--pearl)" />
          </svg>
          <svg className="flower-popup absolute -bottom-16 -right-16 w-36 h-36 text-[color:var(--obsidian)] opacity-0 -z-10 rotate-90 drop-shadow-xl" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0" />
            <circle cx="50" cy="50" r="12" fill="var(--pearl)" />
          </svg>
        </div>
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
        <div className="w-full xl:w-5/12 min-h-[40vh] xl:min-h-[auto] xl:h-auto relative overflow-hidden shrink-0 flex items-center justify-center p-8 xl:p-0">
           {/* Desktop: Full bleed */}
           <div className="hidden xl:block absolute inset-0 z-0 overflow-hidden">
             <img src={tamanna3} alt="Tamanna" className="absolute inset-0 w-full h-[150%] -top-[25%] object-cover object-[center_top] parallax-image" />
           </div>
           
           {/* Mobile/Tablet: Centered contained framed image */}
           <div className="xl:hidden w-full max-w-sm aspect-[4/5] rounded-[32px] overflow-hidden relative z-10 shadow-2xl mt-12 mb-8 mx-auto">
             <img src={tamanna3} alt="Tamanna" className="w-full h-[120%] -top-[10%] absolute object-cover object-[center_top] parallax-image" />
           </div>

           <div className="hidden xl:block absolute inset-0 bg-gradient-to-r from-[color:var(--obsidian)] via-[color:var(--obsidian)]/40 to-transparent opacity-100 z-10" />
        </div>

        {/* Text side */}
        <div className="w-full xl:w-7/12 p-8 md:p-16 xl:p-24 flex flex-col justify-center xl:justify-center items-center xl:items-start text-center xl:text-left relative z-20 text-[color:var(--pearl)] bg-[color:var(--obsidian)] xl:bg-transparent -mt-8 xl:mt-0">
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
             <path d="M -100 100 Q 300 300 800 -100" fill="none" stroke="var(--cherry)" strokeWidth="2"/>
             <path d="M -100 200 Q 400 400 900 0" fill="none" stroke="var(--cherry)" strokeWidth="2"/>
             <circle cx="80%" cy="80%" r="300" fill="none" stroke="var(--cherry)" strokeWidth="1" strokeDasharray="10,10"/>
          </svg>

          <div className="relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--sand)] flex items-center justify-center xl:justify-start gap-3 mb-8 fade-up">
            <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
            Who I Am
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl fade-up">
            Building Content that <span className="italic text-[color:var(--cherry)]">Matters!</span>
          </h2>
          
          <p className="mt-8 text-sm md:text-lg text-[color:var(--pearl)]/70 leading-relaxed font-light max-w-xl fade-up">
            I don’t just create content—I craft compelling brand stories that connect with audiences and leave a lasting impact. I develop creative marketing strategies that help brands and businesses stand out, increase their visibility, and build a memorable presence. By blending storytelling with original ideas, I transform concepts into engaging campaigns that capture attention and drive meaningful engagement.
          </p>
          
          <div className="flex flex-wrap justify-center xl:justify-start gap-8 md:gap-16 mt-12 fade-up">
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
    </>
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