import { ethers } from "ethers";
import React, { useState } from "react";

interface WalletContextInterface {
  provider: any;
  setProvider: React.Dispatch<React.SetStateAction<any>>;
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  signer: any;
  setSigner: React.Dispatch<React.SetStateAction<any>>;
}

export const WalletContext = React.createContext({} as WalletContextInterface);

const WalletContextProvider: React.FC = ({ children }: any) => {
  const [provider, setProvider] = useState<any | undefined>();
  const [account, setAccount] = useState<string>("");
  const [signer, setSigner] = useState<any>();

  return (
    <WalletContext.Provider
      value={{
        provider,
        setProvider,
        account,
        setAccount,
        signer,
        setSigner,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
