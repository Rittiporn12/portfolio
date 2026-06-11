import { useState } from 'react'
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap'

import workshopImg1 from '../assets/workshop-1.jpg'
import workshopImg2 from '../assets/workshop-2.jpeg'

function Experience() {
    const [showModal, setShowModal] = useState(false)

    const workshopImages = [
        {
            src: workshopImg1,
            alt: 'AI-Powered Automation using n8n Workshop 1'
        },
        {
            src: workshopImg2,
            alt: 'AI-Powered Automation using n8n Workshop 2'
        }
    ]

    return (
        <section id="experience" className="section experience-section">
            <Container>
                <p className="section-label">Experience</p>
                <h2>ประสบการณ์การทำงาน</h2>

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="experience-card">
                            <Row className="align-items-center g-4">
                                <Col lg={7}>
                                    <div className="experience-header">
                                        <div>
                                            <h4>Teaching Assistant (TA)</h4>
                                            <p className="experience-company">
                                                AI-Powered Automation using n8n Workshop
                                            </p>
                                            <p className="experience-location">
                                                มหาวิทยาลัยเกษตรศาสตร์ บางเขน
                                            </p>
                                        </div>

                                        <span className="experience-date">พฤษภาคม 2026</span>
                                    </div>

                                    <div className="experience-content">
                                        <p>
                                            ได้ปฏิบัติหน้าที่เป็นผู้ช่วยสอนใน Workshop หัวข้อ
                                            AI-Powered Automation using n8n โดยช่วยดูแลและให้คำแนะนำผู้เข้าร่วม
                                            ระหว่างการทำกิจกรรมแบบ Hands-on
                                        </p>

                                        <ul>
                                            <li>
                                                ช่วยแนะนำผู้เข้าร่วมในการใช้งาน n8n เพื่อสร้าง Workflow Automation เบื้องต้น
                                            </li>
                                            <li>
                                                ช่วยตรวจสอบและแก้ไขปัญหาเกี่ยวกับ Workflow, การตั้งค่า Node และ Execution Error
                                            </li>
                                            <li>
                                                สนับสนุนผู้สอนในการอธิบายขั้นตอนของ Workshop และช่วยให้ผู้เข้าร่วมสามารถทำตามกิจกรรมได้
                                            </li>
                                            <li>
                                                ได้รับประสบการณ์จริงด้าน Automation Concept, Workflow Testing และ User Support
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
                                </Col>

                                <Col lg={5}>
                                    <div className="experience-photo-box">
                                        <img
                                            src={workshopImg1}
                                            alt="AI-Powered Automation using n8n Workshop"
                                        />

                                        <div className="experience-photo-overlay">
                                            <Button
                                                className="photo-more-btn"
                                                onClick={() => setShowModal(true)}
                                            >
                                                View Photos
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="lg"
                className="experience-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>AI-Powered Automation using n8n Workshop</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Carousel>
                        {workshopImages.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="modal-workshop-img"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </section>
    )
}

export default Experience