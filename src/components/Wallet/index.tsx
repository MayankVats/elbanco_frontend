import { ethers } from "ethers";
import React, { useContext } from "react";
import { WalletBtn } from "./styles";
import { WalletContext } from "./WalletContext";

function Wallet() {
  const { setProvider, setAccount } = useContext(WalletContext);

  async function handleClick() {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      setProvider(provider);

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    }
  }

  return <WalletBtn onClick={handleClick}>Connect Wallet</WalletBtn>;
}

export default Wallet;
