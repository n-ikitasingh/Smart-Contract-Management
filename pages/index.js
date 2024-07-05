import { useState, useEffect } from "react";
import { ethers } from "ethers";
import functionFrontendAbi from "../artifacts/contracts/FunctionFrontend.sol/FunctionFrontend.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [doubleBalance, setDoubleBalance] = useState(undefined);
  const [halfBalance, setHalfBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // Replace with your deployed contract address
  const contractABI = functionFrontendAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account.length > 0) {
      console.log("Account connected: ", account);
      setAccount(account[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);
    getContract();
  };

  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contractInstance);
  };

  const fetchBalances = async () => {
    if (contract) {
      const balance = (await contract.getBalance()).toNumber();
      const doubleBal = (await contract.doubleBalance()).toNumber();
      const halfBal = (await contract.halfBalance()).toNumber();
      setBalance(balance);
      setDoubleBalance(doubleBal);
      setHalfBalance(halfBal);
    }
  };

  const deposit = async () => {
    if (contract) {
      const tx = await contract.deposit(1);
      await tx.wait();
      fetchBalances();
    }
  };

  const withdraw = async () => {
    if (contract) {
      const tx = await contract.withdraw(1);
      await tx.wait();
      fetchBalances();
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1>Function Frontend</h1></header>
      {ethWallet && account ? (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
          <p>Double Balance: {doubleBalance} ETH</p>
          <p>Half Balance: {halfBalance} ETH</p>
          <button onClick={deposit}>Deposit 1 ETH</button>
          <button onClick={withdraw}>Withdraw 1 ETH</button>
        </div>
      ) : (
        <button onClick={connectAccount}>Connect MetaMask Wallet</button>
      )}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
