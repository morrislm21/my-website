import { useRef } from 'react';
import styles from '../styles/About.module.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const ref = useRef();
  useScrollReveal(ref, styles.visible);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I’m a passionate full-stack developer with experience in front-end development
            (React, Angular) and back-end development (Python, Java). I have strong experience
            in building efficient solutions for software problems while also leveraging tools
            such as Git, Docker, and AWS. I also have experience on Windows, Linux (RHEL,
            Ubuntu), and macOS.
          </p>
          <p>
            Beyond technical skills, I bring strong leadership, team management, and
            communication abilities, with a strong focus in problem-solving, critical
            thinking, and quickly learning new technologies.
          </p>
          <p>
            I’m currently focused on growing as a leader, enhancing my software engineering
            expertise, and exploring cutting-edge areas such as AI and emerging technologies.
            My goal is to not only build impactful software but also contribute creative solutions 
            to emerging problems while continuously learning along the way.
          </p>
          <p>
            Outside of work, I’m a musician who plays multiple instruments (guitar, drums,
            keyboard, bass), and I enjoy video games, board games, soccer, and golf. I
            contract at my church for worship leading as well as volunteer on our worship
            team.
          </p>
          <p>
            If you’re looking to connect about software development, video game development,
            leadership, or tech in general please don't hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
