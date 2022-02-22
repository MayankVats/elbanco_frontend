import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WalletContextProvider from "./components/Wallet/WalletContext";

function App() {
  return (
    <WalletContextProvider>
      <Navbar />
      <Home />
    </WalletContextProvider>
  );
}

export default App;
