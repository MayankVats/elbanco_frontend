import React, { useState } from "react";

interface WalletContextInterface {
  web3: any;
  setWeb3: React.Dispatch<React.SetStateAction<any>>;
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}

export const WalletContext = React.createContext({} as WalletContextInterface);

const WalletContextProvider: React.FC = ({ children }: any) => {
  const [web3, setWeb3] = useState<any | undefined>();
  const [account, setAccount] = useState<string>("");

  return (
    <WalletContext.Provider
      value={{
        web3,
        setWeb3,
        account,
        setAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
