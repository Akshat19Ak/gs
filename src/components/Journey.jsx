import React, { useState } from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Journey.css';

export default function Journey() {
  const [expanded, setExpanded] = useState(null);
  const { timeline } = config;

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <Reveal>
          <span className="text-label">My Journey</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            Less about knowing everything.<br/>
            <span className="gradient-text">More about learning how to build.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large journey-intro">
            My development as an engineer is a progression of capabilities, curiosity, and projects
            — not a neat career ladder. Here's how the journey has unfolded so far.
          </p>
        </Reveal>

        <div className="timeline" role="list">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delay={Math.min(i + 1, 5)}>
              <div
                role="listitem"
                className={`timeline-item ${expanded === entry.id ? 'expanded' : ''}`}
              >
                {/* Line connector */}
                <div className="timeline-connector" aria-hidden="true">
                  <div className="timeline-dot"/>
                  {i < timeline.length - 1 && <div className="timeline-line"/>}
                </div>

                <div className="timeline-body">
                  <button
                    className="timeline-header"
                    onClick={() => toggle(entry.id)}
                    aria-expanded={expanded === entry.id}
                    aria-controls={`timeline-panel-${entry.id}`}
                    id={`timeline-btn-${entry.id}`}
                  >
                    <div className="timeline-meta">
                      <span className="timeline-period text-label">{entry.period}</span>
                      <h3 className="timeline-title">{entry.title}</h3>
                    </div>
                    <span className="timeline-chevron" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={expanded === entry.id ? 'M5 12l5-5 5 5' : 'M5 8l5 5 5-5'}/>
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`timeline-panel-${entry.id}`}
                    role="region"
                    aria-labelledby={`timeline-btn-${entry.id}`}
                    className="timeline-content"
                  >
                    <p className="text-body timeline-desc">{entry.description}</p>
                    <div className="timeline-tags">
                      {entry.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Experience callout */}
        <Reveal delay={2}>
          <div className="experience-card card">
            <div className="exp-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="7" width="16" height="11" rx="2"/>
                <path d="M7 7V5a3 3 0 016 0v2"/>
                <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className="text-label exp-label">Professional Experience</span>
              <h3 className="exp-role">Software Development Intern</h3>
              <p className="exp-org">Bhilai Steel Plant (SAIL) · June 2026</p>
              <p className="text-body exp-desc">
                {config.experience[0].description}
              </p>
              <div className="exp-tags">
                {config.experience[0].skills.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
