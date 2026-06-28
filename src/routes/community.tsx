import { createFileRoute } from "@tanstack/react-router";
import { SectionLayout } from "@/components/section-layout";
import certificateImg from "@/assets/pehchaan-certificate_page-0001.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community Work — Tamanna Khan" },
      { name: "description", content: "Content writing internship at Pehchaan The Street School — weekly long-form articles published on Medium, Quora, and WordPress." },
      { property: "og:title", content: "Community Work — Tamanna Khan" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const ARTICLES = [
  {
    title: "Ground Reality of Pehchaan The Street School",
    platform: "Medium",
    href: "https://medium.com/@tamanna.khan/ground-reality-of-pehchaan-the-street-school-pehchaan-the-street-school-is-a-non-profit-2ab146cc8dab",
  },
  {
    title: "Scorching Heat Cannot Stop Education — Pehchaan's Unwavering Dedication",
    platform: "Quora",
    href: "https://www.quora.com/profile/Tamanna-Khan-610/Scorching-Heat-Cannot-Stop-Education-Pehchaan-The-Street-School-s-Unwavering-Dedication-In-the-heart-of-Delhi-where?ch=15&oid=171571087&share=17390096&srid=3f8EQJ&target_type=post",
  },
  {
    title: "Mentors Are More Than Teachers at Pehchaan The Street School",
    platform: "WordPress",
    href: "https://tamtamnini111.wordpress.com/2024/07/03/mentors-aare-more-than-teachers-at-pehchaan-the-street-school/",
  },
];

function CommunityPage() {
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
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <SectionLayout
        eyebrow="§ Community Work"
        title="Pehchaan The Street School."
        intro="Two-month content writing internship at the Delhi-based NGO — long-form articles (1500+ words) published weekly across Medium, Quora, and WordPress."
      >
        <div className="space-y-24 md:space-y-36">
          
          <section className="grid md:grid-cols-12 gap-8 items-start fade-up">
            <div className="md:col-span-7 space-y-5">
              <span className="font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
                01 / The Role
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Content Writing Intern, Pehchaan The Street School.
              </h2>
              <p className="text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg">
                Spent two months reporting from the ground and publishing weekly long-form
                articles — each over 1,500 words — covering the NGO's mission, its mentors,
                and the students it serves across Delhi.
              </p>
            </div>
            <ul className="md:col-span-5 font-mono text-xs md:text-sm uppercase tracking-[0.2em] space-y-5 border-l-2 border-[color:var(--cherry)] pl-6 text-[color:var(--obsidian)]/80 font-bold">
              <li>— 1,500+ words per article</li>
              <li>— Published weekly</li>
              <li>— Medium · Quora · WordPress</li>
              <li>— 2-month internship · Completion certified</li>
            </ul>
          </section>

          <section className="fade-up">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--cherry)] mb-8">02 / Selected Articles</div>
            <ul className="divide-y divide-[color:var(--obsidian)]/20 border-y border-[color:var(--obsidian)]/20">
              {ARTICLES.map((a, i) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 gap-6 transition-all duration-300 px-4 md:px-8 -mx-4 md:-mx-8 hover:bg-black/5 rounded-2xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-grow">
                      <span className="font-mono text-sm md:text-base text-[color:var(--obsidian)]/50 group-hover:text-[color:var(--cherry)] transition-colors">0{i + 1}</span>
                      <span className="font-display text-2xl md:text-4xl leading-tight max-w-3xl pr-8 group-hover:text-[color:var(--cherry)] transition-colors">{a.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0 mt-4 md:mt-0">
                      <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--obsidian)]/70 group-hover:text-[color:var(--cherry)] transition-colors">{a.platform}</span>
                      {/* Animated Arrow */}
                      <div className="w-12 h-12 rounded-full border-2 border-[color:var(--obsidian)]/20 group-hover:border-[color:var(--cherry)] group-hover:bg-[color:var(--cherry)] flex items-center justify-center overflow-hidden transition-all duration-300">
                        <span className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-white text-lg">→</span>
                        <span className="absolute transform group-hover:translate-x-4 group-hover:opacity-0 transition-all duration-300 text-[color:var(--obsidian)]/50 text-lg">↗</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid md:grid-cols-12 gap-8 items-center fade-up">
            <div className="md:col-span-6 space-y-4 pr-0 md:pr-12">
              <span className="font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[color:var(--cherry)]" />
                03 / Certificate
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">Internship completion.</h2>
              <p className="text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg max-w-sm">
                Awarded after two months of consistent contribution to Pehchaan The Street
                School's content efforts.
              </p>
            </div>
            <div className="md:col-span-6 flex justify-center">
               <img 
                 src={certificateImg} 
                 alt="Pehchaan internship certificate" 
                 className="w-full max-w-[600px] h-auto rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.2)]" 
                 loading="lazy" 
               />
            </div>
          </section>
        </div>
      </SectionLayout>
    </div>
  );
}
