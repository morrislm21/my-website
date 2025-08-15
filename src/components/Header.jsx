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

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          href="#top"
          onClick={e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Home
        </a>
        <a href="#about">About</a>
        <a href='#skills'>Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>

        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
