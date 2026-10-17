import React from 'react';
import './index.css';
import { ScrollProgress, Nav } from './components/shared';
import Hero from './components/Hero';
import Story from './components/Story';
import Journey from './components/Journey';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Vision from './components/Vision';
import Principles from './components/Principles';
import Closing from './components/Closing';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <Story />
        <Journey />
        <Philosophy />
        <Projects />
        <Skills />
        <Vision />
        <Principles />
        <Closing />
      </main>
    </>
  );
}
