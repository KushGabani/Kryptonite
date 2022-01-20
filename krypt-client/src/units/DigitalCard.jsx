import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const DigitalCard = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div
      className={
        "p-3 justify-between items-start flex rounded-xl w-full h-36 w-64 my-5 eth-card shadow-lg"
      }
    >
      <div className={"flex flex-col justify-between items-start h-full pr-4"}>
        <div
          className={
            "p-2 rounded-full h-fit w-fit rounded-full border-2 border-solid border-white-700"
          }
        >
          <SiEthereum size={22} color={"white"} />
        </div>
        <div>
          <p className={"text-white text-xs uppercase tracking-wider mb-1"}>
            {currentAccount.substring(0, 10) || "Address"}
          </p>
          <p className={"text-white/90 font-semibold tracking-wide text-xl"}>
            Ethereum
          </p>
        </div>
      </div>
      <BsInfoCircle size={18} color={"white"} />
    </div>
  );
};

export default DigitalCard;
