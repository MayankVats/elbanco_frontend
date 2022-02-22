import { useContext, useEffect } from "react";
import { WalletContext } from "../Wallet/WalletContext";
import { MetricsWrapper, Wrapper } from "./styles";

function Home() {
  const { web3, account } = useContext(WalletContext);

  useEffect(() => {
    console.log("[Home.tsx]", web3, account);
  }, [web3, account]);

  // TODO: fetch deposited, Interest earned and Loan of the user when wallet is connected.

  return (
    <Wrapper>
      <h1>Welcome To El Banco Bank !</h1>
      <MetricsWrapper>
        <div>Deposited: 0</div>
        <div>Interest Earned: 0</div>
        <div>Loan: 0</div>
      </MetricsWrapper>
    </Wrapper>
  );
}

export default Home;
