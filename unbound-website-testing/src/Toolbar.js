import React, { useState } from "react";
import twitter from "./images/twitter.svg";
import opensea from "./images/opensea.svg";
import etherscan from "./images/etherscan.png";
import ConnectButton from "./Connect";

const Toolbar = () => {
  const [accounts, setAccounts] = useState([]);
  return (
    <>
      <div className="toolbar">
        <div className="links-section">
          <div className="connect">
            <div className="connect-div">
              <ConnectButton accounts={accounts} setAccounts={setAccounts}>
                Connect
              </ConnectButton>
            </div>
          </div>
          <div className="outside-link">
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/TheUnboundNFT"
              >
                <img src={twitter} alt="logo" class="link" />
              </a>
            </div>
            <div className="links">
              <img src={etherscan} alt="logo" class="link" />
            </div>
            <div className="links">
              <img src={opensea} alt="logo" class="link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
