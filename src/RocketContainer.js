// RocketContainer.js

import React from 'react';

// Import your images as keys
import MoonImg from './moon.jpg';
import rocketImg from './rocket.png';
import './RocketContainer.css'

const RocketContainer = () => {
  return (
    <div className="moon" style={{ backgroundImage: `url(${MoonImg})` }}>
      <img
        src={rocketImg} // Use the imported rocket image
        alt="Rocket"
        className="rocket-image"
      />
    </div>
  );
};

export default RocketContainer;

