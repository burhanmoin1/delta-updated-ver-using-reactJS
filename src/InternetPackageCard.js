import React from 'react';

const InternetPackageCard = ({ packageData }) => {
  return (
    <div className="package-card">
      <h2>{packageData.name}</h2>
      <br></br>
      <p>Speed: {packageData.speed}</p><br></br>
      <p className='price'>Rs. {packageData.price}/month</p><br></br>
      {/* Signup button linking to the signup URL */}
      <a href={'deltacommunication.xyz'} target="_blank" rel="noopener noreferrer" className="signup-button">
        Sign Up
      </a>
    </div>
  );
};

export default InternetPackageCard;