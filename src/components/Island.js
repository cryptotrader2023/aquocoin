import React from 'react';

const Island = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="maintitle">Island</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="island.png" alt="Island" className="main-image img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="description">
            When $Aquo is launched, the community will asset tokenize an island, Aquoland, and all token holders can visit.
          </p>
          <p className="description">
            Later, Aquoland will be a country with zero taxes and funding for everyone with the best education, computers, and freedom of speech - we will Make Democracy Great Again.
          </p>
<div className="row small-image-row">
        <div className="col-md-6 offset-md-6 text-md-end">
          <div className="small-image-container">
            <img src="beach.png" alt="Small Image" className="smallimage" />
          </div>
        </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Island;

