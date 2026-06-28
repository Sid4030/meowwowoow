import { n as gsapWithCSS } from "../_libs/gsap+gsap__react+react.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CUigiSSZ.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DrM4-8yh.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Tamanna Khan — Content & Marketing Associate" },
			{
				name: "description",
				content: "Portfolio of Tamanna Khan: marketing strategy, content creation, and writing. Selected work, essays, and collaborations."
			},
			{
				name: "author",
				content: "Tamanna Khan"
			},
			{
				property: "og:title",
				content: "Tamanna Khan — Content & Marketing Associate"
			},
			{
				property: "og:description",
				content: "Marketing, content, and writing — selected work and essays by Tamanna Khan."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./writing-DXiMdG7h.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$4 = createFileRoute("/writing")({
	head: () => ({
		meta: [
			{ title: "Writing — Tamanna Khan" },
			{
				name: "description",
				content: "The Truth of My Life — a published collection of 40 poems by Tamanna Khan, available on Amazon."
			},
			{
				property: "og:title",
				content: "Writing — Tamanna Khan"
			},
			{
				property: "og:url",
				content: "/writing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/writing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./marketing-C7IjGRPr.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$3 = createFileRoute("/marketing")({
	head: () => ({
		meta: [
			{ title: "Marketing — Tamanna Khan" },
			{
				name: "description",
				content: "Marketing strategy, website curation, and social growth for Geospace Design."
			},
			{
				property: "og:title",
				content: "Marketing — Tamanna Khan"
			},
			{
				property: "og:url",
				content: "/marketing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/marketing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./content-CBDdvbVj.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$2 = createFileRoute("/content")({
	head: () => ({
		meta: [
			{ title: "Content Creation — Tamanna Khan" },
			{
				name: "description",
				content: "Social-first content creation by Tamanna Khan — see the full feed on Instagram @tam_anna_k."
			},
			{
				property: "og:title",
				content: "Content Creation — Tamanna Khan"
			},
			{
				property: "og:url",
				content: "/content"
			}
		],
		links: [{
			rel: "canonical",
			href: "/content"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./community-Smifbqgr.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$1 = createFileRoute("/community")({
	head: () => ({
		meta: [
			{ title: "Community Work — Tamanna Khan" },
			{
				name: "description",
				content: "Content writing internship at Pehchaan The Street School — weekly long-form articles published on Medium, Quora, and WordPress."
			},
			{
				property: "og:title",
				content: "Community Work — Tamanna Khan"
			},
			{
				property: "og:url",
				content: "/community"
			}
		],
		links: [{
			rel: "canonical",
			href: "/community"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-l_SpH_SB.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Tamanna Khan — Content & Marketing Associate" }, {
		name: "description",
		content: "Selected work in marketing, content creation, and writing by Tamanna Khan."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WritingRoute = Route$4.update({
	id: "/writing",
	path: "/writing",
	getParentRoute: () => Route$5
});
var MarketingRoute = Route$3.update({
	id: "/marketing",
	path: "/marketing",
	getParentRoute: () => Route$5
});
var ContentRoute = Route$2.update({
	id: "/content",
	path: "/content",
	getParentRoute: () => Route$5
});
var CommunityRoute = Route$1.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	CommunityRoute,
	ContentRoute,
	MarketingRoute,
	WritingRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
