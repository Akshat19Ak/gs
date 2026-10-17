import React from 'react';
import { Reveal } from './shared';
import './Principles.css';

const PRINCIPLES = [
  {
    id: 'curious',
    number: '01',
    title: 'Stay curious.',
    body: 'The best decisions come from genuinely wanting to understand — not from confirming what you already believe.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="14" cy="12" r="7"/>
        <path d="M14 19v3M11 10c.5-1.5 5-1.5 5 1.5s-3 2.5-3 4"/>
        <circle cx="14" cy="24.5" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'understand',
    number: '02',
    title: 'Understand before optimizing.',
    body: 'Premature optimization hides the real problem. Understand what a system is supposed to do before making it faster.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14h20M14 4v20"/>
        <circle cx="14" cy="14" r="4"/>
        <circle cx="14" cy="14" r="8" strokeDasharray="3,3"/>
      </svg>
    ),
  },
  {
    id: 'build',
    number: '03',
    title: 'Build, test, and improve.',
    body: 'No design survives contact with reality. Build something, learn from it, and make it better. Repeat.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="8" width="18" height="14" rx="3"/>
        <path d="M9 12h10M9 16h7"/>
        <path d="M14 4v4"/>
      </svg>
    ),
  },
  {
    id: 'useful',
    number: '04',
    title: 'Make technology useful.',
    body: 'Technology that doesn\'t solve a real problem is just novelty. The goal is software that helps real people do real things.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 4l2.4 7.3H24l-6.2 4.5 2.4 7.3L14 18.5l-6.2 4.6 2.4-7.3L4 11.3h7.6z"/>
      </svg>
    ),
  },
];

export default function Principles() {
  return (
    <section id="principles" className="section principles-section">
      <div className="container">
        <Reveal>
          <span className="text-label">My Principles</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            What I want my<br />
            <span className="gradient-text">work to stand for.</span>
          </h2>
        </Reveal>

        <div className="principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.id} delay={i + 1}>
              <div className="principle-card card">
                <div className="principle-top">
                  <span className="principle-number text-label">{p.number}</span>
                  <span className="principle-icon">{p.icon}</span>
                </div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
