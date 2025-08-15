import { useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const icons = entry.target.querySelectorAll(`.${styles.contactLink}`);
            icons.forEach((icon, i) => {
              setTimeout(() => {
                icon.classList.add(styles.visible);
              }, i * 150); // stagger animation
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className={styles.footer} ref={containerRef}>
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
