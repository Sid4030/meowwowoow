import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/footer-bpbKH_Z2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INSTAGRAM$1 = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";
function Navbar() {
	const [isIslandOpen, setIsIslandOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.to(".nav-logo-char", {
			y: -6,
			duration: .4,
			ease: "sine.inOut",
			yoyo: true,
			repeat: -1,
			stagger: .08
		});
	}, { scope: containerRef });
	(0, import_react.useEffect)(() => {
		if (isIslandOpen) {
			gsapWithCSS.to(".dynamic-island", {
				height: "380px",
				borderRadius: "32px",
				duration: .6,
				ease: "elastic.out(1, 0.7)"
			});
			gsapWithCSS.to(".island-links", {
				opacity: 1,
				pointerEvents: "auto",
				duration: .4,
				delay: .2
			});
			gsapWithCSS.to(".island-header", {
				opacity: 0,
				display: "none",
				duration: .2
			});
		} else {
			gsapWithCSS.to(".dynamic-island", {
				height: "56px",
				borderRadius: "100px",
				duration: .5,
				ease: "power3.inOut"
			});
			gsapWithCSS.to(".island-links", {
				opacity: 0,
				pointerEvents: "none",
				duration: .2
			});
			gsapWithCSS.to(".island-header", {
				opacity: 1,
				display: "flex",
				duration: .3,
				delay: .2
			});
		}
	}, [isIslandOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "hidden md:flex fixed top-0 inset-x-0 z-50 mix-blend-difference text-white px-12 h-24 items-center justify-between pointer-events-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-2xl tracking-tighter flex",
					children: ["Tamanna".split("").map((char, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nav-logo-char inline-block",
						children: char
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nav-logo-char inline-block text-[color:var(--cherry)]",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.25em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/marketing",
							className: "hover:text-[color:var(--cherry)] transition-colors",
							children: "Marketing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/content",
							className: "hover:text-[color:var(--cherry)] transition-colors",
							children: "Content"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/writing",
							className: "hover:text-[color:var(--cherry)] transition-colors",
							children: "Writing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/community",
							className: "hover:text-[color:var(--cherry)] transition-colors",
							children: "Community"
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-[10px] font-mono uppercase tracking-[0.25em] hover:text-[color:var(--cherry)] transition-colors",
					children: "Contact"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden fixed top-6 inset-x-0 z-[100] flex justify-center pointer-events-none px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dynamic-island w-full bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 text-[color:var(--pearl)] flex flex-col items-center justify-start overflow-hidden pointer-events-auto shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative",
				style: {
					height: "56px",
					borderRadius: "100px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "island-header absolute inset-0 flex items-center justify-between px-6 cursor-pointer",
					onClick: () => !isIslandOpen && setIsIslandOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-display text-xl tracking-tight z-10",
						onClick: (e) => e.stopPropagation(),
						children: "Tamanna"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5 opacity-80 z-10 p-2 -mr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-white" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "island-links opacity-0 pointer-events-none w-full h-full flex flex-col p-6 px-8 relative bg-[#1a1a1a]/95",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center mb-8 border-b border-white/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "font-display text-xl tracking-tight",
								onClick: () => setIsIslandOpen(false),
								children: "Tamanna"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex flex-col gap-1.5 opacity-60 hover:opacity-100 p-2 -mr-2 relative w-6 h-6 justify-center items-center",
								onClick: () => setIsIslandOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-white absolute rotate-45" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-[1.5px] bg-white absolute -rotate-45" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-6 font-display text-4xl tracking-tight mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/marketing",
									className: "hover:text-[color:var(--cherry)] transition-colors",
									onClick: () => setIsIslandOpen(false),
									children: "Marketing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/content",
									className: "hover:text-[color:var(--cherry)] transition-colors",
									onClick: () => setIsIslandOpen(false),
									children: "Content"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/writing",
									className: "hover:text-[color:var(--cherry)] transition-colors",
									onClick: () => setIsIslandOpen(false),
									children: "Writing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/community",
									className: "hover:text-[color:var(--cherry)] transition-colors",
									onClick: () => setIsIslandOpen(false),
									children: "Community"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] font-bold opacity-60 pt-4 border-t border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: (e) => {
									e.stopPropagation();
									setIsIslandOpen(false);
								},
								children: "Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTAGRAM$1,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Instagram ↗"
							})]
						})
					]
				})]
			})
		})]
	});
}
var tamanna_5_default = "/assets/tamanna-5-CYfCUc40.jpeg";
var INSTAGRAM = "https://www.instagram.com/tam_anna_k?igsh=dzhzczFpd2J1Z3J6";
var LINKEDIN = "https://www.linkedin.com/in/tamanna-khan-84563b293";
var EMAIL = "tamtamnini111@gmail.com";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "bg-[color:var(--sand)] text-[color:var(--obsidian)] py-24 md:py-32 relative overflow-x-hidden flex flex-col justify-between min-h-[90svh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full overflow-hidden border-b border-[color:var(--obsidian)]/10 py-4 opacity-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--obsidian)] animate-[marquee_20s_linear_infinite]",
					children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mx-8 flex items-center gap-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open for work" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--cherry)]",
								children: "✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Let's collaborate" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--cherry)]",
								children: "✦"
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 mt-12 md:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7 fade-up relative z-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter",
						children: ["Let's make ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[color:var(--cherry)]",
							children: "something."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5 space-y-12 font-mono text-xs uppercase tracking-[0.2em] fade-up relative z-20 md:text-right flex flex-col md:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "opacity-50 mb-2",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "hover:text-[color:var(--cherry)] transition-colors break-all",
							children: EMAIL
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "opacity-50 mb-2",
							children: "Socials"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTAGRAM,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-[color:var(--cherry)] transition-colors",
								children: "Instagram ↗"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LINKEDIN,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-[color:var(--cherry)] transition-colors",
								children: "LinkedIn ↗"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "opacity-50 mb-2",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Delhi NCR, India" })] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full flex flex-col justify-end items-center mt-20 md:mt-0 flex-grow fade-up overflow-x-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-full flex justify-start items-end pb-16 md:pb-0 overflow-x-hidden w-screen h-[50vh] md:h-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max whitespace-nowrap font-display text-[35vw] md:text-[26vw] leading-[0.7] tracking-tighter text-[color:var(--cherry)] opacity-90 mix-blend-multiply relative z-10 animate-[marquee_25s_linear_infinite]",
						children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pr-12",
							children: "Tamanna"
						}, i))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 -translate-x-1/2 bottom-[25%] lg:left-[30%] lg:translate-x-0 lg:bottom-[15%] lg:top-auto w-[45vw] max-w-[220px] lg:w-[25vw] lg:max-w-[300px] aspect-[3/4] overflow-hidden rounded-[24px] lg:rounded-[32px] rotate-[-6deg] shadow-2xl z-30 transition-transform duration-500 hover:rotate-0 hover:scale-105 border-[6px] border-[color:var(--sand)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: tamanna_5_default,
					alt: "Tamanna",
					className: "w-full h-full object-cover object-[center_top]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-12 w-full absolute bottom-8 inset-x-0 pt-8 flex justify-between font-mono text-[9px] uppercase tracking-[0.3em] opacity-60 z-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Designed with care" })]
			})
		]
	});
}
//#endregion
export { Navbar as n, tamanna_5_default as r, Footer as t };
