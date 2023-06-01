import React from 'react';

const Tokenomics = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h3 className="maintitle">Tokenomics</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <h3 className="title">Token Supply</h3>
            <h3 className="title">420,690,000,000,000</h3>
	  </div>
          <div className="how-to-buy-box">
            <p className="descriptionbox">93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and the contract is renounced. The remaining 6.9% of the supply is held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is trackable.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <div className="image-container2">
              <img src="Tokenomics.png" alt="Tokenomics" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

