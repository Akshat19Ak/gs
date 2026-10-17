import React, { useRef, useEffect, useState } from 'react';
import './Hero.css';

// ─── Constellation SVG ───────────────────────────────────────
const NODES = [
  { id: 0, x: 50, y: 50, label: 'Ideas', size: 10 },
  { id: 1, x: 18, y: 22, label: 'Code', size: 7 },
  { id: 2, x: 82, y: 18, label: 'Design', size: 7 },
  { id: 3, x: 12, y: 68, label: 'Logic', size: 6 },
  { id: 4, x: 88, y: 72, label: 'Data', size: 6 },
  { id: 5, x: 35, y: 78, label: 'Build', size: 5 },
  { id: 6, x: 65, y: 82, label: 'Learn', size: 5 },
  { id: 7, x: 72, y: 38, label: 'AI', size: 8 },
  { id: 8, x: 28, y: 42, label: 'Think', size: 6 },
  { id: 9, x: 50, y: 14, label: 'Create', size: 5 },
  { id: 10, x: 92, y: 44, label: 'APIs', size: 4 },
  { id: 11, x: 8, y: 44, label: 'Systems', size: 4 },
];
const EDGES = [
  [0, 1],[0, 2],[0, 7],[0, 8],[0, 5],[0, 6],
  [1, 3],[1, 8],[2, 7],[2, 9],[3, 11],[4, 10],
  [7, 10],[8, 11],[5, 6],[2, 4],[9, 7],[6, 4],
];

function Constellation() {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const getOffset = (node, t) => {
    const speed = 0.0004 + node.id * 0.00003;
    const phase = node.id * 1.1;
    const dx = Math.sin(t * speed + phase) * 1.8;
    const dy = Math.cos(t * speed * 0.7 + phase) * 1.5;
    // Mouse parallax
    const mx = (mousePos.x - 50) * 0.015;
    const my = (mousePos.y - 50) * 0.012;
    return { dx: dx + mx, dy: dy + my };
  };

  const getNodePos = (node) => {
    const { dx, dy } = getOffset(node, tick);
    return { x: node.x + dx, y: node.y + dy };
  };

  return (
    <div className="constellation-wrap" aria-hidden="true">
      <svg
        ref={svgRef}
        className="constellation-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#c4b5fd"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </radialGradient>
          <radialGradient id="coreGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f5f3ff"/>
            <stop offset="100%" stopColor="#a78bfa"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b]) => {
          const pa = getNodePos(NODES[a]);
          const pb = getNodePos(NODES[b]);
          const isActive = hovered === a || hovered === b;
          return (
            <line key={`${a}-${b}`}
              x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
              stroke={isActive ? '#a78bfa' : '#4c1d95'}
              strokeWidth={isActive ? 0.4 : 0.2}
              opacity={isActive ? 0.8 : 0.35}
              style={{ transition: 'stroke 0.3s, opacity 0.3s' }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const { x, y } = getNodePos(node);
          const isCore = node.id === 0;
          const isHov = hovered === node.id;
          const r = (isCore ? node.size : node.size) * (isHov ? 1.4 : 1) * 0.45;
          return (
            <g key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Glow ring */}
              {isHov && (
                <circle cx={x} cy={y} r={r * 2.5}
                  fill="none" stroke="#a78bfa" strokeWidth="0.3" opacity="0.4"/>
              )}
              <circle cx={x} cy={y} r={r}
                fill={isCore ? 'url(#coreGrad)' : 'url(#nodeGrad)'}
                filter={isHov ? 'url(#glow-strong)' : isCore ? 'url(#glow)' : 'none'}
                opacity={isHov ? 1 : 0.9}
                style={{ transition: 'r 0.3s' }}
              />
              {/* Label */}
              {(isHov || isCore) && (
                <text x={x} y={y - r - 1.2}
                  textAnchor="middle"
                  fontSize={isCore ? '2.5' : '2.2'}
                  fill={isCore ? '#f0eeff' : '#c4b5fd'}
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="500"
                  style={{ pointerEvents: 'none' }}
                >
                  {node.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────
export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1"/>
        <div className="hero-orb hero-orb-2"/>
        <div className="hero-grid"/>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label reveal visible">
            <span className="text-label">Personal Portfolio · Software · AI</span>
          </div>

          <h1 className="display-xl hero-headline reveal visible reveal-delay-1">
            Curious by nature.
            <br />
            <span className="gradient-text">An engineer</span>
            <br />
            in the making.
          </h1>

          <p className="text-large hero-intro reveal visible reveal-delay-2">
            I'm <strong>Akshat Gupta</strong> — a computer science student who enjoys understanding
            how things work, building software that solves problems, and exploring what becomes
            possible when engineering meets intelligence.
          </p>

          <div className="hero-actions reveal visible reveal-delay-3">
            <button className="btn btn-primary" onClick={() => scrollTo('#story')}
              id="hero-btn-story">
              Explore my journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v10M3 8l5 5 5-5"/>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#projects')}
              id="hero-btn-projects">
              Discover what I build
            </button>
          </div>

          <div className="hero-footnote reveal visible reveal-delay-4">
            <span className="text-label" style={{ letterSpacing: '0.1em' }}>
              Learning continuously. Building intentionally.
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <Constellation />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-label="Scroll to explore">
        <div className="scroll-indicator-line"/>
        <span className="text-label" style={{ fontSize: '0.6rem' }}>scroll</span>
      </div>
    </section>
  );
}
