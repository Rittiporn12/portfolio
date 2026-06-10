import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <section id="about" className="section about-section">
            <Container>
                <Row className="align-items-start g-5">
                    <Col lg={6}>
                        <p className="section-label">About Me</p>

                        <h2>
                            I am a Computer Science student exploring software development,
                            data, AI, and automation.
                        </h2>

                        <p>
                            I am currently pursuing a Bachelor's degree in Computer Science and
                            Software Development Innovation at Sripatum University. My academic
                            background focuses on full-stack development, system design, front-end
                            and back-end development, data analysis, AI model development, model
                            training, and workflow automation.
                        </p>

                        <p>
                            I enjoy learning how software systems work, analyzing problems,
                            designing practical solutions, and improving applications through
                            development, testing, and continuous learning.
                        </p>
                    </Col>

                    <Col lg={6}>
                        <div className="education-box">
                            <p className="education-label">Education</p>

                            <div className="education-item">
                                <div>
                                    <h5>Computer Science and Software Development Innovation</h5>
                                    <p>Sripatum University</p>
                                    <small>Current GPX: 3.93</small>
                                </div>
                                <span>2023 - Present</span>
                            </div>

                            <div className="education-item">
                                <div>
                                    <h5>English-Mathematics Program</h5>
                                    <p>Samutprakan School</p>
                                    <small>GPX: 3.10</small>
                                </div>
                                <span>2020 - 2023</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <Row className="mt-5">
                    <Col lg={12}>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>3+</h3>
                                <p>Projects Completed</p>
                            </div>

                            <div className="stat-card">
                                <h3>3.93</h3>
                                <p>Current GPX</p>
                            </div>

                            <div className="stat-card">
                                <h3>2026</h3>
                                <p>TA Workshop Experience</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}

export default About