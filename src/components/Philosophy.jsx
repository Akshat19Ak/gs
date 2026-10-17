import React, { useState, useRef, useEffect } from 'react';
import { Reveal } from './shared';
import './Philosophy.css';

const STEPS = [
  {
    id: 'question',
    label: 'Question',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="9" r="6"/>
        <path d="M8.5 7.5a2.5 2.5 0 014 2c0 2-2 2.5-2 4"/>
        <circle cx="11" cy="17" r="0.7" fill="currentColor"/>
        <path d="M11 15v2"/>
      </svg>
    ),
    heading: 'Start by asking why',
    body: 'Every worthwhile project begins with a question I care about — not a solution in search of a problem.',
  },
  {
    id: 'understand',
    label: 'Understand',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11h16"/>
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 7c2 0 4 2 4 4s-2 4-4 4-4-2-4-4"/>
      </svg>
    ),
    heading: 'Understand the problem',
    body: 'Before writing code, I map the problem space — constraints, data, edge cases, and what "solved" actually means.',
  },
  {
    id: 'design',
    label: 'Design',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="16" height="16" rx="3"/>
        <path d="M7 7h8M7 11h6M7 15h4"/>
      </svg>
    ),
    heading: 'Choose the right approach',
    body: 'Selecting appropriate tools and structures before implementation saves significant time — and produces better-organized code.',
  },
  {
    id: 'build',
    label: 'Build',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18l7-14 7 14"/>
        <path d="M6.5 13h9"/>
      </svg>
    ),
    heading: 'Implement and iterate',
    body: 'Build incrementally, commit early, and stay comfortable with imperfection in early versions — clarity comes through doing.',
  },
  {
    id: 'test',
    label: 'Test',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 12l4 4 8-8"/>
        <circle cx="11" cy="11" r="9"/>
      </svg>
    ),
    heading: 'Validate real behavior',
    body: 'Software that works in theory is not software. Testing reveals assumptions and makes the system trustworthy.',
  },
  {
    id: 'improve',
    label: 'Improve',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A8 8 0 116 17"/>
        <path d="M18 8l-3-3 3-3"/>
      </svg>
    ),
    heading: 'Refine continuously',
    body: 'There is always something to improve — a cleaner abstraction, a faster path, a simpler interface. Iteration is how good software becomes great software.',
  },
];

export default function Philosophy() {
  const [active, setActive] = useState(0);

  return (
    <section id="philosophy" className="section philosophy-section">
      <div className="container">
        <Reveal>
          <span className="text-label">Engineering Philosophy</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            From a rough idea to<br />
            <span className="gradient-text">something that works.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large philosophy-intro">
            This is how I think about building things — not as a rigid methodology, but as a
            natural sequence of thinking, doing, and improving that I've found makes my
            work better, whether I'm building a web app or an ML pipeline.
          </p>
        </Reveal>

        {/* Process visual */}
        <Reveal delay={2}>
          <div className="process-container">
            {/* Step selectors */}
            <div className="process-steps" role="tablist" aria-label="Engineering process steps">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.id}>
                  <button
                    role="tab"
                    id={`process-tab-${step.id}`}
                    aria-selected={active === i}
                    aria-controls={`process-panel-${step.id}`}
                    className={`process-step ${active === i ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="process-step-icon">{step.icon}</span>
                    <span className="process-step-label">{step.label}</span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div className={`process-arrow ${active > i ? 'passed' : ''}`} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 10h8M11 6l4 4-4 4"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Detail panel */}
            <div
              key={active}
              id={`process-panel-${STEPS[active].id}`}
              role="tabpanel"
              aria-labelledby={`process-tab-${STEPS[active].id}`}
              className="process-detail"
            >
              <div className="process-detail-icon">{STEPS[active].icon}</div>
              <div>
                <h3 className="process-detail-heading">{STEPS[active].heading}</h3>
                <p className="text-body">{STEPS[active].body}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="process-progress" aria-hidden="true">
              <div
                className="process-progress-fill"
                style={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
