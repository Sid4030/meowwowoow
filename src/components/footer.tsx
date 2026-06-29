import tamanna5 from "@/assets/tamanna-5.jpeg";

const INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";
const LINKEDIN = "https://www.linkedin.com/in/tamanna-khan-84563b293";
const EMAIL = "tamtamnini111@gmail.com";

export function Footer() {
  return (
    <section id="contact" className="bg-[color:var(--sand)] text-[color:var(--obsidian)] py-24 md:py-32 relative overflow-hidden flex flex-col justify-between min-h-[90svh]">
      {/* Ambient Animated Background Blob */}
      <div className="absolute top-[20%] left-[20%] w-[60vw] md:w-[600px] h-[60vw] md:h-[600px] bg-[color:var(--cherry)] rounded-full mix-blend-multiply filter blur-[100px] md:blur-[150px] opacity-20 animate-[spin_30s_linear_infinite]" style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}></div>
      <div className="absolute top-[40%] right-[10%] w-[50vw] md:w-[500px] h-[50vw] md:h-[500px] bg-[#d4c9b3] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-40 animate-[spin_40s_linear_infinite_reverse]" style={{ borderRadius: "60% 40% 30% 70% / 50% 30% 70% 40%" }}></div>

      {/* Decorative Top Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-[color:var(--obsidian)]/10 py-4 opacity-50">
        <div className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--obsidian)] animate-[marquee_20s_linear_infinite]">
           {Array.from({ length: 4 }).map((_, i) => (
             <span key={i} className="mx-8 flex items-center gap-16">
               <span>Open for work</span>
               <span className="text-[color:var(--cherry)]">✦</span>
               <span>Let's collaborate</span>
               <span className="text-[color:var(--cherry)]">✦</span>
             </span>
           ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 mt-12 md:mt-24">
        <div className="md:col-span-7 fade-up relative z-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter">
            Let's make <span className="italic text-[color:var(--cherry)]">something.</span>
          </h2>
        </div>
        
        <div className="md:col-span-5 space-y-12 font-mono text-xs uppercase tracking-[0.2em] fade-up relative z-20 md:text-right flex flex-col md:items-end">
          <div>
            <div className="opacity-50 mb-2">Email</div>
            <a href={`mailto:${EMAIL}`} className="hover:text-[color:var(--cherry)] transition-colors break-all">
              {EMAIL}
            </a>
          </div>
          <div>
            <div className="opacity-50 mb-2">Socials</div>
            <div className="flex flex-col gap-2 md:items-end">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--cherry)] transition-colors">Instagram ↗</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--cherry)] transition-colors">LinkedIn ↗</a>
            </div>
          </div>
          <div>
            <div className="opacity-50 mb-2">Location</div>
            <div>Delhi NCR, India</div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile & Desktop Footer Elements */}
      <div className="relative w-full flex flex-col justify-end items-center mt-20 md:mt-0 flex-grow fade-up overflow-x-hidden">
        
        {/* Dynamic Massive Marquee text for both mobile and desktop instead of static text */}
        <div className="relative w-full flex justify-start items-end pb-16 md:pb-0 overflow-x-hidden w-screen h-[50vh] md:h-auto">
          <div className="flex w-max whitespace-nowrap font-display text-[35vw] md:text-[26vw] leading-[0.7] tracking-tighter text-[color:var(--cherry)] opacity-90 mix-blend-multiply relative z-10 animate-[marquee_25s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
               <span key={i} className="pr-12">Tamanna</span>
            ))}
          </div>
        </div>
      </div>

      {/* Overlapping Image floating over the entire footer */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[25%] lg:left-[30%] lg:translate-x-0 lg:bottom-[15%] lg:top-auto w-[45vw] max-w-[220px] lg:w-[25vw] lg:max-w-[300px] aspect-[3/4] overflow-hidden rounded-[24px] lg:rounded-[32px] rotate-[-6deg] shadow-2xl z-30 transition-transform duration-500 hover:rotate-0 hover:scale-105 border-[6px] border-[color:var(--sand)]">
         <img src={tamanna5} alt="Tamanna" className="w-full h-full object-cover object-[center_top]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full absolute bottom-8 inset-x-0 pt-8 flex justify-between font-mono text-[9px] uppercase tracking-[0.3em] opacity-60 z-20">
        <span>© 2026</span>
        <span>Designed with care</span>
      </div>
    </section>
  );
}
