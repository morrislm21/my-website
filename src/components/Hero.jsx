import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <img
        src="/logan-morgan-profile.jpg"
        alt="Logan Morris Profile"
        className={styles.profilePic}
      />
      <h1 className={styles.name}>Logan Morris</h1>
    </section>
  );
}
