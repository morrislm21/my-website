import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#top" onClick={e => handleNavClick(e, 'top')}>Home</a>
        <a href="#about" onClick={e => handleNavClick(e, 'about')}>About</a>
        <a href="#skills" onClick={e => handleNavClick(e, 'skills')}>Skills</a>
        <a href="#portfolio" onClick={e => handleNavClick(e, 'portfolio')}>Portfolio</a>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')}>Contact</a>

        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
