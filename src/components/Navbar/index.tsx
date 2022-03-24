import { ethers } from "ethers";
import { useContext } from "react";
import Bank from "../../blockchain/abis/Bank";
import { BankAddress } from "../../blockchain/contractAddresses";
import { ModalContext } from "../Modal/ModalContext";
import Wallet from "../Wallet";
import { WalletContext } from "../Wallet/WalletContext";
import { Logo, Nav, NavItem, NavItemWrapper } from "./styles";

function Navbar() {
  const { signer, account } = useContext(WalletContext);
  const { showModal, setShowModal, setAction } = useContext(ModalContext);

  // TODO: Withdraw
  async function handleWithdraw() {
    if (account) {
      console.log("Withdraw");
      const bankContract = new ethers.Contract(BankAddress, Bank.abi, signer);
    } else {
      alert("Connect Metamask!");
    }
  }

  // TODO: Pay
  async function handleRepay() {
    if (account) {
      const bankContract = new ethers.Contract(BankAddress, Bank.abi, signer);
      console.log("Repay");
    } else {
      alert("Connect Metamask!");
    }
  }

  return (
    <Nav>
      <NavItemWrapper>
        <Logo>El Banco</Logo>
        <NavItem
          onClick={() => {
            setShowModal(false);
            setAction("Deposit");
          }}
        >
          Deposit
        </NavItem>
        <NavItem onClick={handleWithdraw}>Withdraw</NavItem>
        <NavItem
          onClick={() => {
            setShowModal(false);
            setAction("Loan");
          }}
        >
          Loan
        </NavItem>
        <NavItem onClick={handleRepay}>Repay</NavItem>
      </NavItemWrapper>
      <Wallet></Wallet>
    </Nav>
  );
}

export default Navbar;
