import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <Container>
                <Row className="align-items-center g-4">
                    <Col lg={7}>
                        <p className="section-label">Contact</p>
                        <h2>Let’s work together</h2>
                        <p>
                            I am currently looking for a Software Tester internship opportunity.
                            Feel free to contact me for more information.
                        </p>
                    </Col>

                    <Col lg={5}>
                        <div className="contact-card">
                            <p>
                                <strong>Phone:</strong> 085-108-9843
                            </p>
                            <p>
                                <strong>Email:</strong> rittiporn.contact@gmail.com
                            </p>
                            <p>
                                <strong>Address:</strong> Mueng Samut Prakan, Samut Prakan 10280
                            </p>
                            <p>
                                <strong>GitHub:</strong> github.com/Rittiporn12
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact