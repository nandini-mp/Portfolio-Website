import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Profiles />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;