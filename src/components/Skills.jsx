import { Container, Row, Col } from 'react-bootstrap'

function Skills() {
    const skillGroups = [
        {
            title: 'Programming Languages',
            icon: 'bi bi-code-slash',
            skills: [
                {
                    name: 'C#',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
                },
                {
                    name: 'JavaScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                },
                {
                    name: 'Python',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: 'bi bi-layers-fill',
            skills: [
                {
                    name: 'React',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                },
                {
                    name: 'Node.js',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                },
                {
                    name: 'Express.js',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                },
                {
                    name: 'ASP.NET MVC',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
                }
            ]
        },
        {
            title: 'Databases',
            icon: 'bi bi-database-fill',
            skills: [
                {
                    name: 'SQL Server',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
                },
                {
                    name: 'MySQL',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                },
                {
                    name: 'MongoDB',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                }
            ]
        },
        {
            title: 'Tools & Others',
            icon: 'bi bi-tools',
            skills: [
                {
                    name: 'HTML',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    name: 'CSS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                },
                {
                    name: 'Docker',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                },
                {
                    name: 'Git',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                },
                {
                    name: 'GitHub',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                },
                {
                    name: 'Postman',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
                },
                {
                    name: 'Swagger',
                    icon: 'https://cdn.simpleicons.org/swagger/85EA2D'
                },
                {
                    name: 'n8n',
                    icon: 'https://cdn.simpleicons.org/n8n/EA4B71'
                },
                {
                    name: 'Trello',
                    icon: 'https://cdn.simpleicons.org/trello/0052CC'
                },
                {
                    name: 'Figma',
                    icon: 'https://cdn.simpleicons.org/figma/F24E1E'
                },
                {
                    name: 'Canva',
                    icon: 'https://img.icons8.com/color/48/canva.png'
                },
                {
                    name: 'Gemini',
                    icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2'
                },
                {
                    name: 'Claude',
                    icon: 'https://cdn.simpleicons.org/claude/D97757'
                }
            ]
        }
    ]

    return (
        <section id="skills" className="section skills-section">
            <Container>
                <div className="skills-title-wrap">
                    <p className="section-label">Skills</p>

                    <h2>
                        My Tech Stack
                    </h2>

                    <p className="section-description">
                        เทคโนโลยีและเครื่องมือที่ผมใช้ในการพัฒนา Web Application,
                        API, Database, Automation Workflow และ Software Testing
                    </p>
                </div>

                <Row className="mt-4 g-4">
                    {skillGroups.map((group, index) => (
                        <Col lg={6} md={12} key={index}>
                            <div className="skill-group-card">
                                <div className="skill-group-title">
                                    <i className={group.icon}></i>
                                    <h4>{group.title}</h4>
                                </div>

                                <div className="skill-badge-list">
                                    {group.skills.map((skill, skillIndex) => (
                                        <div className="skill-badge" key={skillIndex}>
                                            <img src={skill.icon} alt={skill.name} />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Skills