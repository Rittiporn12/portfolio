import { Container, Nav, Navbar } from 'react-bootstrap'

function AppNavbar() {
    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand">
                    <span>&lt;/&gt;</span> Rittiporn Phungphai
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" className="navbar-toggle" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto nav-menu">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar