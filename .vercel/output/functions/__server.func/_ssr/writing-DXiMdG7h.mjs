import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionLayout } from "./section-layout-CLFr4smq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writing-DXiMdG7h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var book_default = "/assets/book-CD8X1euY.jpg";
function WritingPage() {
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		const tl = gsapWithCSS.timeline({ scrollTrigger: {
			trigger: ".quote-section",
			start: "center center",
			end: "+=150%",
			scrub: 1,
			pin: true
		} });
		tl.to(".quote-word", {
			opacity: 1,
			y: 0,
			stagger: .1,
			ease: "power2.out",
			duration: 1
		});
		tl.to(".quote-author", {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power2.out"
		});
		gsapWithCSS.from(".book-section", {
			opacity: 0,
			y: 100,
			duration: 1,
			scrollTrigger: {
				trigger: ".book-section",
				start: "top 80%"
			}
		});
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionLayout, {
			eyebrow: "§ Writing",
			title: "A book of forty poems.",
			intro: "Published author. Long-time writer of essays, brand copy, and quiet observations.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "quote-section relative min-h-[60vh] md:min-h-[80vh] w-full flex flex-col justify-center items-center px-4 md:px-12 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] md:rounded-[60px] mb-12 md:mb-24 overflow-hidden shadow-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quote-wrapper w-full max-w-5xl mx-auto text-center flex flex-col items-center py-16 md:py-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-[8vw] md:text-[6vw] lg:text-7xl leading-[1.2] tracking-tighter italic text-[color:var(--cherry)] flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1",
							children: "For neither of us were made to obey,".split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quote-word inline-block opacity-0 translate-y-8",
								children: word
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-[8vw] md:text-[6vw] lg:text-7xl leading-[1.2] tracking-tighter mt-2 md:mt-4 flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1",
							children: "But to paint a world in our own way.".split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quote-word inline-block opacity-0 translate-y-8",
								children: word
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "quote-author mt-8 md:mt-12 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-0 translate-y-4 text-[color:var(--pearl)]/60",
							children: "— The Truth of My Life"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "book-section grid md:grid-cols-12 gap-10 md:gap-16 items-center pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full max-w-sm mx-auto overflow-hidden rounded-[16px] md:rounded-[24px] shadow-2xl transition-transform duration-500 hover:scale-105 border-[6px] border-[color:var(--sand)] bg-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: book_default,
							alt: "The Truth of My Life by Tamanna Khan",
							className: "block w-full h-auto"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "01 / Published Book"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl leading-[1.02] tracking-tight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "The Truth of My Life"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[color:var(--obsidian)]/70 leading-relaxed text-base md:text-xl font-light",
							children: [
								"A collection of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-[color:var(--obsidian)]",
									children: "forty poems"
								}),
								" — written over years of quiet observation. It explores the tension between obedience and creating your own path. Out now on Amazon India."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.amazon.in/dp/1807155781/ref=sr",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-3 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] px-8 py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-[color:var(--cherry)] transition-colors mt-4",
							children: "Buy on Amazon ↗"
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { WritingPage as component };
