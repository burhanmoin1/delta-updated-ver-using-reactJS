import React, { useState } from 'react';
import './SignUpForm.css';
import axios from 'axios';
import Cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import authToken from './AuthToken';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    internet_package: 'basic',
    cable_package: 'cable',
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
      internet_package: formData.internet_package,
      cable_package: formData.cable_package,
    };

    try {
      // Make a POST request to your Django API endpoint using Axios
      const response = await axios.post('api/create-customer/', dataToSend, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Authorization': authToken,
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
        <h2 className="form-heading">Are you ready to test out our rocket speeds?</h2>
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
            required
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
            required
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
            required
          />
        </div>
        <div className="form-divider">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className="form-divider">
          <label htmlFor="internet_package">Select an Internet Package</label>
          <select
            className="form-control"
            id="internet_package"
            name="internet_package"
            required
            value={formData.internet_package}
            onChange={handleChange}
          >
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="void">Void</option>
          </select>
        </div>
        <div className="form-divider">
          <label htmlFor="cable_package">Select a Cable Package</label>
          <select
            className="form-control"
            id="cable_package"
            name="cable_package"
            required
            value={formData.cable_package}
            onChange={handleChange}
          >
            <option value="cable">Yes</option>
            <option value="no-cable">No</option>
          </select>
        </div>
        <button className="signup-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
