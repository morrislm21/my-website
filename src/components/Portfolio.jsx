import styles from '../styles/Portfolio.module.css';

const experiences = [
  {
    id: 'nisc',
    company: 'NISC',
    dates: 'January 2025–Present',
    role: 'Full Stack Developer',
    description: [
      'Write Python scripts to run automated deployments, cutting down on manual setup steps for deploying broadband sites',
      'Work on Angular front end to revamp a legacy weather application showing weather data over specified time ranges based on zip codes',
      'Develop and integrate Java backend APIs for the weather application and member messaging system that delivers bills, notices, and service information',
      'Create Bamboo builds and deployments',
      'Run Docker containers to containerize automated deployment efforts, increasing efficiency and reducing memory usage',
      'Revamp company dashboard information page using modern Angular'
    ],
  },
  {
    id: 'omni',
    company: 'Omni Federal',
    dates: 'June 2022–January 2025',
    role: 'Software Engineer',
    projects: [
      {
        name: 'GEOAxIS (Leidos)',
        description: [
          'Developed and tested Spring Boot applications using Java and JUnit, ensuring over 70% code coverage',
          'Created automated CI/CD deployments using Ansible and YAML files',
          'Authored a company-wide document to help colleagues learn Ansible and YAML development',
          'Ran automated UI tests using Cucumber and Selenium, reducing manual testing efforts'
        ],
        link: 'https://www.leidos.com/insights/geoaxis-secures-intelligence-efficiency-nga',
      },
      {
        name: 'Omni Labs',
        description: [
          'Developed and integrated APIs for a React front end application in Python, pulling data from a PostgreSQL database',
          'Worked on a team to create two web applications from the ground up using React: RedHound and MegaStar',
          'Created an internal Omni Labs homepage to display projects using React'
        ],
        links: [
          { name: 'RedHound', url: 'https://omnifederal.com/what-we-do/omni-solutions/redhound/' },
          { name: 'MegaStar', url: 'https://omnifederal.com/what-we-do/omni-solutions/megastar/' },
        ]
      }
    ]
  },
  {
    id: 'validatar',
    company: 'Teknion Data Solutions (Internship)',
    dates: 'June 2021–August 2021',
    role: 'Intern',
    description: [
      'Worked on an API documentation page in Swagger, creating the documentation and adding API testing functionality',
      'Developed and integrated APIs that interacted with the SQL database',
      'Developed SQL commands used for data extraction',
      'Helped develop the start of the Validatar application using HTML, CSS, and JavaScript'
    ],
    link: 'https://www.validatar.com/',
  },
  {
    id: 'worship',
    company: 'Waypoint Church',
    role: 'Contract Student Worship Leader (August 2022–Present)',
    description: [
      'Plan services for student worship using Planning Center for a student ministry of over 200 students',
      'Lead musical worship for midweek services, weekend retreats, and student camps',
      'Develop students on the worship team in leadership and musical skills',
      'Work with staff members to direct worship in the student ministry',
      'Plan and lead worship nights',
      'Create and modify Ableton Live tracks used during worship'
    ],
  },
  {
    id: 'worship-volunteer',
    company: 'Waypoint Church',
    role: 'Volunteer Worship Team Member (May 2019–Present)',
    description: [
      'Play on the worship team for a church of over 3,000 members',
      'Lead songs and a few services for main worship services',
      'Fill in as musical director when needed',
      'Play in conferences hosted by the church',
      'Work closely with the head worship pastor on planning services using Planning Center'
    ],
    video: {
      url: 'https://www.youtube.com/embed/_giJb0Gaowc',
      description: 'Check out a video of me leading Raise A Hallelujah at one of our Sunday Services!'
    }
  }
];

const softwareExperiences = experiences.filter(exp =>
  ['nisc', 'omni', 'validatar'].includes(exp.id)
);

const ministryExperiences = experiences.filter(exp =>
  ['worship', 'worship-volunteer'].includes(exp.id)
);

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Software Engineering & Ministry Experience</h2>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3>Software Engineering Experience</h3>
          {softwareExperiences.map(exp => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
        <div className={styles.column}>
          <h3>Ministry Experience</h3>
          {ministryExperiences.map(exp => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience }) {
  const { company, dates, role, description, projects, link, video } = experience;
  return (
    <div className={styles.experienceItem}>
      <h4>
        {company} {dates && <span className={styles.dates}>— {dates}</span>}
      </h4>
      <p className={styles.role}>{role}</p>

      {description && (
        <ul>
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      )}

      {/* Render main link if exists and no projects */}
      {!projects && link && (
        <p className={styles.inlineLink}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Validatar
          </a>
        </p>
      )}

      {projects && projects.map(({ name, description, link, links }, i) => (
        <div key={i} className={styles.projectItem}>
          <h5>{name}</h5>
          <ul>
            {description.map((desc, j) => (
              <li key={j}>{desc}</li>
            ))}
          </ul>

          {link && (
            <p className={styles.inlineLink}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name === 'GEOAxIS (Leidos)' ? 'GEOAxIS' : link}
              </a>
            </p>
          )}

          {links && (
            <div className={styles.projectLinks}>
              {links.map(({ name: linkName, url }, k) => (
                <p key={k} className={styles.inlineLink}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {linkName}
                  </a>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}

      {video && (
        <div className={styles.videoWrapper}>
          <p>{video.description}</p>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
