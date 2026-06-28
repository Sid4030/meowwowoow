import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionLayout } from "./section-layout-CLFr4smq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-Smifbqgr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pehchaan_certificate_page_0001_default = "/assets/pehchaan-certificate_page-0001-DM_893kk.jpg";
var ARTICLES = [
	{
		title: "Ground Reality of Pehchaan The Street School",
		platform: "Medium",
		href: "https://medium.com/@tamanna.khan/ground-reality-of-pehchaan-the-street-school-pehchaan-the-street-school-is-a-non-profit-2ab146cc8dab"
	},
	{
		title: "Scorching Heat Cannot Stop Education — Pehchaan's Unwavering Dedication",
		platform: "Quora",
		href: "https://www.quora.com/profile/Tamanna-Khan-610/Scorching-Heat-Cannot-Stop-Education-Pehchaan-The-Street-School-s-Unwavering-Dedication-In-the-heart-of-Delhi-where?ch=15&oid=171571087&share=17390096&srid=3f8EQJ&target_type=post"
	},
	{
		title: "Mentors Are More Than Teachers at Pehchaan The Street School",
		platform: "WordPress",
		href: "https://tamtamnini111.wordpress.com/2024/07/03/mentors-aare-more-than-teachers-at-pehchaan-the-street-school/"
	}
];
function CommunityPage() {
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.utils.toArray(".fade-up").forEach((elem) => {
			gsapWithCSS.from(elem, {
				y: 60,
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: elem,
					start: "top 85%"
				}
			});
		});
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLayout, {
			eyebrow: "§ Community Work",
			title: "Pehchaan The Street School.",
			intro: "Two-month content writing internship at the Delhi-based NGO — long-form articles (1500+ words) published weekly across Medium, Quora, and WordPress.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-24 md:space-y-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid md:grid-cols-12 gap-8 items-start fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-7 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "01 / The Role"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl leading-[1.05] tracking-tight",
									children: "Content Writing Intern, Pehchaan The Street School."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg",
									children: "Spent two months reporting from the ground and publishing weekly long-form articles — each over 1,500 words — covering the NGO's mission, its mentors, and the students it serves across Delhi."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "md:col-span-5 font-mono text-xs md:text-sm uppercase tracking-[0.2em] space-y-5 border-l-2 border-[color:var(--cherry)] pl-6 text-[color:var(--obsidian)]/80 font-bold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— 1,500+ words per article" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Published weekly" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Medium · Quora · WordPress" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— 2-month internship · Completion certified" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--cherry)] mb-8",
							children: "02 / Selected Articles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-[color:var(--obsidian)]/20 border-y border-[color:var(--obsidian)]/20",
							children: ARTICLES.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: a.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 gap-6 transition-all duration-300 px-4 md:px-8 -mx-4 md:-mx-8 hover:bg-black/5 rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-grow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-sm md:text-base text-[color:var(--obsidian)]/50 group-hover:text-[color:var(--cherry)] transition-colors",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl md:text-4xl leading-tight max-w-3xl pr-8 group-hover:text-[color:var(--cherry)] transition-colors",
										children: a.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 shrink-0 mt-4 md:mt-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--obsidian)]/70 group-hover:text-[color:var(--cherry)] transition-colors",
										children: a.platform
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-12 h-12 rounded-full border-2 border-[color:var(--obsidian)]/20 group-hover:border-[color:var(--cherry)] group-hover:bg-[color:var(--cherry)] flex items-center justify-center overflow-hidden transition-all duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-white text-lg",
											children: "→"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute transform group-hover:translate-x-4 group-hover:opacity-0 transition-all duration-300 text-[color:var(--obsidian)]/50 text-lg",
											children: "↗"
										})]
									})]
								})]
							}) }, a.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid md:grid-cols-12 gap-8 items-center fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6 space-y-4 pr-0 md:pr-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "03 / Certificate"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl leading-[1.05] tracking-tight",
									children: "Internship completion."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg max-w-sm",
									children: "Awarded after two months of consistent contribution to Pehchaan The Street School's content efforts."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pehchaan_certificate_page_0001_default,
								alt: "Pehchaan internship certificate",
								className: "w-full max-w-[600px] h-auto rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.2)]",
								loading: "lazy"
							})
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { CommunityPage as component };
