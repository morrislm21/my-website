import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.contactContainer}>
        <a href="mailto:morrislm21@gmail.com" className={styles.contactLink}>
          <FaEnvelope className={styles.icon} /> morrislm21@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/logan-morris-a7114a1b8/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a
          href="https://github.com/morrislm21"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaGithub className={styles.icon} /> GitHub
        </a>
      </div>
    </footer>
  );
}
