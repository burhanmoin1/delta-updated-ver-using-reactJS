import React, { useState } from 'react';
import './SignUpForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.post('api/create-customer/', dataToSend);

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
            <option value="basic">Basic  -  12mbps</option>
            <option value="standard">Standard - 22mbps</option>
            <option value="premium">Premium - 34mbps</option>
            <option value="flash">Flash - 52mbps</option>
            <option value="rocket">Rocket - 102mbps</option>
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
            <option value="cable">Yes - +500rs</option>
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
