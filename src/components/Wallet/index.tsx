import { ethers } from "ethers";
import React, { useContext, useEffect } from "react";
import { WalletBtn } from "./styles";
import { WalletContext } from "./WalletContext";

function Wallet() {
  const { setProvider, setAccount, account, setSigner } =
    useContext(WalletContext);

  async function checkValidNetwork() {
    try {
      // @ts-ignore
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      // @ts-ignore
      if (switchError.code === 4902) {
        try {
          // @ts-ignore
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x61",
                chainName: "Smart Chain - Testnet",
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB", // 2-6 characters long
                  decimals: 18,
                },
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
                blockExplorerUrls: ["https://testnet.bscscan.com"],
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
      else {
        alert("Network Switch Denied");
      }
    }
  }

  async function handleWalletConnection() {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      setProvider(provider);

      let localSigner = provider.getSigner();
      setSigner(localSigner);

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      ethereum.on("accountsChanged", async function (accounts: any) {
        console.log(accounts);
        localSigner = provider.getSigner();
        setSigner(localSigner);
        setAccount(accounts[0]);
      });

      setAccount(accounts[0]);
    }
  }

  async function handleClick() {
    if (!account) {
      await handleWalletConnection();
    } else {
      console.log("already connected");
    }
  }

  useEffect(() => {
    handleWalletConnection();
    checkValidNetwork();
  }, []);

  return (
    <WalletBtn onClick={handleClick}>
      {account
        ? account.slice(0, 6) + "..." + account.slice(-6)
        : "Connect Wallet"}
    </WalletBtn>
  );
}

export default Wallet;
