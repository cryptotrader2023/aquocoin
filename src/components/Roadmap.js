import React from 'react';

const Roadmap = () => {
  return (
    <div className="how-to-buy-container">
      {/* First Row */}
      <div className="row">
        <div className="col-md-4">
	            <div className="image-container">

          <img src="leftimage.png" alt="Left Image" className="img-fluid"  />
        </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="centered-box">
            <h3 className="maintitle">Roadmap</h3>
	      <div className="space" />

            <div className="box-underneath">
              <div className="how-to-buy-box">
              <ul className="newlist">
                <li>Phase 1 Launch</li>
                <li>Phase 2 Build Framework</li>
                <li>Phase 3 Tokenization</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
	            <div className="image-container">
          <img src="rightimage.png" alt="Right Image" className="img-fluid"  />
        </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col text-center">
          <p className="descriptionbox">The Roadmap will deliver to investors an asset tokenization framework.</p>
        </div>
      </div>

      {/* Existing Three Boxes */}
      <div className="row">
        {/* Existing Box 1 */}
        <div className="col-md-4">
          <div className="how-to-buy-box">
            <h3 className="title">Phase 1</h3>
            <ul className="list">
              <li>Launch</li>
              <li>CoinGecko listing</li>
              <li>CoinMarketCap listing</li>
              <li>1000 Holders</li>
              <li>Get AssetSwap Trending on Twitter</li>
            </ul>
          </div>
        </div>

        {/* Existing Box 2 */}
        <div className="col-md-4">
          <div className="how-to-buy-box">
            <h3 className="title">Phase 2</h3>
            <ul className="list">
              <li>Community Partnerships</li>
              <li>Discord Group</li>
              <li>CEX Listings</li>
              <li>10,000 Holders</li>
              <li>Aquo Frameworks Built for Tokenization</li>
            </ul>
          </div>
        </div>

        {/* Existing Box 3 */}
        <div className="col-md-4">
          <div className="how-to-buy-box">
            <h3 className="title">Phase 3</h3>
            <ul className="list">
              <li>Assets Tokenized Globally</li>
              <li>Hotels, Islands, Companies Tokenized</li>
              <li>100,000 Holders</li>
              <li>Global Adoption</li>
              <li>Everyone Invests</li>
              <li>Aquoland Tokenized</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

