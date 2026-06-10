import { Container, Row, Col } from 'react-bootstrap'

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <Container>
                <p className="section-label">Experience</p>
                <h2>Work Experience</h2>

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h4>Teaching Assistant (TA)</h4>
                                    <p className="experience-company">
                                        AI-Powered Automation using n8n Workshop
                                    </p>
                                    <p className="experience-location">
                                        Kasetsart University, Bangkhen
                                    </p>
                                </div>

                                <span className="experience-date">May 2026</span>
                            </div>

                            <div className="experience-content">
                                <p>
                                    Assisted participants during the AI-Powered Automation using n8n workshop,
                                    providing guidance and support during hands-on activities.
                                </p>

                                <ul>
                                    <li>
                                        Supported participants in using n8n to create basic workflow automation.
                                    </li>
                                    <li>
                                        Helped troubleshoot workflow issues, node configuration problems, and execution errors.
                                    </li>
                                    <li>
                                        Assisted the instructor in explaining workshop steps and ensuring participants could follow the activities.
                                    </li>
                                    <li>
                                        Gained practical experience in automation concepts, workflow testing, and user support.
                                    </li>
                                </ul>
                            </div>

                            <div className="experience-tags">
                                <small>n8n</small>
                                <small>Workflow Automation</small>
                                <small>Teaching Assistant</small>
                                <small>Troubleshooting</small>
                                <small>User Support</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience