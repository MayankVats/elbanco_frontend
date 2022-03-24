import { useContext } from "react";
import Wallet from "../Wallet";
import { WalletContext } from "../Wallet/WalletContext";
import { Logo, Nav, NavItem, NavItemWrapper } from "./styles";

function Navbar() {
  const { signer, account } = useContext(WalletContext);
  // TODO: show wallet balance when wallet is connected

  // TODO: Deposit
  async function handleDeposit() {
    if (account) {
    } else {
      alert("Connect Metamask!");
    }
  }
  // TODO: Withdraw
  async function handleWithdraw() {
    if (account) {
    } else {
      alert("Connect Metamask!");
    }
  }
  // TODO: Loan
  async function handleLoan() {
    if (account) {
    } else {
      alert("Connect Metamask!");
    }
  }
  // TODO: Pay
  async function handleRepay() {
    if (account) {
    } else {
      alert("Connect Metamask!");
    }
  }

  return (
    <Nav>
      <NavItemWrapper>
        <Logo>El Banco</Logo>
        <NavItem>Deposit</NavItem>
        <NavItem>Withdraw</NavItem>
        <NavItem>Loan</NavItem>
        <NavItem>Repay</NavItem>
      </NavItemWrapper>
      <Wallet></Wallet>
    </Nav>
  );
}

export default Navbar;
