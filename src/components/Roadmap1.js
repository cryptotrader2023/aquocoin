import React from 'react';

const Roadmap = () => {
  return (
    <div className="how-to-buy-container">
      <h2 className="title">Roadmap</h2>
      <div className="centered-row">
        <div className="row">
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
          <div className="col-md-4">
            <div className="how-to-buy-box">
              <h3 className="title">Phase 3</h3>
              <ul className="list">
                <li>Assets Tokenized Globally</li>
                <li>Hotels, Islands, Companies Tokenized</li>
                <li>100,000 Holders</li>
                <li>Global Adoption </li>
                <li>Everyone Invests </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

