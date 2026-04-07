(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shared/LenisProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LenisProvider",
    ()=>LenisProvider,
    "useLenis",
    ()=>useLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const LenisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useLenis() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LenisContext);
}
_s(useLenis, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function LenisProvider({ children }) {
    _s1();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LenisProvider.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                lerp: 0.08,
                smoothWheel: true
            });
            lenisRef.current = lenis;
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add({
                "LenisProvider.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["LenisProvider.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            return ({
                "LenisProvider.useEffect": ()=>{
                    lenis.destroy();
                }
            })["LenisProvider.useEffect"];
        }
    }["LenisProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LenisContext.Provider, {
        value: lenisRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/LenisProvider.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s1(LenisProvider, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = LenisProvider;
var _c;
__turbopack_context__.k.register(_c, "LenisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/GrainOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GrainOverlay",
    ()=>GrainOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function GrainOverlay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grain-overlay",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/shared/GrainOverlay.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = GrainOverlay;
var _c;
__turbopack_context__.k.register(_c, "GrainOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cursor",
    ()=>Cursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Cursor() {
    _s();
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const outerPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [hoverState, setHoverState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [isTouch, setIsTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            setIsTouch(window.matchMedia('(pointer: coarse)').matches);
            if (window.matchMedia('(pointer: coarse)').matches) return;
            const onMove = {
                "Cursor.useEffect.onMove": (e)=>{
                    pos.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["Cursor.useEffect.onMove"];
            const onDown = {
                "Cursor.useEffect.onDown": ()=>{
                    const outer = outerRef.current;
                    if (!outer) return;
                    outer.style.transform = `translate(-50%, -50%) scale(1.8)`;
                    outer.style.opacity = '0';
                    setTimeout({
                        "Cursor.useEffect.onDown": ()=>{
                            outer.style.transform = `translate(-50%, -50%) scale(1)`;
                            outer.style.opacity = '1';
                        }
                    }["Cursor.useEffect.onDown"], 300);
                }
            }["Cursor.useEffect.onDown"];
            const onOver = {
                "Cursor.useEffect.onOver": (e)=>{
                    const target = e.target;
                    if (target.closest('[data-cursor="project"]')) {
                        setHoverState('project');
                    } else if (target.closest('a') || target.closest('button') || target.closest('[data-cursor="interactive"]')) {
                        setHoverState('interactive');
                    }
                }
            }["Cursor.useEffect.onOver"];
            const onOut = {
                "Cursor.useEffect.onOut": ()=>setHoverState('default')
            }["Cursor.useEffect.onOut"];
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mousedown', onDown);
            document.addEventListener('mouseover', onOver);
            document.addEventListener('mouseout', onOut);
            let raf;
            const lerp = {
                "Cursor.useEffect.lerp": (a, b, t)=>a + (b - a) * t
            }["Cursor.useEffect.lerp"];
            const animate = {
                "Cursor.useEffect.animate": ()=>{
                    outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.12);
                    outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.12);
                    if (innerRef.current) {
                        innerRef.current.style.left = `${pos.current.x}px`;
                        innerRef.current.style.top = `${pos.current.y}px`;
                    }
                    if (outerRef.current) {
                        outerRef.current.style.left = `${outerPos.current.x}px`;
                        outerRef.current.style.top = `${outerPos.current.y}px`;
                    }
                    if (labelRef.current) {
                        labelRef.current.style.left = `${outerPos.current.x}px`;
                        labelRef.current.style.top = `${outerPos.current.y}px`;
                    }
                    raf = requestAnimationFrame(animate);
                }
            }["Cursor.useEffect.animate"];
            raf = requestAnimationFrame(animate);
            return ({
                "Cursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mousedown', onDown);
                    document.removeEventListener('mouseover', onOver);
                    document.removeEventListener('mouseout', onOut);
                    cancelAnimationFrame(raf);
                }
            })["Cursor.useEffect"];
        }
    }["Cursor.useEffect"], []);
    if (isTouch) return null;
    const isProject = hoverState === 'project';
    const isInteractive = hoverState === 'interactive';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: innerRef,
                className: "fixed z-[10000] pointer-events-none",
                style: {
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#FAFAFA',
                    transform: 'translate(-50%, -50%)',
                    opacity: isProject ? 0 : 1,
                    transition: 'opacity 0.2s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Cursor.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerRef,
                className: "fixed z-[10000] pointer-events-none",
                style: {
                    width: isInteractive ? 56 : 32,
                    height: isInteractive ? 56 : 32,
                    borderRadius: '50%',
                    border: `1.5px solid ${isInteractive ? '#6366F1' : 'rgba(255,255,255,0.4)'}`,
                    background: isInteractive ? 'rgba(99,102,241,0.08)' : 'transparent',
                    transform: 'translate(-50%, -50%)',
                    opacity: isProject ? 0 : 1,
                    transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, background 0.2s, opacity 0.2s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Cursor.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: labelRef,
                className: "fixed z-[10000] pointer-events-none text-xs font-semibold tracking-wider uppercase",
                style: {
                    transform: 'translate(-50%, -50%)',
                    opacity: isProject ? 1 : 0,
                    background: 'rgba(99,102,241,0.15)',
                    color: '#818CF8',
                    padding: '8px 16px',
                    borderRadius: 999,
                    border: '1px solid rgba(99,102,241,0.3)',
                    transition: 'opacity 0.2s',
                    whiteSpace: 'nowrap'
                },
                children: "VIEW →"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Cursor.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Cursor, "nyFoKnwCyuuIrA94wKBkvhalblo=");
_c = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUT",
    ()=>ABOUT,
    "EXPERIENCES",
    ()=>EXPERIENCES,
    "LINKS",
    ()=>LINKS,
    "MAIL_TO",
    ()=>MAIL_TO,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PROJECTS",
    ()=>PROJECTS,
    "SECTIONS",
    ()=>SECTIONS,
    "SITE",
    ()=>SITE,
    "STATS",
    ()=>STATS,
    "TECH_LOGOS",
    ()=>TECH_LOGOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// ══════════════════════════════════════════════
// PORTFOLIO CONTENT — All data in one place
// ══════════════════════════════════════════════
const env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env;
const LINKS = {
    githubProfile: ("TURBOPACK compile-time value", "https://github.com/Saravanabhavan-s") || 'https://github.com',
    summarizerRepo: ("TURBOPACK compile-time value", "https://github.com/Saravanabhavan-s/Summarizer") || ("TURBOPACK compile-time value", "https://github.com/Saravanabhavan-s") || 'https://github.com',
    weatherSongRepo: ("TURBOPACK compile-time value", "https://github.com/Saravanabhavan-s/Weather-based-Song-recommender") || ("TURBOPACK compile-time value", "https://github.com/Saravanabhavan-s") || 'https://github.com',
    linkedin: ("TURBOPACK compile-time value", "https://www.linkedin.com/in/saravanabhavan-sivashanmugavel-182429309/") || 'https://linkedin.com',
    x: ("TURBOPACK compile-time value", "https://x.com/saravanabhavan_") || 'https://x.com',
    email: ("TURBOPACK compile-time value", "saravanabhavansivashanmugavel@gmail.com") || 'hello@example.com'
};
const MAIL_TO = `mailto:${LINKS.email}`;
const SITE = {
    name: 'Saravanabhavan S',
    initials: 'SB',
    title: 'Saravanabhavan S — Backend & AI Developer',
    description: 'Backend-focused developer building scalable systems, GenAI applications, and cloud-based products.',
    roles: [
        'Backend Developer',
        'AI Developer',
        'Full Stack Developer'
    ],
    tagline: 'Available for opportunities'
};
const ABOUT = {
    bio: [
        "I am a backend-focused developer passionate about building scalable systems, GenAI applications, and cloud-based products. I enjoy working with APIs, authentication systems, backend architecture, and deployment pipelines.",
        "I have experience developing FastAPI and Node.js applications, integrating frontend and backend systems, and deploying projects using Docker, AWS EC2, Nginx, and Vercel.",
        "I am also interested in AI and GenAI technologies, including LangChain, RAG pipelines, LLM-based applications, vector databases, transcription systems, and analytics dashboards. Currently, I am exploring distributed systems, backend optimization, and advanced AI workflows."
    ],
    terminal: {
        fileName: 'saravanabhavan.json',
        content: {
            name: 'Saravanabhavan S',
            role: 'Backend & AI Developer',
            location: 'India 🇮🇳',
            languages: [
                'Python',
                'JavaScript',
                'C++'
            ],
            interests: [
                'GenAI',
                'System Design',
                'Backend Architecture'
            ],
            education: 'Sathyabama Institute of Science and Technology',
            fun_fact: "I debug with print statements and I'm not sorry 🤷"
        }
    }
};
const STATS = [
    {
        value: 4,
        suffix: '+',
        label: 'Projects Built'
    },
    {
        value: 100,
        suffix: '+',
        label: 'GitHub Contributions'
    },
    {
        value: 15,
        suffix: '+',
        label: 'Technologies'
    },
    {
        value: 2,
        suffix: '+',
        label: 'Years Learning'
    }
];
const PROJECTS = [
    {
        title: 'EchoScore',
        subtitle: 'GenAI Powered Customer Support Quality Auditor',
        description: 'GenAI-powered platform for auditing customer support chats and calls. Implemented LLM-based scoring, RAG pipeline, transcription, compliance analysis, and an analytics dashboard.',
        tech: [
            'Python',
            'FastAPI',
            'LangChain',
            'Whisper',
            'React',
            'Milvus'
        ],
        github: LINKS.summarizerRepo,
        live: null,
        featured: true
    },
    {
        title: 'Weather Song Recommender',
        subtitle: 'Environment-aware Music Discovery',
        description: 'Flask-based web application that dynamically recommends songs based on live weather conditions using the OpenWeather API and YouTube integration.',
        tech: [
            'Flask',
            'OpenWeather API',
            'YouTube API',
            'JavaScript'
        ],
        github: LINKS.weatherSongRepo,
        live: null,
        featured: true
    },
    {
        title: 'Cyber Shield Network Security',
        subtitle: 'Enterprise Network Architecture',
        description: 'Worked on network security architecture, attack surface analysis, secure remote access, DNS filtering, firewall policies, and VPN-based access models.',
        tech: [
            'Packet Tracer',
            'Firewall',
            'VPN',
            'DNS Filtering'
        ],
        github: LINKS.githubProfile,
        live: null,
        featured: false
    },
    {
        title: 'AR/VR Planetarium',
        subtitle: 'Interactive 3D Space Experience',
        description: 'Interactive Unity-based planetarium system with clickable planets, animated orbits, info panels, comet system, and realistic 3D environment.',
        tech: [
            'Unity',
            'C#',
            '3D UI',
            'Interaction System'
        ],
        github: LINKS.githubProfile,
        live: null,
        featured: false
    },
    {
        title: 'Line Following Robot',
        subtitle: 'Autonomous Navigation System',
        description: 'Built an autonomous line-following robot using IR sensors and microcontroller logic. The robot detects path direction and adjusts motor movement automatically.',
        tech: [
            'Arduino',
            'IR Sensors',
            'Embedded C',
            'Motors'
        ],
        github: LINKS.githubProfile,
        live: null,
        featured: false
    },
    {
        title: 'CNN Image Classification',
        subtitle: 'Deep Learning Vision Model',
        description: 'Built an image classification model using Convolutional Neural Networks for identifying and classifying images. Worked on preprocessing, training, evaluation, and prediction.',
        tech: [
            'Python',
            'TensorFlow',
            'CNN',
            'OpenCV',
            'NumPy'
        ],
        github: LINKS.githubProfile,
        live: null,
        featured: false
    }
];
const EXPERIENCES = [
    {
        role: 'Infosys Springboard Internship 6.0',
        company: 'Infosys',
        period: '2026',
        description: 'Worked on a GenAI-based auditing platform involving LLM scoring, RAG pipeline, backend APIs, transcription, and dashboard integration.',
        highlights: [
            'Developed GenAI capabilities for automated auditing',
            'Integrated RAG pipelines and LLM scoring workflows',
            'Built backend APIs and connected transcription services'
        ],
        tech: [
            'Python',
            'FastAPI',
            'GenAI',
            'LLMs',
            'RAG'
        ],
        current: true
    },
    {
        role: 'Cisco Cybersecurity Virtual Internship',
        company: 'Cisco',
        period: '2025',
        description: 'Worked on network security design, attack surface analysis, secure access models, filtering policies, and VPN configuration.',
        highlights: [
            'Designed robust network security architectures',
            'Configured VPNs and implemented DNS filtering',
            'Analyzed attack surfaces and defined firewall policies'
        ],
        tech: [
            'Network Security',
            'Firewalls',
            'VPN'
        ],
        current: false
    },
    {
        role: 'Backend Developer',
        company: 'Startup Project',
        period: '2024',
        description: 'Worked on backend API development, authentication system, funding module, team management module, and database integration.',
        highlights: [
            'Engineered core backend APIs and authentication flows',
            'Developed funding and team management modules',
            'Designed and optimized database schemas'
        ],
        tech: [
            'Node.js',
            'NoSQL',
            'Databases',
            'Authentication'
        ],
        current: false
    },
    {
        role: 'IEEE Robotics & Automation Society',
        company: 'IEEE RAS',
        period: '2023 — Present',
        description: 'Active member participating in robotics-related activities and technical events. Organized 5+ technical events, workshops, and student engagement activities.',
        highlights: [
            'Organized 5+ technical events and workshops',
            'Led student engagement activities'
        ],
        tech: [
            'Robotics',
            'IoT',
            'Embedded Systems'
        ],
        current: true
    }
];
const TECH_LOGOS = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'FastAPI',
    'Flask',
    'Express.js',
    'Docker',
    'AWS',
    'MongoDB',
    'MySQL',
    'TensorFlow',
    'LangChain',
    'Linux',
    'Nginx',
    'Vercel',
    'GitHub',
    'Figma',
    'Tailwind CSS'
];
const NAV_LINKS = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
];
const SECTIONS = [
    'hero',
    'about',
    'work',
    'logoloop',
    'experience',
    'contact'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSectionInView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSectionInView",
    ()=>useSectionInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useSectionInView(sectionIds) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sectionIds[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSectionInView.useEffect": ()=>{
            const observers = [];
            sectionIds.forEach({
                "useSectionInView.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (!el) return;
                    const observer = new IntersectionObserver({
                        "useSectionInView.useEffect": ([entry])=>{
                            if (entry.isIntersecting) {
                                setActive(id);
                            }
                        }
                    }["useSectionInView.useEffect"], {
                        threshold: 0.3,
                        rootMargin: '-10% 0px -10% 0px'
                    });
                    observer.observe(el);
                    observers.push(observer);
                }
            }["useSectionInView.useEffect"]);
            return ({
                "useSectionInView.useEffect": ()=>observers.forEach({
                        "useSectionInView.useEffect": (o)=>o.disconnect()
                    }["useSectionInView.useEffect"])
            })["useSectionInView.useEffect"];
        }
    }["useSectionInView.useEffect"], [
        sectionIds
    ]);
    return active;
}
_s(useSectionInView, "V2g8DiDMBTRyxYjGZgIQ4zCJ7OA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSectionInView.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 80)
            }["Nav.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            document.body.style.overflow = mobileOpen ? 'hidden' : '';
            return ({
                "Nav.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        mobileOpen
    ]);
    const scrollTo = (href)=>{
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -80,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ],
                    delay: 0.2
                },
                className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${scrolled ? 'glass-nav border-b border-border' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container flex items-center justify-between h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                }),
                            className: "relative z-10 flex items-center gap-2 group",
                            id: "nav-logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-accent",
                                    children: "SB"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/Nav.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1 relative",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>{
                                    const isActive = active === link.href.replace('#', '');
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollTo(link.href),
                                        className: `relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-muted hover:text-text'}`,
                                        id: `nav-${link.label.toLowerCase()}`,
                                        children: [
                                            link.label,
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "nav-indicator",
                                                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent",
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 400,
                                                    damping: 30
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Nav.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/shared/Nav.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAIL_TO"],
                                    className: "ml-4 px-5 py-2 text-sm font-medium rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300",
                                    id: "nav-cta",
                                    children: "Resume ↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            className: "md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5",
                            "aria-label": "Toggle menu",
                            id: "nav-hamburger",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-6 h-[1.5px] bg-text transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-6 h-[1.5px] bg-text transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-6 h-[1.5px] bg-text transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Nav.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Nav.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-[99] md:hidden flex flex-col items-center justify-center gap-8",
                    style: {
                        background: 'rgba(8, 8, 8, 0.97)',
                        backdropFilter: 'blur(40px)'
                    },
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: i * 0.08 + 0.1,
                                    duration: 0.5,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                onClick: ()=>scrollTo(link.href),
                                className: "text-2xl font-semibold text-text-muted hover:text-text transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/shared/Nav.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAIL_TO"],
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].length * 0.08 + 0.1,
                                duration: 0.5,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            className: "mt-4 px-8 py-3 text-lg font-semibold rounded-lg bg-accent text-white",
                            children: "Resume ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Nav.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Nav.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Nav, "I3dJopAxqe59wNZz3fwZ44cBUmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const onScroll = {
                "ScrollProgress.useEffect.onScroll": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
                }
            }["ScrollProgress.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed top-0 left-0 right-0 z-[9998] h-px origin-left",
        style: {
            scaleX: progress,
            background: '#6366F1'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ScrollProgress.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ScrollProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SectionLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionLabel",
    ()=>SectionLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSectionInView.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SectionLabel() {
    _s();
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"]);
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].indexOf(active);
    const label = String(index + 1).padStart(2, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "font-mono text-xs text-text-dim tracking-widest",
                    children: label
                }, label, false, {
                    fileName: "[project]/src/components/shared/SectionLabel.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SectionLabel.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-8 bg-border"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SectionLabel.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/SectionLabel.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(SectionLabel, "tBVSoNS17W4bK2cRUXe3cjZKA8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"]
    ];
});
_c = SectionLabel;
var _c;
__turbopack_context__.k.register(_c, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/client-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientShell",
    ()=>ClientShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/LenisProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GrainOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/GrainOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Cursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScrollProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ClientShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LenisProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cursor"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GrainOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrainOverlay"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/client-shell.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ClientShell;
var _c;
__turbopack_context__.k.register(_c, "ClientShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_10mpf7t._.js.map