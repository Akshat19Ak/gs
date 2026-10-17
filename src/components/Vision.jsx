import React, { useState } from 'react';
import { Reveal } from './shared';
import './Vision.css';

const PHASES = [
  {
    id: 'now',
    phase: 'NOW',
    title: 'Explore',
    accent: '#a78bfa',
    description:
      'Learn, experiment, and strengthen fundamentals. Build projects that test ideas against real constraints. Develop intuition for both software engineering and intelligent systems.',
    items: [
      'Strengthening CS fundamentals and algorithms',
      'Building end-to-end applications',
      'Exploring ML and LLM-powered products',
      'Learning from real engineering challenges',
    ],
  },
  {
    id: 'next',
    phase: 'NEXT',
    title: 'Engineer',
    accent: '#67e8f9',
    description:
      'Build better applications, improve software quality, and develop deeper expertise in intelligent systems. Work on things that are useful to real people, not just technically interesting.',
    items: [
      'Designing reliable, maintainable software',
      'Improving architecture and system design',
      'Building practical AI and LLM-powered products',
      'Understanding deployment, testing, and scale',
    ],
  },
  {
    id: 'always',
    phase: 'ALWAYS',
    title: 'Evolve',
    accent: '#a3e635',
    description:
      'Stay curious, question assumptions, and continue improving. The best engineers never stop learning — they just learn progressively deeper things.',
    items: [
      'Stay intellectually curious',
      'Question the tools and approaches I use',
      'Learn from experienced engineers',
      'Contribute to something meaningful',
    ],
  },
];

const ASPIRATIONS = [
  'Become a well-rounded software engineer who can design, build, test, and deploy',
  'Develop deeper expertise in AI engineering alongside software fundamentals',
  'Build complete applications from frontend to backend',
  'Create products that are useful, maintainable, and thoughtfully designed',
  'Understand architecture, testing, deployment, and long-term maintainability',
  'Learn from experienced engineers and collaborative teams',
  'Turn experiments into genuinely useful software',
];

export default function Vision() {
  const [active, setActive] = useState('now');
  const activePhase = PHASES.find(p => p.id === active);

  return (
    <section id="vision" className="section vision-section">
      <div className="container">
        <Reveal>
          <span className="text-label">Vision & Growth</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            The future is something<br />
            <span className="gradient-text-lime">I want to build.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large vision-intro">
            My ambition is to become a strong software engineer with real depth in AI engineering.
            Not as two separate goals, but as one integrated capability — the ability to design,
            build, test, and ship systems that are both reliable and intelligent.
          </p>
        </Reveal>

        {/* Phase selector */}
        <Reveal delay={2}>
          <div className="phases-container">
            <div className="phases-tabs" role="tablist" aria-label="Future phases">
              {PHASES.map(p => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active === p.id}
                  aria-controls={`phase-panel-${p.id}`}
                  id={`phase-tab-${p.id}`}
                  className={`phase-tab ${active === p.id ? 'active' : ''}`}
                  style={active === p.id ? { '--phase-color': p.accent } : {}}
                  onClick={() => setActive(p.id)}
                >
                  <span className="phase-badge">{p.phase}</span>
                  <span className="phase-title">{p.title}</span>
                </button>
              ))}
            </div>

            <div
              key={active}
              id={`phase-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`phase-tab-${active}`}
              className="phase-panel"
              style={{ '--phase-color': activePhase.accent }}
            >
              <p className="text-large phase-desc">{activePhase.description}</p>
              <ul className="phase-list">
                {activePhase.items.map(item => (
                  <li key={item} className="phase-list-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      stroke="var(--phase-color)" strokeWidth="2">
                      <path d="M3 8l3.5 3.5L13 4"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Aspirations list */}
        <Reveal delay={3}>
          <div className="aspirations">
            <h3 className="aspirations-heading">What I'm working toward</h3>
            <div className="aspirations-grid">
              {ASPIRATIONS.map((asp, i) => (
                <div key={i} className="aspiration-item">
                  <span className="aspiration-num text-label">{String(i + 1).padStart(2, '0')}</span>
                  <span className="aspiration-text">{asp}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
