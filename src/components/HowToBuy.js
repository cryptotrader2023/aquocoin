import React from 'react';

const HowToBuy = () => {
  return (
    <div className="how-to-buy-container">
      <h2 className="title">How to Buy</h2>
      <div className="how-to-buy-section">
        <div className="how-to-buy-box">
          <div className="box-content">
            <img src="wallet-image.png" alt="Create Wallet" className="image" />
            <div className="text">
              <h3 className="title">Create Wallet</h3>
              <p className="descriptionbox">Download metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Google Chrome extension by going to metamask.io.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-buy-section">
        <div className="how-to-buy-box">
          <div className="box-content">
            <img src="eth-image.png" alt="Get ETH" className="image" />
            <div className="text">
              <h3 className="title">Get ETH</h3>
              <p className="descriptionbox">Have ETH in your wallet to switch to A$$ET$WAP. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-buy-section">
        <div className="how-to-buy-box">
          <div className="box-content">
            <img src="pancakeswap-image.png" alt="PancakeSwap" className="image" />
            <div className="text">
              <h3>PancakeSwap</h3>
              <p>Text for PancakeSwap</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-buy-section">
        <div className="how-to-buy-box">
          <div className="box-content">
            <img src="trade-image.png" alt="Trade ETH" className="image" />
            <div className="text">
              <h3>Trade ETH</h3>
              <p>Text for Trade ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;

