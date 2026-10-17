import React from 'react';
import { Reveal } from './shared';
import { config } from '../config';
import './Skills.css';

export default function Skills() {
  const { skills } = config;

  const skillGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      tag: 'Core Syntax',
      description: 'Languages used across systems programming, scripting, algorithms, and databases.',
      items: skills.languages,
    },
    {
      id: 'fullstack',
      title: 'Backend & REST API Systems',
      tag: 'Pipelines & APIs',
      description: 'Building microservices, real-time ML inference endpoints, and relational databases.',
      items: skills.fullstack,
    },
    {
      id: 'ai_ml',
      title: 'AI, Machine Learning & Agents',
      tag: 'Intelligence Stack',
      description: 'Statistical modeling, deep learning architectures, RAG, and multi-agent coordination.',
      items: skills.ai_ml,
    },
    {
      id: 'core_cs',
      title: 'Computer Science Fundamentals',
      tag: 'The Engineering Bedrock',
      description: 'Algorithmic efficiency, memory layouts, scheduling, and relational data architecture.',
      items: skills.core_cs,
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Massive Section Header */}
        <Reveal>
          <div className="section-header-block">
            <span className="section-eyebrow">Technical Competencies</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              Core Technical Arsenal.
            </h2>
            <h3 className="section-lead-large">
              A balanced toolkit spanning low-level language foundations, full-stack REST backends,
              and modern machine intelligence systems.
            </h3>
          </div>
        </Reveal>

        {/* 4 Skill Categories with big-to-small typography */}
        <div className="skills-category-grid">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.id} delay={idx + 1}>
              <div className="skill-cat-card card">
                <div className="skill-cat-top">
                  <span className="skill-cat-tag">{group.tag}</span>
                  <span className="skill-cat-num">0{idx + 1}</span>
                </div>
                <h4 className="skill-cat-title">{group.title}</h4>
                <p className="skill-cat-desc">{group.description}</p>
                <div className="skill-cat-tags">
                  {group.items.map(item => (
                    <span key={item} className="skill-chip">{item}</span>
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
