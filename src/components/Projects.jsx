import React, { useState } from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Projects.css';

// ─── Project illustrations ────────────────────────────────────
function ResearchLensViz() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="project-viz">
      <defs>
        <linearGradient id="rl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      {/* Documents */}
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(${20 + i * 22}, ${25 - i * 6})`}>
          <rect width="38" height="52" rx="4" fill="#1e1b4b" stroke="#4c1d95" strokeWidth="1"/>
          <rect x="6" y="8" width="26" height="2" rx="1" fill="#7c3aed" opacity="0.7"/>
          <rect x="6" y="14" width="20" height="1.5" rx="1" fill="#4c1d95" opacity="0.8"/>
          <rect x="6" y="19" width="22" height="1.5" rx="1" fill="#4c1d95" opacity="0.8"/>
          <rect x="6" y="24" width="18" height="1.5" rx="1" fill="#4c1d95" opacity="0.8"/>
          <rect x="6" y="29" width="24" height="1.5" rx="1" fill="#4c1d95" opacity="0.6"/>
          <rect x="6" y="34" width="16" height="1.5" rx="1" fill="#4c1d95" opacity="0.6"/>
        </g>
      ))}
      {/* Arrow */}
      <path d="M108 65 L130 65" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-rl)"/>
      <defs>
        <marker id="arrow-rl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#7c3aed"/>
        </marker>
      </defs>
      {/* FAISS + BM25 box */}
      <rect x="132" y="48" width="64" height="32" rx="6" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1"/>
      <text x="164" y="61" textAnchor="middle" fill="#a78bfa" fontSize="6.5" fontFamily="JetBrains Mono">FAISS + BM25</text>
      <text x="164" y="72" textAnchor="middle" fill="#6d28d9" fontSize="5.5" fontFamily="JetBrains Mono">Hybrid Retrieval</text>
      {/* Arrow 2 */}
      <path d="M196 64 L218 64" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arrow-rl2)"/>
      <defs>
        <marker id="arrow-rl2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#a78bfa"/>
        </marker>
      </defs>
      {/* LLM Answer box */}
      <rect x="220" y="44" width="50" height="40" rx="6" fill="#0d0d1a" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="245" y="60" textAnchor="middle" fill="#c4b5fd" fontSize="6.5" fontFamily="JetBrains Mono">LLM</text>
      <text x="245" y="70" textAnchor="middle" fill="#a78bfa" fontSize="5.5" fontFamily="JetBrains Mono">Answer</text>
      {/* Chunk lines */}
      {[0,1,2,3].map(i => (
        <rect key={i} x={134} y={92 + i * 14} width={60} height={9} rx="3"
          fill="#1e1b4b" stroke="#4c1d95" strokeWidth="0.8" opacity={1 - i * 0.2}/>
      ))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={138} y={95 + i * 14} width={40 - i * 5} height={3} rx="1"
          fill="#7c3aed" opacity={0.6 - i * 0.1}/>
      ))}
    </svg>
  );
}

function OmniViewViz() {
  const agents = [
    { x: 80, y: 60, label: 'Optimist', color: '#22d3ee', emoji: '◈' },
    { x: 200, y: 30, label: 'Risk Analyst', color: '#f59e0b', emoji: '◆' },
    { x: 200, y: 90, label: 'Moderator', color: '#a78bfa', emoji: '◉' },
  ];
  return (
    <svg viewBox="0 0 280 140" fill="none" className="project-viz">
      {/* Decision input */}
      <rect x="8" y="52" width="56" height="30" rx="6" fill="#0d0d1a" stroke="#0891b2" strokeWidth="1.2"/>
      <text x="36" y="64" textAnchor="middle" fill="#67e8f9" fontSize="6" fontFamily="JetBrains Mono">Decision</text>
      <text x="36" y="74" textAnchor="middle" fill="#0891b2" fontSize="5.5" fontFamily="JetBrains Mono">Input</text>
      {/* Arrows to agents */}
      <path d="M64 67 L72 67" stroke="#0891b2" strokeWidth="1.2"/>
      {agents.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r="20" fill="#0d0d1a" stroke={a.color} strokeWidth="1.5"/>
          <text x={a.x} y={a.y - 4} textAnchor="middle" fill={a.color} fontSize="7" fontFamily="JetBrains Mono">{a.emoji}</text>
          <text x={a.x} y={a.y + 8} textAnchor="middle" fill={a.color} fontSize="5.5" fontFamily="JetBrains Mono">{a.label.split(' ')[0]}</text>
        </g>
      ))}
      {/* Connecting lines between agents */}
      <path d="M80 42 L188 32" stroke="#374151" strokeWidth="0.8" strokeDasharray="3,2"/>
      <path d="M80 77 L188 88" stroke="#374151" strokeWidth="0.8" strokeDasharray="3,2"/>
      <path d="M200 50 L200 70" stroke="#374151" strokeWidth="0.8" strokeDasharray="3,2"/>
      {/* Arrow to verdict */}
      <path d="M220 60 L240 60" stroke="#a78bfa" strokeWidth="1.5"/>
      {/* Verdict */}
      <rect x="242" y="44" width="30" height="32" rx="6" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="257" y="58" textAnchor="middle" fill="#c4b5fd" fontSize="6" fontFamily="JetBrains Mono">Final</text>
      <text x="257" y="68" textAnchor="middle" fill="#a78bfa" fontSize="6" fontFamily="JetBrains Mono">Verdict</text>
      {/* Animated pulse ring on moderator */}
      <circle cx={200} cy={90} r="26" stroke="#a78bfa" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,3">
        <animateTransform attributeName="transform" type="rotate" from="0 200 90" to="360 200 90" dur="8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function ForecastViz() {
  const pts = [30,40,35,55,45,65,52,75,60,72,68,85];
  const forecast = [85,90,88,95,92,100];
  const toPath = (arr, startX, step, baseY) =>
    arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${startX + i * step},${baseY - v * 0.7}`).join(' ');
  return (
    <svg viewBox="0 0 280 140" fill="none" className="project-viz">
      {/* Axes */}
      <line x1="30" y1="110" x2="260" y2="110" stroke="#1e293b" strokeWidth="1"/>
      <line x1="30" y1="20"  x2="30"  y2="110" stroke="#1e293b" strokeWidth="1"/>
      {/* Grid lines */}
      {[30,50,70,90].map(y => (
        <line key={y} x1="30" y1={110 - y * 0.7} x2="260" y2={110 - y * 0.7}
          stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3"/>
      ))}
      {/* Historical */}
      <path d={toPath(pts, 40, 16, 110)} stroke="#059669" strokeWidth="1.8" fill="none"/>
      <path d={toPath(pts, 40, 16, 110)} stroke="none"
        fill="url(#hist-fill)" opacity="0.15"/>
      <defs>
        <linearGradient id="hist-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="fore-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a3e635"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
      </defs>
      {/* Divider */}
      <line x1="216" y1="20" x2="216" y2="110" stroke="#374151" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="218" y="18" fill="#6b7280" fontSize="5.5" fontFamily="JetBrains Mono">Forecast →</text>
      {/* Forecast */}
      <path d={toPath(forecast, 216, 7, 110)} stroke="#a3e635" strokeWidth="1.8"
        strokeDasharray="4,2" fill="none"/>
      {/* Confidence band */}
      <path d={`M216,51 ${forecast.map((v,i) => `L${216+i*7},${110 - (v+8)*0.7}`).join(' ')} L${216+5*7},${110 - (forecast[5]-8)*0.7} ${forecast.slice().reverse().map((v,i,a) => `L${216+(5-i)*7},${110 - (v-8)*0.7}`).join(' ')} Z`}
        fill="#a3e635" opacity="0.07"/>
      {/* Legend */}
      <rect x="32" y="22" width="6" height="2" rx="1" fill="#059669"/>
      <text x="42" y="26" fill="#6ee7b7" fontSize="5.5" fontFamily="JetBrains Mono">Historical</text>
      <rect x="82" y="22" width="6" height="2" rx="1" fill="#a3e635"/>
      <text x="92" y="26" fill="#a3e635" fontSize="5.5" fontFamily="JetBrains Mono">Forecast (illustrative)</text>
    </svg>
  );
}

