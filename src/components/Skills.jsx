import { useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from '../styles/Skills.module.css';
import { SkillItem } from '../hooks/SkillItem';

export default function Skills() {
  const ref = useRef();
  useScrollReveal(ref, styles.visible);

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <h2>Skills</h2>
      <div className={styles.skills}>
        <ul>
          <SkillItem>
            <strong>Languages:</strong> HTML | CSS | TypeScript | JavaScript | Python | Java | Bash | C++ | C# | SQL | 
          </SkillItem>
          <SkillItem>
            <strong>Technologies:</strong> Git | React | Angular | Docker | AWS | Kubernetes | Windows | Linux | macOS | Atlassian Suite
          </SkillItem>
          <SkillItem>
            <strong>Strengths:</strong> Problem Solving | Integrity | Critical Thinking | Quick Learning | Leadership | Team Management | Team Player | Creativity 
          </SkillItem>
        </ul>
      </div>
    </section>
  );
}
