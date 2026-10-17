import React, { useState } from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Skills.css';

const SW_ITEMS = [
  { id: 'app-dev', label: 'Application Development', icon: '◈', rel: ['research-lens', 'raw-material-optimizer'] },
  { id: 'apis',    label: 'APIs & Backend Systems',  icon: '⬡', rel: ['research-lens', 'stock-predictor'] },
  { id: 'data',    label: 'Data Handling & DBs',     icon: '▦', rel: ['raw-material-optimizer', 'stock-predictor'] },
  { id: 'frontend',label: 'Frontend Experiences',    icon: '◫', rel: ['raw-material-optimizer', 'research-lens'] },
  { id: 'testing', label: 'Testing & Reliability',   icon: '◎', rel: [] },
];

const AI_ITEMS = [
  { id: 'ml',    label: 'Predictive Models',          icon: '◉', rel: ['stock-predictor'] },
  { id: 'nlp',   label: 'NLP & Language Models',      icon: '◆', rel: ['research-lens', 'omniview'] },
  { id: 'rag',   label: 'Retrieval-Augmented Gen.',   icon: '◈', rel: ['research-lens'] },
  { id: 'agents',label: 'Multi-Agent Applications',   icon: '⬡', rel: ['omniview'] },
  { id: 'ds',    label: 'Data-Driven Decision Support',icon: '▦', rel: ['raw-material-optimizer', 'stock-predictor'] },
];

const PROJECT_MAP = {
  'research-lens':         { label: 'Research Lens', color: '#a78bfa' },
  'omniview':              { label: 'OmniView',       color: '#67e8f9' },
  'raw-material-optimizer':{ label: 'Raw Material Optimizer', color: '#6ee7b7' },
  'stock-predictor':       { label: 'Stock Predictor', color: '#fcd34d' },
};

function SkillRow({ item, selected, onClick, side }) {
  const isSelected = selected === item.id;
  return (
    <button
      className={`skill-row ${isSelected ? 'active' : ''} skill-row-${side}`}
      onClick={() => onClick(item.id)}
      aria-pressed={isSelected}
      id={`skill-${item.id}`}
    >
      <span className="skill-icon">{item.icon}</span>
      <span className="skill-label">{item.label}</span>
    </button>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState(null);
  const { skills } = config;

  const handleSelect = (id) => setSelected(prev => prev === id ? null : id);

  const allItems = [...SW_ITEMS, ...AI_ITEMS];
  const selectedItem = allItems.find(i => i.id === selected);
  const relatedProjects = selectedItem ? selectedItem.rel : [];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal>
          <span className="text-label">Software & AI</span>
          <div className="section-divider"/>
          <h2 className="display-lg">
            Two sides of the<br />
            <span className="gradient-text">same curiosity.</span>
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-large skills-intro">
            My interests in software engineering and AI aren't separate tracks. They're two angles on
            the same goal: building things that work reliably and intelligently.
          </p>
        </Reveal>

        {/* Two-sided interactive selector */}
        <Reveal delay={2}>
          <div className="skills-split">
            {/* Left: Software Engineering */}
            <div className="skills-col">
              <h3 className="skills-col-heading">Software Engineering</h3>
              <div className="skill-rows">
                {SW_ITEMS.map(item => (
                  <SkillRow key={item.id} item={item} selected={selected} onClick={handleSelect} side="left"/>
                ))}
              </div>
            </div>

            {/* Center */}
            <div className="skills-center" aria-hidden="true">
              <div className="skills-bridge">
                <div className="bridge-orb"/>
                {selectedItem && relatedProjects.length > 0 ? (
                  <div className="bridge-projects">
                    {relatedProjects.map(pid => (
                      <div key={pid} className="bridge-project" style={{ borderColor: PROJECT_MAP[pid]?.color }}>
                        <span style={{ color: PROJECT_MAP[pid]?.color }}>{PROJECT_MAP[pid]?.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="bridge-hint">Select an area to see related projects</p>
                )}
              </div>
            </div>

            {/* Right: AI & ML */}
            <div className="skills-col">
              <h3 className="skills-col-heading">AI & Machine Learning</h3>
              <div className="skill-rows">
                {AI_ITEMS.map(item => (
                  <SkillRow key={item.id} item={item} selected={selected} onClick={handleSelect} side="right"/>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bridge quote */}
        <Reveal delay={3}>
          <div className="bridge-quote">
            <blockquote>
              "Intelligence becomes useful when it is engineered into something people can use."
            </blockquote>
          </div>
        </Reveal>

        {/* Technical toolkit */}
        <Reveal delay={2}>
          <div className="toolkit">
            <h3 className="toolkit-heading">Technical Toolkit</h3>
            <div className="toolkit-grid">
              {Object.entries({
                Languages: skills.languages,
                Backend:   skills.backend,
                Frontend:  skills.frontend,
                'AI / ML': skills.aiml,
                Data:      skills.data,
                Tools:     skills.tools,
              }).map(([cat, items]) => (
                <div key={cat} className="toolkit-group">
                  <span className="toolkit-cat text-label">{cat}</span>
                  <div className="toolkit-tags">
                    {items.map(t => <span key={t} className="tag">{t}</span>)}
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
