import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Navbar.css';


function DeltaNavbar() {
  const handlePhoneClick = () => {
    // Use the tel: protocol to initiate a phone call
    window.location.href = 'tel:+923463637743'; // Replace with your phone number
  };

  const handleEmailClick = () => {
    // Use the mailto: protocol to open the default email client
    window.location.href = 'mailto:burhandeltacn@gmail.com'; // Replace with your email address
  };
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
            <Nav.Link href="#Support">Support</Nav.Link>
            <Nav.Link href="#home">About us</Nav.Link>
            <Button variant="dark" className="register-button">
            Register with Delta
          </Button>
          </Nav>
          {/* Icons for phone and email */}
          <div className="icon-container">
            <i className="fas fa-phone" onClick={handlePhoneClick}></i> {/* Phone icon */}
            <i className="fas fa-envelope" onClick={handleEmailClick}></i> {/* Email icon */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DeltaNavbar;
