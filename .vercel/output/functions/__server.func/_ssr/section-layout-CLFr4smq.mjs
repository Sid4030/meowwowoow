import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./footer-bpbKH_Z2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-layout-CLFr4smq.js
var import_jsx_runtime = require_jsx_runtime();
function SectionLayout({ eyebrow, title, intro, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[color:var(--pearl)] text-[color:var(--obsidian)] selection:bg-[color:var(--cherry)] selection:text-[color:var(--pearl)] overflow-x-hidden flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[color:var(--obsidian)]/10 bg-[color:var(--sand)]/20 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-6 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 hover:text-[color:var(--cherry)] hover:opacity-100 transition-all mb-12",
						children: "← Back to home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-12 gap-8 items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--cherry)] mb-4",
								children: eyebrow
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter",
								children: title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "md:col-span-4 text-base md:text-lg opacity-70 leading-relaxed font-light",
							children: intro
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "py-16 md:py-32 flex-grow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-6 md:px-12",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SectionLayout as t };
