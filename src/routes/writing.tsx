import { createFileRoute } from "@tanstack/react-router";
import { SectionLayout } from "@/components/section-layout";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import bookImg from "@/assets/book.jpg";
gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Tamanna Khan" },
      { name: "description", content: "The Truth of My Life — a published collection of 40 poems by Tamanna Khan, available on Amazon." },
      { property: "og:title", content: "Writing — Tamanna Khan" },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: WritingPage,
});

function WritingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the quote words
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".quote-section",
        start: "center center",
        end: "+=150%",
        scrub: 1,
        pin: true,
      }
    });

    tl.to(".quote-word", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
      duration: 1
    });

    tl.to(".quote-author", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Remove the fade-out step so the text remains visible until scrolling past the pinned section

    // Fade up the book section when it enters
    gsap.from(".book-section", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".book-section",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  // Split quote into words for GSAP staggered reveal
  const quote1 = "For neither of us were made to obey,";
  const quote2 = "But to paint a world in our own way.";

  return (
    <div ref={containerRef}>
      <SectionLayout
        eyebrow="§ Writing"
        title="A book of forty poems."
        intro="Published author. Long-time writer of essays, brand copy, and quiet observations."
      >
        
        {/* Animated Quote Section */}
        <div className="quote-section relative min-h-[60vh] md:min-h-[80vh] w-full flex flex-col justify-center items-center px-4 md:px-12 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] md:rounded-[60px] mb-12 md:mb-24 overflow-hidden shadow-2xl">
          <div className="quote-wrapper w-full max-w-5xl mx-auto text-center flex flex-col items-center py-16 md:py-0">
            <h2 className="font-display text-[8vw] md:text-[6vw] lg:text-7xl leading-[1.2] tracking-tighter italic text-[color:var(--cherry)] flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1">
              {quote1.split(" ").map((word, i) => (
                <span key={i} className="quote-word inline-block opacity-0 translate-y-8">{word}</span>
              ))}
            </h2>
            <h2 className="font-display text-[8vw] md:text-[6vw] lg:text-7xl leading-[1.2] tracking-tighter mt-2 md:mt-4 flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1">
              {quote2.split(" ").map((word, i) => (
                <span key={i} className="quote-word inline-block opacity-0 translate-y-8">{word}</span>
              ))}
            </h2>
            <p className="quote-author mt-8 md:mt-12 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-0 translate-y-4 text-[color:var(--pearl)]/60">
              — The Truth of My Life
            </p>
          </div>
        </div>

        {/* Book Section */}
        <article className="book-section grid md:grid-cols-12 gap-10 md:gap-16 items-center pt-12">
          <div className="md:col-span-5">
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-[16px] md:rounded-[24px] shadow-2xl transition-transform duration-500 hover:scale-105 border-[6px] border-[color:var(--sand)] bg-black">
              <img 
                src={bookImg} 
                alt="The Truth of My Life by Tamanna Khan" 
                className="block w-full h-auto" 
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <span className="font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
              01 / Published Book
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              <span className="italic">The Truth of My Life</span>
            </h2>
            <p className="text-[color:var(--obsidian)]/70 leading-relaxed text-base md:text-xl font-light">
              A collection of <span className="font-medium text-[color:var(--obsidian)]">forty poems</span> — written
              over years of quiet observation. It explores the tension between obedience and creating your own path. Out now on Amazon India.
            </p>
            <a
              href="https://www.amazon.in/dp/1807155781/ref=sr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] px-8 py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-[color:var(--cherry)] transition-colors mt-4"
            >
              Buy on Amazon ↗
            </a>
          </div>
        </article>
      </SectionLayout>
    </div>
  );
}
