import React from 'react';

const HowToBuy = () => {
  return (
    <div className="how-to-buy-container">
	  <div className="text-center">
      <h2 className="maintitle">How to Buy</h2>
	  </div>
<div className="how-to-buy-section">
  <div className="how-to-buy-box">
    <div className="row">
      <div className="col-md-2">
        <img src="walletimage.png" alt="Create Wallet" className="walletimage" />
      </div>
      <div className="col-md-10">
        <div className="text">
          <h3 className="title">Create Wallet</h3>
          <p className="descriptionbox">Download metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Google Chrome extension by going to metamask.io.</p>
        </div>
      </div>
    </div>
  </div>
</div>

	  <div className="how-to-buy-section">
  <div className="how-to-buy-box">
    <div className="row">
      <div className="col-md-2">
        <img src="ether.png" alt="Create Wallet" className="walletimage" />
      </div>
      <div className="col-md-10">
        <div className="text">
          <h3 className="title">Get Ether</h3>
              <p className="descriptionbox">Have ETH in your wallet to switch to $AQUO. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
            </div>
      </div>
    </div>
  </div>
</div>

	  <div className="how-to-buy-section">
  <div className="how-to-buy-box">
    <div className="row">
      <div className="col-md-2">
        <img src="uniswap.png" alt="Uniswap" className="walletimage" />
      </div>
      <div className="col-md-10">
        <div className="text">
          <h3 className="title">Uniswap</h3>
              <p className="descriptionbox">Connect to Uniswap. Go to app.uniswap.org in google chrome or using Metamask and connect your wallet. Connect your wallet and paste the $Aquo token address into Uniswap, select Aquo and confirm. When Metamask prompts you for a wallet signature, sign.
	  </p>
            </div>
      </div>
    </div>
  </div>
</div>


	  <div className="how-to-buy-section">
  <div className="how-to-buy-box">
    <div className="row">
      <div className="col-md-2">
        <img src="trade.jpg" alt="Trade" className="walletimage" />
      </div>
      <div className="col-md-10">
        <div className="text">
          <h3 className="title">How to Trade</h3>
              <p className="descriptionbox">Switch Eth for $Aquo.</p>
            </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  );
};

export default HowToBuy;

