import Wallet from "../Wallet";
import { Logo, Nav, NavItem, NavItemWrapper } from "./styles";

function Navbar() {
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
