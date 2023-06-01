import React from 'react';

const AboutUs = () => {
  return (
    <div className="container">
	  <div className="text-center">
      <h2 className="maintitle">About Us</h2>
	  </div>
      <div className="row">
        <div className="col-md-6">
          <img src="aboutus.png" alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="description">
            Aquo wants to make assets liquid. The day of illiquid assets is done. 
          </p>
          <p className="description">
          Aquo is here to make all assets liquid, no more counting pennies while owning huge assets. $AQUO is coin for all people, making them investors, giving them a stakeholder status. $AQUO is fueled by investing power. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

