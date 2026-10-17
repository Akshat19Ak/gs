import React from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Vision.css';

export default function Vision() {
  const { vision } = config;

  return (
    <section id="vision" className="section vision-section">
      <div className="container">
        {/* Massive Section Header */}
        <Reveal>
          <div className="section-header-block">
            <span className="section-eyebrow">Aspirations &amp; Future Horizon</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              Who I Want To Be.
            </h2>
            <h3 className="section-lead-large">
              {vision.statement}
            </h3>
          </div>
        </Reveal>

        {/* 3 Vision Pillars with big-to-small typography */}
        <div className="vision-pillars-grid">
          {vision.pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx + 1}>
              <div className="vision-pillar-card card">
                <div className="pillar-top">
                  <span className="pillar-num">0{idx + 1}</span>
                  <span className="pillar-accent-line" />
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Self-Reflection & Commitments */}
        <Reveal delay={2}>
          <div className="future-manifesto-card card">
            <div className="manifesto-badge">Personal Commitments</div>
            <h3 className="manifesto-heading">What I Hold Myself Accountable To:</h3>
            <div className="manifesto-list">
              <div className="manifesto-item">
                <span className="manifesto-bullet">✦</span>
                <span className="manifesto-text"><strong>Never stop questioning abstractions:</strong> Always know what the compiler, interpreter, network, and hardware are doing below the code.</span>
              </div>
              <div className="manifesto-item">
                <span className="manifesto-bullet">✦</span>
                <span className="manifesto-text"><strong>Build things people can actually use:</strong> Ship reliable REST APIs and intuitive tools, not just isolated toy prototypes.</span>
              </div>
              <div className="manifesto-item">
                <span className="manifesto-bullet">✦</span>
                <span className="manifesto-text"><strong>Ground intelligence in disciplined engineering:</strong> High-performance Python DSA and robust system design make machine learning truly viable at scale.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
