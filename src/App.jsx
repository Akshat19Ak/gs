import React from 'react';
import './index.css';
import { ScrollProgress, Nav } from './components/shared';
import Hero from './components/Hero';
import Story from './components/Story';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Skills from './components/Skills';
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
        <Projects />
        <Vision />
        <Skills />
        <Closing />
      </main>
    </>
  );
}