function StockViz() {
  const noise = (seed) => Math.sin(seed * 12.9898 + 78.233) * 43758.5453 % 1;
  const hist = Array.from({ length: 20 }, (_, i) => 50 + noise(i) * 30 + i * 1.5);
  const lstm = hist.slice(-5).map((v, i) => v + (noise(100 + i) * 10 - 2));
  const sar  = hist.slice(-5).map((v, i) => v + (noise(200 + i) * 10 - 3));
  const toPath = (arr, startX, step) =>
    arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${startX + i * step},${110 - v}`).join(' ');
  return (
    <svg viewBox="0 0 280 130" fill="none" className="project-viz">
      {/* Grid */}
      {[20,40,60,80].map(y => (
        <line key={y} x1="20" y1={110 - y} x2="260" y2={110 - y}
          stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3"/>
      ))}
      <line x1="20" y1="110" x2="260" y2="110" stroke="#374151" strokeWidth="1"/>
      {/* Historical */}
      <path d={toPath(hist, 20, 11)} stroke="#f59e0b" strokeWidth="1.8" fill="none"/>
      {/* Divider */}
      <line x1="200" y1="10" x2="200" y2="110" stroke="#374151" strokeWidth="1" strokeDasharray="4,3"/>
      {/* LSTM forecast */}
      <path d={toPath(lstm, 200, 12)} stroke="#a78bfa" strokeWidth="1.8" strokeDasharray="5,2" fill="none"/>
      {/* SARIMAX forecast */}
      <path d={toPath(sar, 200, 12)} stroke="#22d3ee" strokeWidth="1.8" strokeDasharray="3,3" fill="none"/>
      {/* Legend */}
      <rect x="22" y="14" width="8" height="2" rx="1" fill="#f59e0b"/>
      <text x="34" y="18" fill="#fcd34d" fontSize="5.5" fontFamily="JetBrains Mono">Historical</text>
      <rect x="80" y="14" width="8" height="2" rx="1" fill="#a78bfa"/>
      <text x="92" y="18" fill="#c4b5fd" fontSize="5.5" fontFamily="JetBrains Mono">LSTM</text>
      <rect x="118" y="14" width="8" height="2" rx="1" fill="#22d3ee"/>
      <text x="130" y="18" fill="#67e8f9" fontSize="5.5" fontFamily="JetBrains Mono">SARIMAX</text>
    </svg>
  );
}

const VIZ = {
  'research-lens': ResearchLensViz,
  'omniview': OmniViewViz,
  'raw-material-optimizer': ForecastViz,
  'stock-predictor': StockViz,
};

// ─── Single Project Card ──────────────────────────────────────
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const VizComponent = VIZ[project.id];

  return (
    <Reveal delay={Math.min(index, 4)}>
      <article
        className={`project-card ${expanded ? 'expanded' : ''}`}
        style={{ '--project-color': project.color, '--project-accent': project.accentLight }}
        aria-labelledby={`proj-title-${project.id}`}
      >
        {/* Header */}
        <div className="project-header">
          <div className="project-meta">
            <span className="project-number text-label">{project.number}</span>
            <span className="tag project-category-tag">{project.category}</span>
          </div>
          <div className="project-title-row">
            <h3 id={`proj-title-${project.id}`} className="project-title">{project.title}</h3>
            <span className="project-subtitle">{project.subtitle}</span>
          </div>
        </div>

        {/* Visualization */}
        <div className="project-viz-wrap">
          {VizComponent && <VizComponent />}
          {project.note && (
            <p className="project-note">{project.note}</p>
          )}
        </div>

        {/* Summary */}
        <p className="text-body project-summary">{project.summary}</p>

        {/* Tech tags */}
        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Expand toggle */}
        <button
          className="project-expand-btn"
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
          aria-controls={`proj-detail-${project.id}`}
          id={`proj-expand-${project.id}`}
        >
          {expanded ? 'Hide details' : 'Read case study'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={expanded ? 'M4 10l4-4 4 4' : 'M4 6l4 4 4-4'}/>
          </svg>
        </button>

        {/* Expandable detail */}
        <div
          id={`proj-detail-${project.id}`}
          role="region"
          aria-labelledby={`proj-expand-${project.id}`}
          className="project-detail"
        >
          <div className="project-detail-grid">
            <div>
              <h4 className="project-detail-label">The Problem</h4>
              <p className="text-body">{project.problem}</p>
            </div>
            <div>
              <h4 className="project-detail-label">My Approach</h4>
              <p className="text-body">{project.approach}</p>
            </div>
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary btn-sm" aria-label={`GitHub repository for ${project.title}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary btn-sm" aria-label={`Live demo for ${project.title}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2.5A5.5 5.5 0 118 13.5 5.5 5.5 0 018 2.5z"/>
                  <path d="M8 6v4M6 8h4"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// ─── Projects Section ─────────────────────────────────────────
export default function Projects() {
  const { projects, bonusProjects } = config;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <span className="text-label">Things I've Built</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            Ideas become interesting
            <br />
            <span className="gradient-text">when you build them.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large projects-intro">
            These are applications I've built — end-to-end, with real engineering decisions. Each
            project taught me something the next one used.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* Bonus projects */}
        <Reveal delay={2}>
          <div className="bonus-section">
            <h3 className="bonus-heading">Also built</h3>
            <div className="bonus-grid">
              {bonusProjects.map(p => (
                <div key={p.id} className="bonus-card card">
                  <div className="bonus-card-header">
                    <h4 className="bonus-title">{p.title}</h4>
                    <span className="tag">{p.category}</span>
                  </div>
                  <p className="text-body">{p.summary}</p>
                  <div className="bonus-tech">
                    {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="bonus-links">
                    {p.github && (
                      <a href={p.github} className="btn-ghost btn" target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} className="btn-ghost btn" target="_blank" rel="noopener noreferrer">
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
