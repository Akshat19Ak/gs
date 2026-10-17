import React from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Story.css';

export default function Story() {
  const { education } = config;

  return (
    <section id="identity" className="section identity-section">
      <div className="container">
        {/* Massive Section Header */}
        <Reveal>
          <div className="section-header-block">
            <span className="section-eyebrow">Identity & Mindset</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              Who I Am &amp; How I See Myself.
            </h2>
            <h3 className="section-lead-large">
              A student of computer science obsessed with understanding systems from first principles —
              not just making code work, but understanding <span className="gradient-text">why and how it performs</span>.
            </h3>
          </div>
        </Reveal>

        {/* 3 Core Identity Pillars */}
        <div className="identity-grid">
          {/* Pillar 1 */}
          <Reveal delay={1}>
            <div className="identity-card card">
              <div className="identity-card-header">
                <span className="card-number">01</span>
                <span className="card-tag">Self-Perspective</span>
              </div>
              <h4 className="card-heading-large">The Incurable Curiosity</h4>
              <p className="card-body-text">
                I see myself as a builder who cannot settle for treating software as a black box.
                When training an LSTM model or routing requests through an async FastAPI endpoint,
                I don’t just import libraries and hope for the best. I want to know how the gradient flows,
                how the event loop handles concurrency, and where memory is allocated under the hood.
              </p>
              <div className="card-quote">
                "Real engineering begins the moment you refuse to accept abstractions as magic."
              </div>
            </div>
          </Reveal>

          {/* Pillar 2 */}
          <Reveal delay={2}>
            <div className="identity-card card">
              <div className="identity-card-header">
                <span className="card-number">02</span>
                <span className="card-tag">Execution Philosophy</span>
              </div>
              <h4 className="card-heading-large">From Theory to Working Systems</h4>
              <p className="card-body-text">
                Ideas are easy; robust systems are hard. I believe in fast prototyping backed by methodical
                refinement. My work bridges the gap between statistical machine learning and production
                software engineering — building REST APIs, containerizing with Docker, normalizing databases,
                and testing against real-world edge cases.
              </p>
              <div className="card-quote">
                "A model inside a notebook is an experiment. A model behind a resilient API is a solution."
              </div>
            </div>
          </Reveal>

          {/* Pillar 3 */}
          <Reveal delay={3}>
            <div className="identity-card card">
              <div className="identity-card-header">
                <span className="card-number">03</span>
                <span className="card-tag">Academic Rigor</span>
              </div>
              <h4 className="card-heading-large">Grounded in Core CS</h4>
              <p className="card-body-text">
                Currently pursuing B.Tech in Computer Science and Engineering at <strong>KIIT University</strong> with
                a <strong>CGPA of 8.82 / 10.0</strong> (Expected May 2027). Prior foundation at Academic World School
                (Secondary 93%, Senior Secondary 89%). Every high-level software abstraction rests on low-level fundamentals.
              </p>
              <div className="coursework-badges">
                {education.coursework.map(c => (
                  <span key={c} className="course-badge">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
