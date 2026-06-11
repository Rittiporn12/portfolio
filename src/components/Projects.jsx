import { Container, Row, Col } from 'react-bootstrap'

function Projects() {
    const projects = [
        {
            title: 'Motorcycle Platform',
            role: 'Full-Stack Developer & Tester',
            description:
                'พัฒนาและทดสอบ Web Application ร้านขายรถจักรยานยนต์ออนไลน์ โดยใช้ C# ASP.NET MVC, JavaScript, AJAX, SQL Server, Docker และ Postman โดยเน้นการทำงานของ User Flow, API Testing, Input Validation และการจัดการข้อมูลใน Database',
            tags: ['ASP.NET MVC', 'SQL Server', 'Postman', 'Docker']
        },
        {
            title: 'PairPlate Nutrition AI System',
            role: 'AI Developer & LLM Training',
            description:
                'พัฒนาและฝึกสอนระบบ AI สำหรับแนะนำโภชนาการ โดยใช้ LLM Model มีการเตรียมและประมวลผลข้อมูลจาก CSV, Text, Website และ PDF ผ่าน OCR รวมถึงทดสอบคำตอบของโมเดลเพื่อปรับปรุงความแม่นยำของคำแนะนำ',
            tags: ['Python', 'Google Colab', 'LLM', 'OCR']
        },
        {
            title: 'AI Chatbot & n8n Automation',
            role: 'Developer & Integration Tester',
            description:
                'สร้าง Workflow สำหรับ AI Agent ด้วย n8n เพื่อประเมินข้อความจากผู้ใช้ สร้างคำตอบ เชื่อมต่อ API และทดสอบการทำงานของ Workflow, Webhook Trigger, Data Mapping และ Error Handling',
            tags: ['n8n', 'AI Agent', 'Webhook', 'API Testing']
        }
    ]

    return (
        <section id="projects" className="section projects-section">
            <Container>
                <p className="section-label">Portfolio</p>
                <h2>ผลงานที่เคยทํา</h2>

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