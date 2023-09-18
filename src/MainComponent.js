import React, { useRef } from 'react';
import InternetPackageCard from './InternetPackageCard';
import './InternetPackage.css';

const MainComponent = () => {
  const containerRef = useRef(null);

  // Sample data for internet packages
  const packages = [
    { name: 'Basic', speed: '15 Mbps', price: '1,200' },
    { name: 'Standard', speed: '25 Mbps', price: '2,200' },
    { name: 'Premium', speed: '50 Mbps', price: '5,000' },
    { name: 'Void', speed: '100 Mbps', price: '10,000' },
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="main-container">
      <button onClick={scrollLeft} className="scroll-button left">
        &lt; {/* Left arrow */}
      </button>
      <div className="packages-container" ref={containerRef}>
        {packages.map((packageData, index) => (
          <InternetPackageCard key={index} packageData={packageData} />
        ))}
      </div>
      <button onClick={scrollRight} className="scroll-button right">
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default MainComponent;

