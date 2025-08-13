import styles from '../styles/About.module.css';
import { SkillItem } from '../hooks/SkillItem';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I’m a passionate full-stack developer with experience in front-end development (React, Angular) and back-end development (Python, Java). I have strong experience in building efficient solutions for software problems while also leveraging tools such as Git, Docker, and AWS. I also have experience on Windows, Linux (RHEL, Ubuntu), and MacOS.
            <br /><br />
            Beyond technical skills, I bring strong leadership, team management, and communication abilities, with a strong focus in problem-solving, critical thinking, and quickly learning new technologies.
            <br /><br />
            I’m currently focused on growing as a leader, enhancing my software engineering expertise, and exploring cutting-edge areas such as AI and emerging technologies. My goal is to not only build impactful software but also bring creative solutions to any arising challenges and learn more as I take on those challenges.
            <br /><br />
            Outside of work, I’m a musician who plays multiple instruments (guitar, drums, keyboard, bass), and I enjoy video games, board games, soccer, and golf. I contract at my church for worship leading as well as volunteering on our worship team.
            <br /><br />
            If you’re looking to connect about software development, video game development, leadership, or tech in general please don't hesitate to reach out!
          </p>
        </div>

        <div className={styles.side}>
          <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
              <SkillItem><strong>Languages:</strong> HTML | CSS | TypeScript | JavaScript | Python | Java | Bash | C++</SkillItem>
              <SkillItem><strong>Technologies:</strong> React | Angular | Docker | AWS | SQL | Windows | Linux | macOS | Atlassian</SkillItem>
              <SkillItem><strong>Strengths:</strong> Critical Thinking | Quick Learner | Leadership | Team Management | Team Player</SkillItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
