import React, { useState } from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Journey.css';

export default function Journey() {
  const { journey, societies } = config;
  const [activeStage, setActiveStage] = useState(null);

  const toggleStage = (id) => {
    setActiveStage(prev => (prev === id ? null : id));
  };

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        {/* Massive Section Header */}
        <Reveal>
          <div className="section-header-block">
            <span className="section-eyebrow">The Chronological Progression</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              My Journey: How Curiosity Became Craft.
            </h2>
            <h3 className="section-lead-large">
              Starting with university technical societies, transitioning deeply into AI/ML &amp; 195+ cloud labs,
              advancing to full-stack Python REST APIs, and anchoring in core Software Engineering &amp; DSA.
            </h3>
          </div>
        </Reveal>

        {/* Starting Catalyst Spotlight: University Societies */}
        <Reveal delay={1}>
          <div className="societies-spotlight card">
            <div className="spotlight-header">
              <div className="spotlight-badge">Dec 2024 · The Starting Point</div>
              <h3 className="spotlight-title">Joining Campus Tech Societies at KIIT</h3>
              <p className="spotlight-subtitle">
                The defining spark that took me out of classroom theory and immersed me in a culture of building, hackathons, and community leadership.
              </p>
            </div>

            <div className="societies-grid">
              {societies.map((soc) => (
                <div key={soc.name} className="society-pill">
                  <div className="society-role-badge">{soc.role}</div>
                  <h4 className="society-name">{soc.name}</h4>
                  <div className="society-affil">{soc.affiliation} · {soc.period}</div>
                  <p className="society-desc">{soc.highlights}</p>
                </div>
              ))}
            </div>

            <div className="catalyst-box spotlight-catalyst">
              <div className="catalyst-tag">
                <span className="catalyst-icon">✦</span>
                <span className="catalyst-title">What Made Me Explore More:</span>
              </div>
              <p className="catalyst-text">
                Being surrounded by passionate peers, organizing flagship initiatives like <strong>AI Odyssey 2025</strong> and serving on the Central Organizing Committee for <strong>Technical KIIT Fest 9.0</strong> proved to me that real engineering happens in execution. Hearing developers discuss machine intelligence ignited a hunger to explore ML from first principles.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Chronological Timeline */}
        <div className="timeline-container" role="list">
          {journey.map((step, idx) => {
            const isExpanded = activeStage === step.id || activeStage === null;
            return (
              <Reveal key={step.id} delay={Math.min(idx + 1, 4)}>
                <div
                  className={`timeline-node ${isExpanded ? 'active' : ''}`}
                  role="listitem"
                >
                  {/* Timeline track marker */}
                  <div className="timeline-marker-col">
                    <div className="timeline-circle">
                      <span className="circle-dot" />
                    </div>
                    {idx < journey.length - 1 && <div className="timeline-trail" />}
                  </div>

                  {/* Timeline card body */}
                  <div className="timeline-content-card card">
                    {/* Header: Date + Phase */}
                    <div className="timeline-top-row">
                      <div className="timeline-phase-wrap">
                        <span className="phase-pill">{step.phase}</span>
                        <span className="date-tag">{step.date}</span>
                      </div>
                      <span className="timeline-step-badge">{step.badge}</span>
                    </div>

                    {/* Step Title & Tagline (Large Hierarchy) */}
                    <h3 className="timeline-heading-huge">{step.title}</h3>
                    <h4 className="timeline-subheading">{step.tagline}</h4>

                    {/* Summary */}
                    <p className="timeline-summary-text">{step.summary}</p>

                    {/* The Trigger: What made me explore more */}
                    <div className="catalyst-box">
                      <div className="catalyst-tag">
                        <span className="catalyst-icon">⚡</span>
                        <span className="catalyst-title">What Made Me Explore More:</span>
                      </div>
                      <p className="catalyst-text">{step.catalyst}</p>
                    </div>

                    {/* Tags */}
                    <div className="timeline-tags-wrap">
                      {step.tags.map(tag => (
                        <span key={tag} className="timeline-tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
