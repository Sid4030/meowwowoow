import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, r as tamanna_5_default, t as Footer } from "./footer-bpbKH_Z2.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l_SpH_SB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tamanna_portrait_default = "/assets/tamanna-portrait-eRh4lZvD.jpg";
var tamanna_smile_default = "/assets/tamanna-smile-CSs9SgCS.jpg";
var tamanna_1_default = "/assets/tamanna-1-C5AwKmqH.jpeg";
var Tamanna10_default = "/assets/Tamanna10-B5OiADhY.jpeg";
function Index() {
	const containerRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.from(".hero-text", {
			y: "100%",
			opacity: 0,
			duration: 1.5,
			ease: "power4.out",
			stagger: .1,
			delay: .2
		});
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);
		window.addEventListener("load", () => ScrollTrigger.refresh());
		gsapWithCSS.fromTo(".topo-line", {
			strokeDasharray: 2e3,
			strokeDashoffset: 2e3
		}, {
			strokeDashoffset: 0,
			duration: 3,
			ease: "power2.out",
			stagger: .1
		});
		let mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 769px)", () => {
			const zoomTl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".zoom-section",
				start: "top top",
				end: "+=150%",
				scrub: 1,
				pin: true
			} });
			zoomTl.to(".zoom-svg-text", {
				scale: 150,
				xPercent: 110,
				yPercent: 15,
				transformOrigin: "center center",
				ease: "power2.inOut",
				duration: 2
			});
			zoomTl.to(".zoom-overlay-rect", {
				opacity: 0,
				duration: .2
			}, "-=1.4");
			zoomTl.to(".zoom-image-wrapper", {
				width: "30vw",
				height: "55vh",
				x: "-20vw",
				y: "0",
				borderRadius: "24px",
				ease: "power2.inOut",
				duration: 1.5
			}, "-=1.0");
			zoomTl.fromTo(".zoom-reveal-block", {
				opacity: 0,
				x: 50
			}, {
				opacity: 1,
				x: 0,
				duration: 1,
				ease: "power2.out"
			}, "-=1");
			zoomTl.fromTo(".zoom-reveal-line", {
				y: 30,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				stagger: .2,
				duration: 1,
				ease: "power3.out"
			}, "-=0.5");
		});
		mm.add("(max-width: 768px)", () => {
			const zoomTl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".zoom-section",
				start: "top top",
				end: "+=150%",
				scrub: 1,
				pin: true
			} });
			zoomTl.to(".zoom-svg-text", {
				scale: 100,
				xPercent: 0,
				yPercent: 0,
				transformOrigin: "center center",
				ease: "power2.inOut",
				duration: 2
			});
			zoomTl.to(".zoom-overlay-rect", {
				opacity: 0,
				duration: .2
			}, "-=1.4");
			gsapWithCSS.matchMedia(containerRef).add({
				isDesktop: "(min-width: 1280px)",
				isMobile: "(max-width: 1279px)"
			}, (context) => {
				let { isDesktop } = context.conditions;
				zoomTl.to(".zoom-image-wrapper", {
					width: isDesktop ? "45vw" : "90vw",
					height: isDesktop ? "80vh" : "40vh",
					x: isDesktop ? "-25vw" : "0",
					y: isDesktop ? "0" : "-22vh",
					borderRadius: "24px",
					ease: "power2.inOut",
					duration: 1.5
				});
				zoomTl.fromTo(".zoom-reveal-block", {
					opacity: 0,
					y: 50
				}, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power2.out"
				}, "-=1");
				zoomTl.fromTo(".zoom-reveal-line", {
					y: 20,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					stagger: .2,
					duration: 1,
					ease: "power3.out"
				}, "-=0.5");
			});
		});
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
		gsapWithCSS.utils.toArray(".parallax-image").forEach((img) => {
			gsapWithCSS.fromTo(img, { yPercent: -15 }, {
				yPercent: 15,
				ease: "none",
				scrollTrigger: {
					trigger: img.parentElement,
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			});
		});
		const wrapper = document.querySelector(".disciplines-wrapper");
		const sections = gsapWithCSS.utils.toArray(".discipline-card");
		if (wrapper && sections.length > 0) gsapWithCSS.to(wrapper, {
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
		return () => mm.revert();
	}, { scope: containerRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "bg-[#f2efe9] text-[color:var(--obsidian)] selection:bg-[color:var(--cherry)] selection:text-[color:var(--pearl)] overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[100svh] flex flex-col justify-end bg-[color:var(--sand)]/30 overflow-hidden pt-32 pb-16 px-6 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "100%",
						height: "100%",
						xmlns: "http://www.w3.org/2000/svg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 200 Q 300 400 800 100 T 1500 500",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 250 Q 300 450 800 150 T 1500 550",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 300 Q 300 500 800 200 T 1500 600",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 350 Q 300 550 800 250 T 1500 650",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 400 Q 300 600 800 300 T 1500 700",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								className: "topo-line",
								d: "M -100 450 Q 300 650 800 350 T 1500 750",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "topo-line",
								cx: "70%",
								cy: "40%",
								r: "200",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1",
								strokeDasharray: "5,5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "topo-line",
								cx: "70%",
								cy: "40%",
								r: "250",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1",
								strokeDasharray: "5,5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								className: "topo-line",
								cx: "70%",
								cy: "40%",
								r: "300",
								fill: "none",
								stroke: "var(--obsidian)",
								strokeWidth: "1",
								strokeDasharray: "5,5"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 grid md:grid-cols-12 gap-8 items-end w-full h-full flex-grow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-12 flex flex-col justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[18vw] md:text-[16vw] leading-[0.75] tracking-tighter uppercase text-[color:var(--cherry)] max-w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pb-2 md:pb-4 pr-4 md:pr-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hero-text inline-block",
									children: "Tamanna"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-end justify-between mt-4 md:mt-8 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-[18vw] md:text-[12vw] leading-[0.75] tracking-tighter italic text-[color:var(--obsidian)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pb-4 pr-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hero-text inline-block",
										children: "Khan."
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xs space-y-6 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base md:text-lg font-light leading-relaxed fade-up mix-blend-multiply",
									children: "Content & marketing associate building brand worlds through words, visuals, and quiet strategy."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] border-t border-[color:var(--obsidian)]/20 pt-4 fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vol. 01 / 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delhi NCR" })]
								})]
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "zoom-section relative h-[100svh] bg-transparent flex flex-col md:flex-row items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "zoom-image-wrapper absolute flex items-center justify-center w-full h-full overflow-hidden",
						style: { willChange: "width, height, transform, border-radius" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tamanna_portrait_default,
							alt: "Tamanna Khan Portrait",
							className: "w-full h-full object-cover object-[center_top]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "zoom-reveal-block absolute xl:right-[10vw] right-0 top-[52vh] xl:top-[50vh] xl:-translate-y-1/2 w-full max-w-md pointer-events-none opacity-0 px-6 xl:px-0 z-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 font-display text-[120px] xl:text-[200px] text-[color:var(--obsidian)]/5 leading-none select-none -z-10",
								children: "T."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--cherry)] mb-3 xl:mb-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "About Tamanna"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl xl:text-5xl leading-[1.05] text-[color:var(--obsidian)] mb-4 xl:mb-8 relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "zoom-reveal-line",
									children: "It's not just copy,"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "zoom-reveal-line",
									children: ["it's a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-[color:var(--cherry)]",
										children: "journey."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-xs xl:text-sm leading-snug xl:leading-relaxed opacity-80 zoom-reveal-line font-light relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--cherry)] to-transparent opacity-30 hidden md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My name is Tamanna Khan, I am based in Delhi NCR. I freshly graduated from Lady Irwin College, University of Delhi with a Bachelors in Science in Home Science (major) and Psychology (minor)." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I am a very driven individual with over an year of experience in Marketing and over 2 years of experience in Content and creative writing. I published my own collection of poetry in November 2025." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I am eager to learn and contribute and most importantly hone my skills in every diverse sector possible." })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 w-full h-full pointer-events-none",
						preserveAspectRatio: "xMidYMid slice",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
							id: "zoom-mask",
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "0",
								y: "0",
								width: "100%",
								height: "100%",
								fill: "white"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								className: "zoom-svg-text",
								x: "50%",
								y: "55%",
								textAnchor: "middle",
								dominantBaseline: "middle",
								fill: "black",
								fontSize: "18vw",
								fontFamily: "'Cormorant Garamond', serif",
								fontWeight: "bold",
								fontStyle: "italic",
								letterSpacing: "-0.02em",
								children: "PERSPECTIVE"
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							className: "zoom-overlay-rect",
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							fill: "var(--obsidian)",
							mask: "url(#zoom-mask)"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 bg-[color:var(--cherry)] text-[color:var(--pearl)] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex whitespace-nowrap font-display text-4xl md:text-6xl italic",
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-16 shrink-0 animate-[marquee_30s_linear_infinite]",
						children: [
							"Brand Voice",
							"Content Strategy",
							"Social Storytelling",
							"Editorial Writing",
							"Campaign Copy",
							"Community"
						].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--obsidian)]",
								children: "✦"
							})]
						}, w))
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "sections",
				className: "disciplines-container relative h-[100svh] flex flex-col justify-center overflow-hidden bg-transparent pt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-20 left-6 md:left-12 z-20 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter mix-blend-multiply",
						children: "Disciplines."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm md:text-base opacity-70 leading-relaxed font-light",
						children: "Scroll to explore the different rooms of my work."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "disciplines-wrapper flex flex-nowrap h-[60vh] md:h-[70vh] items-center w-[500vw] md:w-[250vw] mt-24 md:mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
								n: "01",
								to: "/marketing",
								title: "Marketing",
								body: "Digital strategy, SEO, and website curation for brands like Geospace Design.",
								img: tamanna_portrait_default,
								className: "w-full h-full rounded-[40px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
								n: "02",
								to: "/content",
								title: "Content Creation",
								body: "Social-first storytelling and creative ad reels — Instagram and beyond.",
								img: tamanna_5_default,
								className: "w-full h-full rounded-[40px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
								n: "03",
								to: "/writing",
								title: "Writing",
								body: "Published author of The Truth of My Life — a collection of 40 poems.",
								img: tamanna_1_default,
								className: "w-full h-full rounded-[40px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
								n: "04",
								to: "/community",
								title: "Community Work",
								body: "Field-reported articles for Pehchaan The Street School.",
								img: tamanna_smile_default,
								className: "w-full h-full rounded-[40px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "discipline-card w-[100vw] md:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
								n: "05",
								to: "#contact",
								title: "Let's Talk",
								body: "Ready to build a voice system that works? Reach out and let's create something extraordinary together.",
								img: Tamanna10_default,
								className: "w-full h-full rounded-[40px]"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "relative min-h-[100svh] w-full flex flex-col xl:flex-row items-stretch justify-start xl:justify-center overflow-hidden bg-[color:var(--obsidian)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full xl:w-5/12 h-[50vh] xl:h-auto relative overflow-hidden shrink-0 self-start xl:self-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/src/assets/tamanna-3.jpeg",
						alt: "Tamanna",
						className: "absolute inset-0 w-full h-[150%] -top-[25%] object-cover object-[center_top] parallax-image"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[color:var(--obsidian)] via-[color:var(--obsidian)]/40 to-transparent opacity-100 z-10" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full xl:w-7/12 p-8 md:p-16 xl:p-24 flex flex-col justify-center relative z-20 text-[color:var(--pearl)] bg-[color:var(--obsidian)] xl:bg-transparent -mt-16 xl:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-10 pointer-events-none mix-blend-screen z-0",
							style: { backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\")" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M -100 100 Q 300 300 800 -100",
									fill: "none",
									stroke: "var(--cherry)",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M -100 200 Q 400 400 900 0",
									fill: "none",
									stroke: "var(--cherry)",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "80%",
									cy: "80%",
									r: "300",
									fill: "none",
									stroke: "var(--cherry)",
									strokeWidth: "1",
									strokeDasharray: "10,10"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--sand)] flex items-center gap-3 mb-8 fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[color:var(--cherry)]" }), "Who I Am"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl fade-up",
									children: ["I build voice systems, plan campaigns, and write copy that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-[color:var(--cherry)]",
										children: "doesn't shout."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-sm md:text-lg text-[color:var(--pearl)]/70 leading-relaxed font-light max-w-xl fade-up",
									children: "I care about pacing, restraint, and the small details that make something feel considered — a published poet who treats brand work with the same eye for a line break. Open to collaborations, freelance projects, and full-time roles with teams who take taste seriously."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-8 md:gap-16 mt-12 fade-up",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-4xl md:text-5xl text-[color:var(--cherry)]",
											children: "7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2",
											children: "Organisations"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-4xl md:text-5xl text-[color:var(--cherry)]",
											children: "40"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2",
											children: "Poems"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-4xl md:text-5xl text-[color:var(--cherry)]",
											children: "1500+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mt-2",
											children: "Words/Article"
										})] })
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function SectionCard({ n, to, title, body, img, className = "" }) {
	const isHash = to.startsWith("#");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(isHash ? "a" : Link, {
		...isHash ? { href: to } : { to },
		className: `group relative p-10 md:p-16 w-full h-full flex flex-col justify-between overflow-hidden bg-[color:var(--obsidian)] shadow-2xl ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[color:var(--cherry)] transform scale-y-0 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100 z-0" }),
			img && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: title,
				className: "absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-700 delay-100 z-0 mix-blend-luminosity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-start justify-between text-[color:var(--pearl)] group-hover:text-[color:var(--pearl)] transition-colors duration-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs opacity-70",
					children: [n, " /"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500",
					children: "Explore ↗"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 space-y-4 text-[color:var(--pearl)] group-hover:text-[color:var(--pearl)] transition-colors duration-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm md:text-base opacity-70 max-w-sm leading-relaxed font-light",
					children: body
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
