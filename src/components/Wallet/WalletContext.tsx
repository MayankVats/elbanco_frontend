import React, { useState } from "react";

interface WalletContextInterface {
  provider: any;
  setProvider: React.Dispatch<React.SetStateAction<any>>;
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}

export const WalletContext = React.createContext({} as WalletContextInterface);

const WalletContextProvider: React.FC = ({ children }: any) => {
  const [provider, setProvider] = useState<any | undefined>();
  const [account, setAccount] = useState<string>("");

  return (
    <WalletContext.Provider
      value={{
        provider,
        setProvider,
        account,
        setAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
