import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './index.css';
import HomePage from './HomePage'; // Import your homepage component here
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './SignUpPage';
import ThankYouPage from './ThankYouPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Define a route for your homepage */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

