import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavigationMenu =() =>{
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)}
