// MainComponent.js

import React from 'react';
import InternetPackageCard from './InternetPackageCard';
import './InternetPackage.css'

const MainComponent = () => {
  // Sample data for internet packages
  const packages = [
    { name: 'Basic', speed: '15 Mbps', price: 1200 },
    { name: 'Standard', speed: '25 Mbps', price: 2200 },
    { name: 'Premium', speed: '50 Mbps', price: 5000 },
  ];

  return (
    <div className="main-container">
      {packages.map((packageData, index) => (
        <InternetPackageCard key={index} packageData={packageData} />
      ))}
    </div>
  );
};

export default MainComponent;
