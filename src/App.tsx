import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export function App() {
  return (
    <Layout>
      <Hero />
      
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}