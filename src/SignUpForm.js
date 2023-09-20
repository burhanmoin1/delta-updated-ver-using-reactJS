import React, { useState } from 'react';
import './SignUpForm.css'; 
import axios from 'axios';
import Cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    // Reset the input value to an empty string if it's empty
    if (e.target.value === '') {
      setFormData({
        ...formData,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = Cookies.load('csrftoken'); // Replace 'csrftoken' with your actual cookie name
  
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone_number,
      address: formData.address,
    };
  
    try {
      // Make a POST request to your Django API endpoint using Axios
      const response = await axios.post('api/create-customer/', dataToSend, {
        headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
        },
      });
      
        // Upon successful submission, navigate to the "thank you" page
        if (response.status === 201) {
          navigate('/thankyou');
        }
      } catch (error) {
        console.error('Form submission failed.');
        console.error(error);
      }
    };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-heading">Are you ready to test our rocket speeds?</h2>
        <p className="form-paragraph">
          Join Delta today to experience internet and cable at rocket speeds
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-divider">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-divider">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-divider">
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-divider">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button className="submit-signup" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
