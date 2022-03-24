import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Bank from "../../blockchain/abis/Bank";
import { BankAddress } from "../../blockchain/contractAddresses";
import { WalletContext } from "../Wallet/WalletContext";
import { MetricsWrapper, Wrapper } from "./styles";

function Home() {
  const { provider, account, signer } = useContext(WalletContext);
  const [metrics, setMetrics] = useState({
    deposited: "",
    interestEarned: "",
    loan: "",
  });

  useEffect(() => {
    console.log("[Home.tsx]", provider, account);
  }, [provider, account]);

  async function updateMetrics() {
    if (account) {
      const bankContract = new ethers.Contract(BankAddress, Bank.abi, signer);
      const deposited = await bankContract.etherBalanceOf(account);
      const interestEarned = await bankContract.getAccruedInterest(account);
      const loan = await bankContract.collateralEther(account);

      setMetrics({
        deposited: ethers.utils.formatEther(deposited),
        interestEarned: ethers.utils.formatEther(interestEarned),
        loan: ethers.utils.formatEther(loan),
      });
    }
  }

  useEffect(() => {
    updateMetrics();
  }, [account]);

  return (
    <Wrapper>
      <h1>Welcome To El Banco!</h1>
      <MetricsWrapper>
        <div>Deposited: {metrics.deposited}</div>
        <div>Interest Earned: {metrics.interestEarned}</div>
        <div>Loan: {metrics.loan}</div>
      </MetricsWrapper>
    </Wrapper>
  );
}

export default Home;
