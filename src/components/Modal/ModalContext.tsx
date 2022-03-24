import { ethers } from "ethers";
import React, { useState } from "react";

interface ModalContextInterface {
  showModal: any;
  setShowModal: React.Dispatch<React.SetStateAction<any>>;
  action: any;
  setAction: React.Dispatch<React.SetStateAction<any>>;
}

export const ModalContext = React.createContext({} as ModalContextInterface);

const ModalContextProvider: React.FC = ({ children }: any) => {
  const [showModal, setShowModal] = useState(true);
  const [action, setAction] = useState();

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        action,
        setAction,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
