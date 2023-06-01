import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-container">
            <img src="aquonam.png" alt="$AQUO" /> {/* Replace with the image URL that contains the desired text */}
            <p className="description">
              It&apos;s time to make assets liquid again. The banks have had their day, it&apos;s time for Aquo to reign.
            </p>
            <a href="https://twitter.com/aquocoin" target="_blank" rel="noopener noreferrer">
              <img src="twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="image-container2">
            <img src="home2.png" alt="Aquo Token" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

