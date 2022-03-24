import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { Modal1, SubmitBtn } from "./styles";

interface ModalProps {
  hide: boolean;
}

const Modal = ({ hide }: ModalProps) => {
  const { setShowModal, action } = useContext(ModalContext);

  let amount = 0;

  function handleChange(event: any) {
    console.log(event.target.value);
    amount = event.target.value;
  }

  function handleSubmit() {
    if (action === "Deposit") {
      let depositAmount = amount;
      console.log(depositAmount);
    } else if (action === "Loan") {
      let loanAmount = amount;
      console.log(loanAmount);
    }
  }

  return (
    <Modal1 hide={hide}>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        style={{
          float: "right",
          color: "red",
          outline: "none",
          border: "none",
          fontWeight: "bold",
          margin: ".5em 1em 0 0",
          background: "transparent",
        }}
      >
        X
      </button>
      <br />
      <br />
      <b>{action} Amount: </b>{" "}
      <input
        type={"text"}
        onChange={handleChange}
        style={{ width: "30%", outline: "none" }}
      />
      <br />
      <br />
      <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
    </Modal1>
  );
};

export default Modal;
