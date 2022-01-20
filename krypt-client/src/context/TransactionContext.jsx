import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return { provider, signer, transactionContract };
};

export const TransactionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionFormData, setTransactionFormData] = useState({
    addressTo: "",
    amount: "",
    twitter: "",
    keyword: "",
    message: "",
  });

  const handleFieldChange = (e, name) => {
    setTransactionFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // Debug useEffect to validate transaction form data state.
  /*
   useEffect(() => {
    console.log(transactionFormData);
  }, [transactionFormData]);
  */

  const checkIfMetamaskExists = async () => {
    console.log("Checking if metamask is connected...");
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Metamask account found!");
      } else {
        console.log("No accounts found on load...");
      }
      console.log(accounts);
    } catch (error) {
      console.log("No Ethereum Object. Add Metamask if not already installed");
    }
  };

  const connectWallet = async () => {
    try {
      console.log("connect wallet clicked");
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("wallet connected");
      console.log(accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };

  const sendTransaction = async () => {
    try {
      // get the data from the transaction form.

      if (!ethereum) return alert("Please install metamask");
      const { addressTo, amount, keyword, twitter, message } =
        transactionFormData;

      const { transactionContract } = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // Roughly 21000 Gwei unit; where 1 Gwei = 0.000021 ETH,
            value: parsedAmount._hex, // the parseEther() utility converts ETH to Gwei units and then to HEX
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        twitter,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`loading transaction...${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Transaction done! hash:${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfMetamaskExists().then();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        transactionFormData,
        sendTransaction,
        handleFieldChange,
        connectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
