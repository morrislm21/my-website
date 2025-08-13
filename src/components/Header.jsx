import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Logan Morris</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}