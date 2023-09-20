import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/support">Support</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="company-description">
          <p>
            Delta Communications is a leading provider of high-speed internet and cable services. 
            We are committed to delivering the best in connectivity and entertainment to our customers.
          </p>
          <Link to="/signup">
              <Button variant="dark" className="register-button">
                Register with Delta
              </Button>
            </Link>
        </div>
        <div className="company-info">
          <p>Address: Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi<br></br>&copy; 2023 Delta Communications. All rights reserved.</p>
        </div>        
      </footer>
    );
  };
  
  export default Footer;