import { BsPlayCircle } from "react-icons/bs";
import { DigitalCard, GridProp, TransferForm } from "../units/";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Welcome = () => {
  const { currentAccount, connectWallet, logoutWallet } =
    useContext(TransactionContext);

  return (
    <div className={"md:flex my-12 w-full justify-center items-center"}>
      <div
        className={
          "flex md:flex-row flex-col items-start justify-between lg:ml-10 lg:m-0 px-4 m-4"
        }
      >
        <div
          className={
            "flex w-fit justify-start items-center md:items-start flex-col md:mr-10"
          }
        >
          <h1
            className={
              "text-3xl font-bold sm:text-5xl text-white text-gradient py-1 text-center md:text-left"
            }
          >
            Send Crypto <br />
            across the world
          </h1>
          <p
            className={
              "text-center md:text-left mt-3 mb-6 text-white font-light md:w-9/12 w-11/12 text-base"
            }
          >
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Kryptonite.
          </p>

          <button
            type="button"
            onClick={currentAccount ? logoutWallet : connectWallet}
            className={
              "flex justify-center items-center bg-[#2952e3] px-6 py-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-bold"
            }
          >
            <div className={"flex justify-center items-center"}>
              <BsPlayCircle size={24} />
              <p className={"ml-2 text-sm"}>
                {currentAccount ? "Log Out" : "Connect Wallet"}
              </p>
            </div>
          </button>
          <GridProp />
        </div>
      </div>

      <div
        className={
          "flex flex-col items-center justify-start w-full md:w-fit md:m-0 md:mr-4 lg:mx-8"
        }
      >
        <DigitalCard />
        <TransferForm />
      </div>
    </div>
  );
};

export default Welcome;
