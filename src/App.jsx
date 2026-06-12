// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import Nav from './componants/nav';
import Hero from './componants/hero';
import Projects from './componants/projects';
import About from './componants/about';
import Skills from './componants/skills';
import Experience from './componants/experience';
import Education from './componants/education';
import Footer from './componants/footer';

function App() {
  // تم تغيير الحالة الافتراضية إلى false ليكون الموقع فاتحاً عند التحميل
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;