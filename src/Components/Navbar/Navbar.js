import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css';
const NavbarC = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/pets.png" alt="Pets" className="Iconpets"/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#DOGS">DOGS</Nav.Link>
    <Nav.Link href="#CATS">CATS</Nav.Link>
    <Nav.Link href="#BIRDS">BIRDS</Nav.Link>
    <Nav.Link href="#FISH">FISH & AQUATICS</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
      <Nav.Link href="#CONTACT">INFO</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarC
