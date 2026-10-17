import React from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Projects.css';

export default function Projects() {
  const { projects } = config;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Massive Section Header */}
        <Reveal>
          <div className="section-header-block">
            <span className="section-eyebrow">Practical Execution</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              Selected Builds &amp; Working Systems.
            </h2>
            <h3 className="section-lead-large">
              Concise overviews of practical applications built across AI, machine learning,
              and full-stack REST API development.
            </h3>
          </div>
        </Reveal>

        {/* Compact, clean project cards */}
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <Reveal key={proj.id} delay={Math.min(idx + 1, 4)}>
              <div className="project-simple-card card">
                <div className="project-card-top">
                  <span className="project-index">0{idx + 1}</span>
                  <div className="project-links-row">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-icon"
                        title="GitHub Repository"
                        aria-label={`${proj.title} GitHub repository`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-icon live-link"
                        title="Live / Demo Link"
                        aria-label={`${proj.title} live demo`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        <span>Live Link</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Big project heading */}
                <h3 className="project-title-large">{proj.title}</h3>

                {/* Working description */}
                <div className="project-working-box">
                  <span className="working-label">Working:</span>
                  <p className="project-working-text">{proj.working}</p>
                </div>

                {/* Tech tags */}
                <div className="project-tech-tags">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
