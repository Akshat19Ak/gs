import React, { useState } from 'react';
import { Reveal } from './shared';
import './Story.css';

const THEMES = [
  {
    id: 'curiosity',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="14" cy="12" r="7"/>
        <path d="M14 19v3M11.5 10.5a2.5 2.5 0 015 0c0 2-2.5 2.5-2.5 4"/>
        <circle cx="14" cy="24" r="0.8" fill="currentColor"/>
      </svg>
    ),
    title: 'Curiosity',
    heading: 'Exploring how things work',
    body: "I've always been drawn to understanding systems from the inside — not just using tools, but asking why they behave the way they do. That impulse to dig deeper has led me from learning the basics of programming to exploring machine learning, distributed systems, and intelligent applications. Every new technology starts with a genuine question.",
  },
  {
    id: 'engineering',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="10" width="20" height="12" rx="2"/>
        <path d="M9 10V7a5 5 0 0110 0v3"/>
        <circle cx="14" cy="16" r="2"/>
        <path d="M14 18v2"/>
      </svg>
    ),
    title: 'Engineering',
    heading: 'Translating ideas into software',
    body: "I find the act of building genuinely satisfying — the process of moving from a rough idea to a working implementation through code, debugging, iteration, and testing. I approach engineering as a craft: every project is an opportunity to write better code, structure a more coherent system, and produce something that actually does what it is supposed to do.",
  },
  {
    id: 'growth',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 22c0-8 5-14 10-14s10 6 10 14"/>
        <path d="M14 8V4"/>
        <path d="M10 12L7 9M18 12l3-9"/>
      </svg>
    ),
    title: 'Growth',
    heading: 'Learning from every challenge',
    body: "I don't expect to have all the answers before I start. The best learning happens when I take on something slightly beyond my current capability — build something imperfect, understand why it failed, and do it better the next time. My technical journey is a collection of these loops, and I expect that pattern to continue for a long time.",
  },
];

export default function Story() {
  const [active, setActive] = useState('curiosity');
  const activeTheme = THEMES.find(t => t.id === active);

  return (
    <section id="story" className="section story-section">
      <div className="container">
        <Reveal>
          <span className="text-label">My Story</span>
          <div className="section-divider"/>
          <h2 className="display-lg story-heading">
            Every interesting thing<br />starts with a question.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large story-intro">
            I'm a computer science student who found that the subjects I kept returning to were
            the ones where understanding the mechanism mattered as much as knowing the answer.
            My interest spans both classical software engineering and the newer space of AI-powered
            applications — not as separate disciplines, but as complementary ways of building things
            that work.
          </p>
        </Reveal>

        <div className="story-themes">
          {/* Theme selector tabs */}
          <Reveal delay={2} className="theme-tabs">
            <div className="theme-tab-list" role="tablist" aria-label="Core themes">
              {THEMES.map(t => (
                <button
                  key={t.id}
                  id={`tab-${t.id}`}
                  role="tab"
                  aria-selected={active === t.id}
                  aria-controls={`panel-${t.id}`}
                  className={`theme-tab ${active === t.id ? 'active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  <span className="theme-tab-icon">{t.icon}</span>
                  <span>{t.title}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Theme panel */}
          <Reveal delay={3}>
            <div
              key={active}
              id={`panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="theme-panel"
            >
              <div className="theme-panel-icon">{activeTheme.icon}</div>
              <h3 className="display-md theme-panel-heading">{activeTheme.heading}</h3>
              <p className="text-large theme-panel-body">{activeTheme.body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
