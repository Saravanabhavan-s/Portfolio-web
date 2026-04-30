'use client';

import { motion } from 'framer-motion';

/* ─── Types ─── */
interface NodeDef {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  color: string;
  primary?: boolean;
}

interface EdgeDef {
  id: string;
  path: string;
  color: string;
  dur: number;
}

interface AnimConfig {
  title: string;
  statusText: string;
  nodes: NodeDef[];
  edges: EdgeDef[];
}

/* ─── Colors ─── */
const GREEN = '#4ADE80';
const PURPLE = '#C8A2F8';
const CYAN = '#22D3EE';

/* ─── Animation Configs ─── */
const CONFIGS: Record<string, AnimConfig> = {
  echoscore: {
    title: 'echoscore — GenAI Pipeline',
    statusText: 'rag pipeline — scoring & compliance',
    nodes: [
      { id: 'audio', x: 12, y: 28, w: 78, h: 36, label: 'Audio', sub: 'INPUT', color: GREEN },
      { id: 'whisper', x: 128, y: 28, w: 82, h: 36, label: 'Whisper', sub: 'ASR', color: PURPLE },
      { id: 'llm', x: 248, y: 28, w: 88, h: 36, label: 'LLM Score', sub: 'ENGINE', color: PURPLE, primary: true },
      { id: 'rag', x: 248, y: 128, w: 88, h: 36, label: 'RAG + DB', sub: 'MILVUS', color: GREEN },
      { id: 'analytics', x: 128, y: 128, w: 82, h: 36, label: 'Analytics', sub: 'ENGINE', color: PURPLE },
      { id: 'dashboard', x: 12, y: 128, w: 78, h: 36, label: 'Dashboard', sub: 'OUTPUT', color: CYAN },
    ],
    edges: [
      { id: 'e1', path: 'M90,46 L128,46', color: GREEN, dur: 2 },
      { id: 'e2', path: 'M210,46 L248,46', color: PURPLE, dur: 2 },
      { id: 'e3', path: 'M292,64 L292,128', color: PURPLE, dur: 2.5 },
      { id: 'e4', path: 'M248,146 L210,146', color: GREEN, dur: 2 },
      { id: 'e5', path: 'M128,146 L90,146', color: CYAN, dur: 2 },
    ],
  },
  vibecast: {
    title: 'vibecast — Recommendation Flow',
    statusText: 'weather-aware music discovery',
    nodes: [
      { id: 'user', x: 12, y: 28, w: 78, h: 36, label: 'User', sub: 'REQUEST', color: CYAN },
      { id: 'weather', x: 128, y: 28, w: 82, h: 36, label: 'Weather', sub: 'API', color: GREEN },
      { id: 'scoring', x: 248, y: 28, w: 88, h: 36, label: 'Scoring', sub: 'ENGINE', color: PURPLE, primary: true },
      { id: 'recommend', x: 248, y: 128, w: 88, h: 36, label: 'Recommend', sub: 'SERVICE', color: PURPLE },
      { id: 'mongodb', x: 128, y: 128, w: 82, h: 36, label: 'MongoDB', sub: 'STORE', color: CYAN },
      { id: 'songs', x: 12, y: 128, w: 78, h: 36, label: 'Songs', sub: 'OUTPUT', color: GREEN },
    ],
    edges: [
      { id: 'e1', path: 'M90,46 L128,46', color: CYAN, dur: 2 },
      { id: 'e2', path: 'M210,46 L248,46', color: GREEN, dur: 2 },
      { id: 'e3', path: 'M292,64 L292,128', color: PURPLE, dur: 2.5 },
      { id: 'e4', path: 'M248,146 L210,146', color: PURPLE, dur: 2 },
      { id: 'e5', path: 'M128,146 L90,146', color: GREEN, dur: 2 },
    ],
  },
};

