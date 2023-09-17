import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.jpg';
import Image from 'react-bootstrap/Image';
import './Navbar.css';


function DeltaNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='Nav-bg'>
        <Navbar.Brand href="#home">
          {/* Use the Image component to display your logo */}
          <Image src={logo} className='dcn-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Internet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cable</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DeltaNavbar;
