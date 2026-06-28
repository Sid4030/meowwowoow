import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionLayout } from "./section-layout-CLFr4smq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marketing-C7IjGRPr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var insightio_reel_default = "/assets/insightio-reel-BT30uQAg.mp4";
function MarketingPage() {
	const containerRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
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
	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLayout, {
			eyebrow: "§ Marketing",
			title: "Geospace Design.",
			intro: "End-to-end digital marketing strategy, SEO optimization, and website content curation for an architecture firm.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-24 md:space-y-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid md:grid-cols-12 gap-8 items-start fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "01 / The Role"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl leading-[1.05] tracking-tight",
									children: "Building a digital foundation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[color:var(--obsidian)]/90 leading-relaxed font-medium text-lg md:text-xl",
									children: "Led the complete website curation process, establishing a robust SEO strategy and crafting the digital narrative for Geospace Design. This involved transforming architectural portfolios into compelling digital experiences."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "md:col-span-7 font-mono text-xs md:text-sm uppercase tracking-[0.2em] space-y-5 border-l-2 border-[color:var(--cherry)] pl-6 text-[color:var(--obsidian)]/80 font-bold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Website Content Curation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Search Engine Optimization (SEO)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Digital Marketing Strategy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "— Lead Generation Campaigns" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up mx-auto w-full bg-[color:var(--obsidian)] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative transition-all duration-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:flex font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--pearl)] p-4 items-center justify-center relative border-b border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-4 flex gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-red-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-amber-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-green-400" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "opacity-70",
									children: "geospacedesign.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block aspect-[16/9] w-full overflow-hidden bg-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: "https://www.geospacedesign.com/",
									title: "Geospace Design Website",
									className: "w-full h-full bg-white",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:hidden flex flex-col items-center justify-center p-8 bg-[color:var(--obsidian)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-[300px] aspect-[1/2] border-[12px] border-[#222] rounded-[36px] overflow-hidden shadow-2xl relative mx-auto bg-white mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-6 bg-[#222] rounded-b-xl w-24 sm:w-32 mx-auto z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: "https://www.geospacedesign.com/",
										title: "Geospace Design Website Mobile",
										className: "w-full h-full bg-white",
										loading: "lazy"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.geospacedesign.com/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center w-full max-w-[300px] bg-[color:var(--cherry)] text-[color:var(--pearl)] rounded-full py-4 text-[10px] uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-transform mx-auto",
									children: "Visit Live Site ↗"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid md:grid-cols-12 gap-8 items-start fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-7 flex justify-center md:order-2 relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden bg-black rounded-[24px] relative group cursor-pointer shadow-2xl",
								onClick: toggleMute,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
										ref: videoRef,
										src: insightio_reel_default,
										className: "w-full h-full object-cover",
										autoPlay: true,
										loop: true,
										muted: true,
										playsInline: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] text-white",
											children: isMuted ? "Tap to Unmute" : "Tap to Mute"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[8px] uppercase tracking-[0.2em] text-white/80 pointer-events-none",
										children: isMuted ? "Muted" : "Unmuted"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5 space-y-4 md:order-1 pt-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-[color:var(--cherry)] flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "02 / Social Growth"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl leading-[1.05] tracking-tight",
									children: "Engagement-driven reels."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[color:var(--obsidian)]/70 leading-relaxed font-light text-base md:text-lg",
									children: "Conceptualized and produced social media reels that significantly boosted engagement metrics. Focused on showcasing the architectural process and final spaces through dynamic, trend-aware storytelling."
								})
							]
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { MarketingPage as component };
