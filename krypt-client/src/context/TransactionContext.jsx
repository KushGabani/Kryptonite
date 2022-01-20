import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import dummyData from "../utils/dummyData";

// TEST RECEIVER ID: 0x1c085f805207f0FC534515A509A0D2cBb390038E

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
  const [transactions, setTransactions] = useState([]);
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
        setCurrentAccount("");
      }
      console.log(accounts);
    } catch (error) {
      console.log("No Ethereum Object. Add Metamask if not already installed");
    }
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!");
      setIsLoading(true);

      if (currentAccount) {
        const { transactionContract } = getEthereumContract();
        const availableTransactions =
          await transactionContract.getAllTransactions();

        setTransactions(
          availableTransactions.map((transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            amount: parseInt(transaction.amount._hex) / 10 ** 18, // convert HEX Gwei to int ETH
            message: transaction.message,
            keyword: transaction.keyword,
          }))
        );
      } else {
        setTransactions(dummyData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
    }
  };

  const sendTransaction = async () => {
    try {
      // get the data from the transaction form.

      if (!ethereum) return alert("Please install metamask");
      setIsLoading(true);
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

      console.log(`loading transaction...${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Transaction done! hash:${transactionHash.hash}`);
    } catch (error) {
      alert("A transaction error occurred!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutWallet = () => {
    console.log("logout clicked");
    setCurrentAccount("");
  };

  useEffect(() => {
    checkIfMetamaskExists().then();
    getAllTransactions().then();
  }, []);

  useEffect(() => {
    getAllTransactions().then();
  }, [currentAccount]);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        transactionFormData,
        isLoading,
        transactions,
        sendTransaction,
        handleFieldChange,
        connectWallet,
        logoutWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
