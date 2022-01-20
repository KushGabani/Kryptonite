import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader, TransactionCard } from "../units";

const Transactions = () => {
  const { currentAccount, transactions, isLoading } =
    useContext(TransactionContext);

  return (
    <div
      className={"flex py-12 w-full justify-center items-center bg-[#0f0e13]"}
    >
      <div className={"flex flex-col md:p-12 py-12 px-4 "}>
        <h3
          className={
            "text-white text-3xl md:text-4xl text-center text-gradient md:text-left my-2"
          }
        >
          {currentAccount
            ? `History of transactions on the blockchain by ${currentAccount.substring(
                0,
                10
              )}...`
            : "Connect your wallet to see the latest transactions by you"}
        </h3>

        <div
          className={
            "w-full grid md:grid-cols-3 gap-4 sm:gap-8 justify-center items-center mt-10"
          }
        >
          {isLoading ? (
            <Loader />
          ) : (
            transactions
              .reverse()
              .map((transaction, index) => (
                <TransactionCard key={index} {...transaction} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
