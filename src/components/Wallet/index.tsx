import React, { useEffect, useState } from "react";
import { WalletBtn } from "./styles";
import Web3 from "web3";

function Wallet() {
  function handleClick() {}

  return <WalletBtn onClick={handleClick}>Connect Wallet</WalletBtn>;
}

export default Wallet;
