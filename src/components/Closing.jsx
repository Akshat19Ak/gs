import React, { useState } from 'react';
import { config } from '../config';
import './Closing.css';

export default function Closing() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="connect" className="section closing-section">
      <div className="closing-bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="closing-card card">
          <div className="closing-header-block">
            <span className="section-eyebrow">Connect &amp; Collaborate</span>
            <div className="section-divider" />
            <h2 className="section-title-huge">
              Let's Build Something Meaningful.
            </h2>
            <h3 className="section-lead-large">
              Whether discussing distributed backends, LLM systems, algorithmic challenges,
              or engineering opportunities — I am always excited to connect.
            </h3>
          </div>

          {/* Quick contact buttons */}
          <div className="closing-actions-row">
            <a
              href={`mailto:${config.email}`}
              className="btn btn-primary"
              id="contact-email-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Email Akshat
            </a>

            <button
              onClick={copyEmail}
              className="btn btn-secondary"
              id="copy-email-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
            </button>

            {config.github && (
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-subtle"
                id="contact-github-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
            )}

            {config.linkedin && (
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-subtle"
                id="contact-linkedin-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            )}
          </div>

          {/* Details Bar */}
          <div className="closing-details-grid">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href={`mailto:${config.email}`} className="detail-value">{config.email}</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{config.phone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Institution</span>
              <span className="detail-value">KIIT University (CSE '27 · 8.82 CGPA)</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">GitHub Handle</span>
              <a href={config.github} target="_blank" rel="noopener noreferrer" className="detail-value">@Akshat19Ak</a>
            </div>
          </div>
        </div>

        {/* Footer info & Scroll to top */}
        <div className="footer-bar">
          <div className="footer-left">
            <span className="footer-name">Akshat Gupta</span>
            <span className="footer-sep">·</span>
            <span className="footer-text">Built with React &amp; Vite</span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            id="back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 13V3M3 8l5-5 5 5"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
