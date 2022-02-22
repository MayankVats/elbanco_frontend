import React, { useContext } from "react";
import { WalletBtn } from "./styles";
import Web3 from "web3";
import { WalletContext } from "./WalletContext";

function Wallet() {
  const { setWeb3, setAccount } = useContext(WalletContext);

  async function handleClick() {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      const web3 = new Web3(ethereum);
      setWeb3(web3);

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    }
  }

  return <WalletBtn onClick={handleClick}>Connect Wallet</WalletBtn>;
}

export default Wallet;
