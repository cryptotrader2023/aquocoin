import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-container">
            <h2 className="title">$AQUO</h2>
            <p className="description">
              It&apos;s time to make assets liquid again. The banks have had their day, it&apos;s time for Aquo to reign.
            </p>
            <a href="https://twitter.com/assetswap2023" target="_blank" rel="noopener noreferrer">
              <img src="twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="image-container">
            <img src="home2.png" alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
