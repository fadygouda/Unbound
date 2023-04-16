import React from "react";

const ConnectButton = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts.length);
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <>
      {!isConnected && (
        <div className="connect" onClick={connectAccount}>
          <button className="inside-button">Connect</button>
        </div>
      )}
      {isConnected && (
        <div className="connect">
          <div className="inside-button">Connected!</div>
        </div>
      )}
    </>
  );
};

export default ConnectButton;
