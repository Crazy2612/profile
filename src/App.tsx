import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;