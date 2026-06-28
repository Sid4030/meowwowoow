import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionLayout } from "./section-layout-CLFr4smq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-CBDdvbVj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";
function ContentPage() {
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
			eyebrow: "§ Content Creation",
			title: "A feed that reads like a magazine.",
			intro: "Concepting, shooting, and editing social content with a slow, considered eye. The full archive lives on Instagram.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-12 md:gap-24 items-center fade-up mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6 space-y-8 md:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-[color:var(--obsidian)]",
							children: [
								"Visit ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[color:var(--cherry)]",
									children: "@tam_anna_k"
								}),
								" for the full body of work."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-xl",
							children: "Reels, editorial grids, and slow-feed storytelling. The Instagram page is the living portfolio — updated regularly with considered visuals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: INSTAGRAM,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-3 bg-[color:var(--obsidian)] text-[color:var(--pearl)] rounded-[32px] px-8 py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-[color:var(--cherry)] transition-colors mt-4",
							children: "Open Instagram ↗"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-6 md:order-2 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-[800px] flex justify-center items-center h-[500px] md:h-[600px] mt-12 md:mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:block w-full h-full relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-12 top-12 w-[500px] aspect-[16/10] bg-[color:var(--obsidian)] rounded-t-[16px] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-[4px] border-[#333] flex flex-col z-10 transform rotate-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-1.5 h-1.5 rounded-full bg-[#111] mx-auto mb-2 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-0.5 h-0.5 rounded-full bg-[#202020]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-full flex-grow overflow-hidden rounded-[8px] bg-white border border-[#222]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: "https://www.instagram.com/tam_anna_k/embed",
											title: "Instagram Desktop",
											className: "absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none",
											loading: "lazy"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-12 right-12 z-20 pointer-events-none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: INSTAGRAM,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center justify-center bg-[color:var(--cherry)] text-[color:var(--pearl)] rounded-full px-6 py-3 text-xs uppercase tracking-widest font-mono shadow-xl pointer-events-auto hover:scale-105 transition-transform",
												children: "Follow Now"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -bottom-[20px] -left-[10%] w-[120%] h-[20px] bg-[#222] rounded-b-[16px] rounded-t-[4px] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/4 h-[4px] bg-[#1a1a1a] mt-1 rounded-b-md" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-[20%] bottom-12 w-[280px] aspect-[3/4] bg-[color:var(--obsidian)] rounded-[20px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-[2px] border-[#444] z-20 transform -rotate-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full bg-white rounded-[12px] overflow-hidden relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: "https://www.instagram.com/tam_anna_k/embed",
										title: "Instagram Tablet",
										className: "absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none",
										loading: "lazy"
									})
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:hidden w-full max-w-[400px] mx-auto h-[500px] bg-white rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#222] relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: "https://www.instagram.com/tam_anna_k/embed",
								title: "Instagram Mobile",
								className: "absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-[8px] -left-[8px] bg-white border-none",
								loading: "lazy"
							})
						})]
					})
				})]
			})
		})
	});
}
//#endregion
export { ContentPage as component };