/* ─── Particle along a path ─── */
function Particle({ edgeId, configId, color, dur, delay }: {
  edgeId: string;
  configId: string;
  color: string;
  dur: number;
  delay: number;
}) {
  const href = `#${configId}-${edgeId}`;
  return (
    <circle r="2.5" fill={color} filter={`url(#${configId}-glow)`}>
      <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={href} />
      </animateMotion>
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.15;0.85;1"
        dur={`${dur}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
      />
    </circle>
  );
}

/* ─── Single Node ─── */
function AnimNode({ node, configId, index }: { node: NodeDef; configId: string; index: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle glow behind primary nodes */}
      {node.primary && (
        <rect
          x={node.x - 4}
          y={node.y - 4}
          width={node.w + 8}
          height={node.h + 8}
          rx={10}
          fill="none"
          stroke={node.color}
          strokeWidth="1"
          opacity="0.3"
          filter={`url(#${configId}-glow)`}
        >
          <animate
            attributeName="opacity"
            values="0.15;0.4;0.15"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      )}

      {/* Node body */}
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={7}
        fill={`${node.color}15`}
        stroke={node.color}
        strokeWidth="1"
        strokeOpacity="0.5"
      />

      {/* Label */}
      <text
        x={node.x + node.w / 2}
        y={node.y + 16}
        textAnchor="middle"
        fill={node.color}
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        {node.label}
      </text>

      {/* Sublabel */}
      <text
        x={node.x + node.w / 2}
        y={node.y + 28}
        textAnchor="middle"
        fill={node.color}
        fontSize="6.5"
        fontFamily="monospace"
        fontWeight="400"
        opacity="0.55"
      >
        {node.sub}
      </text>
    </motion.g>
  );
}

/* ─── Main Component ─── */
export function ProjectAnimation({ animationId }: { animationId: string }) {
  const config = CONFIGS[animationId];
  if (!config) return null;

  const cid = animationId; // short alias for ID prefixing

  return (
    <div className="flex flex-col h-full">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
        </span>
        <span className="text-[10px] font-mono text-text-dim ml-1">{config.title}</span>
      </div>

      {/* Animation SVG */}
      <div className="flex-1 flex items-center justify-center px-3 pb-1">
        <svg
          viewBox="0 0 350 190"
          className="w-full h-auto max-h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter */}
            <filter id={`${cid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arrow markers per edge color */}
            {config.edges.map((edge) => (
              <marker
                key={`marker-${edge.id}`}
                id={`${cid}-arrow-${edge.id}`}
                markerWidth="7"
                markerHeight="5"
                refX="7"
                refY="2.5"
                orient="auto"
              >
                <polygon points="0 0, 7 2.5, 0 5" fill={edge.color} fillOpacity="0.45" />
              </marker>
            ))}
          </defs>

          {/* Edges */}
          {config.edges.map((edge, i) => (
            <motion.g
              key={edge.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
            >
              {/* The path (dashed line) */}
              <path
                id={`${cid}-${edge.id}`}
                d={edge.path}
                fill="none"
                stroke={edge.color}
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4 3"
                markerEnd={`url(#${cid}-arrow-${edge.id})`}
              />
              {/* Particles */}
              <Particle edgeId={edge.id} configId={cid} color={edge.color} dur={edge.dur} delay={i * 0.4} />
              <Particle edgeId={edge.id} configId={cid} color={edge.color} dur={edge.dur} delay={i * 0.4 + edge.dur / 2} />
            </motion.g>
          ))}

          {/* Nodes */}
          {config.nodes.map((node, i) => (
            <AnimNode key={node.id} node={node} configId={cid} index={i} />
          ))}

          {/* Status text */}
          <text
            x="175"
            y="184"
            textAnchor="middle"
            fill="rgba(255,255,255,0.2)"
            fontSize="7.5"
            fontFamily="monospace"
          >
            {config.statusText}
          </text>
        </svg>
      </div>

      {/* CTA */}
      <div className="px-3 pb-3 pt-1 text-center">
        <span className="text-[10px] font-mono text-accent/70 group-hover:text-accent transition-colors">
          click here for more info →
        </span>
      </div>
    </div>
  );
}
