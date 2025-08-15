import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Skills.module.css'; 

export function SkillItem({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} className={visible ? styles.visible : ''}>
      {children}
    </li>
  );
}
