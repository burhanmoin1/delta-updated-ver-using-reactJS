import React, { useState } from 'react';
import './SupportForm.css';
import axios from 'axios';
import DeltaNavbar from './Navbar';
import './SupportForm.css'
import Footer from './Footer';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_complaint: '',
    customer_email: '',
    customer_phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      customer_name: formData.customer_name,
      customer_complaint: formData.customer_complaint,
      customer_email: formData.customer_email,
      customer_phone: formData.customer_phone,
    };

    try {
      // Make a POST request to your Django API endpoint using Axios
      const response = await axios.post('/api/customer-complaints/', dataToSend);

      // Upon successful submission, you can handle the response here
      if (response.status === 201) {
        console.log('Complaint submitted successfully!');
        // You can also navigate to a "thank you" page or display a success message
      }
    } catch (error) {
      console.error('Form submission failed.');
      console.error(error);
    }
  };

  return (
    <div className="supportform-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
      <p>For customer support, please use the form below:</p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_name">Customer Name:</label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_complaint">Customer Complaint:</label>
          <textarea
            id="customer_complaint"
            name="customer_complaint"
            rows="4"
            cols="50"
            value={formData.customer_complaint}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_email">Customer Email:</label>
          <input
            type="email"
            id="customer_email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_phone">Customer Phone:</label>
          <input
            type="tel"
            id="customer_phone"
            name="customer_phone"
            value={formData.customer_phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <button className="supportform-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

function SupportFormPage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <SupportForm />
      <Footer />
    </React.Fragment>
  );
}

export default SupportFormPage;