import "./App.css";
import Home from "./components/Home";
import ModalContextProvider from "./components/Modal/ModalContext";
import Navbar from "./components/Navbar";
import WalletContextProvider from "./components/Wallet/WalletContext";

function App() {
  return (
    <WalletContextProvider>
      <ModalContextProvider>
        <Navbar />
        <Home />
      </ModalContextProvider>
    </WalletContextProvider>
  );
}

export default App;
