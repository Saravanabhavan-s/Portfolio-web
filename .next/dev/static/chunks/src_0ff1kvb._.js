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
        label: 'Projects',
        href: '#work'
    },
    {
        label: 'Stack',
        href: '#tech'
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
    'tech',
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
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -60,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ],
                    delay: 0.1
                },
                className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'glass-nav border-b border-border' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container flex items-center justify-between h-14 md:h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                }),
                            className: "text-sm font-semibold text-text hover:text-accent transition-colors",
                            children: "sb."
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>{
                                const isActive = active === link.href.replace('#', '');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(link.href),
                                    className: `text-[13px] transition-colors ${isActive ? 'text-text' : 'text-text-dim hover:text-text-muted'}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            className: "md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1",
                            "aria-label": "Menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-5 h-px bg-text transition-all ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-5 h-px bg-text transition-all ${mobileOpen ? 'opacity-0' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `block w-5 h-px bg-text transition-all ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Nav.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Nav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Nav.tsx",
                lineNumber: 31,
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
                    className: "fixed inset-0 z-[99] md:hidden flex flex-col items-center justify-center gap-6",
                    style: {
                        background: 'rgba(10, 10, 11, 0.96)',
                        backdropFilter: 'blur(40px)'
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.06,
                                duration: 0.4,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            onClick: ()=>scrollTo(link.href),
                            className: "text-xl text-text-muted hover:text-text transition-colors",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/src/components/shared/Nav.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Nav.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Nav.tsx",
                lineNumber: 80,
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
            background: '#C8A2F8'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ScrollProgress.tsx",
        lineNumber: 20,
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
function ClientShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LenisProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$GrainOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrainOverlay"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {}, void 0, false, {
                fileName: "[project]/src/app/client-shell.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/client-shell.tsx",
        lineNumber: 12,
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

//# sourceMappingURL=src_0ff1kvb._.js.map