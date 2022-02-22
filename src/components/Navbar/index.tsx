import Wallet from "../Wallet";
import { Logo, Nav, NavItem, NavItemWrapper } from "./styles";

function Navbar() {
  // TODO: show wallet balance when wallet is connected

  // TODO: Deposit
  // TODO: Withdraw
  // TODO: Loan
  // TODO: Pay

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
