import styles from '../styles/Hero.module.css';
import profilePic from '../assets/logan-morgan-profile.jpg';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <img src={profilePic} alt="Logan Morris Profile" className={styles.profilePic} />
      <h1 className={styles.name}>Logan Morris</h1>
    </section>
  );
}
