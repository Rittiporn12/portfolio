import { Container, Row, Col } from 'react-bootstrap'

function Projects() {
    const projects = [
        {
            title: 'Motorcycle Platform',
            role: 'Full-Stack Developer & Tester',
            description:
                'Developed and tested an online motorcycle store web application using C# ASP.NET MVC, JavaScript, AJAX, SQL Server, Docker, and Postman. Focused on user flows, API testing, input validation, and database operations.',
            tags: ['ASP.NET MVC', 'SQL Server', 'Postman', 'Docker']
        },
        {
            title: 'PairPlate Nutrition AI System',
            role: 'AI Developer & LLM Training',
            description:
                'Developed and trained an AI-powered nutrition recommendation system using LLM models. Prepared and processed data from CSV, text, websites, and PDF files using OCR, then tested model responses to improve recommendation accuracy.',
            tags: ['Python', 'Google Colab', 'LLM', 'OCR']
        },
        {
            title: 'AI Chatbot & n8n Automation',
            role: 'Developer & Integration Tester',
            description:
                'Created AI Agent workflows using n8n to evaluate user input, generate responses, connect APIs, and test workflow execution, webhook triggers, data mapping, and error handling.',
            tags: ['n8n', 'AI Agent', 'Webhook', 'API Testing']
        }
    ]

    return (
        <section id="projects" className="section projects-section">
            <Container>
                <p className="section-label">Portfolio</p>
                <h2>Selected Projects</h2>

                <Row className="mt-4 g-4">
                    {projects.map((project, index) => (
                        <Col xl={4} lg={4} md={6} sm={12} key={index}>
                            <div className="project-card">
                                <div>
                                    {/* <p className="project-number">0{index + 1}</p> */}
                                    <h4>{project.title}</h4>
                                    <span>{project.role}</span>
                                    <p className="project-description">{project.description}</p>
                                </div>

                                <div className="tag-list">
                                    {project.tags.map((tag, tagIndex) => (
                                        <small key={tagIndex}>{tag}</small>
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

export default Projects