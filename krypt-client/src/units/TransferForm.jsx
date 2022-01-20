import { InputField } from "./index";
import { useContext, useState } from "react";
import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";

const TransferForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { transactionFormData, handleFieldChange, sendTransaction } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, twitter, message } =
      transactionFormData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !twitter || !message) return;
    sendTransaction();
  };

  return (
    <div
      className={
        "px-4 py-3 mb-6 md:m-0 sm:w-96 w-10/12 flex flex-col justify-start items-center blue-glassmorphism"
      }
    >
      <InputField
        placeholder={"Address To"}
        name={"addressTo"}
        classProps={`uppercase`}
        type={"text"}
        handleChange={(e) => handleFieldChange(e, "addressTo")}
      />
      <InputField
        placeholder={"Amount (ETH)"}
        name={"amount"}
        type={"number"}
        handleChange={(e) => handleFieldChange(e, "amount")}
      />

      <InputField
        placeholder={"Keyword (GIF)"}
        name={"keyword"}
        type={"text"}
        handleChange={(e) => handleFieldChange(e, "keyword")}
      />

      <InputField
        placeholder={"Twitter @"}
        name={"twitter"}
        type={"text"}
        handleChange={(e) => handleFieldChange(e, "twitter")}
      />

      <InputField
        placeholder={"Enter message"}
        name={"message"}
        type={"text"}
        handleChange={(e) => handleFieldChange(e, "message")}
      />

      <div className={"h-[1px] w-full bg-gray-400 my-2"} />
      {isLoading ? (
        <Loader size={32} classProps={"my-2"} />
      ) : (
        <button
          type={"button"}
          onClick={handleSubmit}
          className={
            "w-full my-2 p-2 border-[1px] border-solid border-[#3d4f7c] rounded-full cursor-pointer text-white hover:bg-gray-200 transition hover:text-[#3d4f7c]"
          }
        >
          Send Now
        </button>
      )}
    </div>
  );
};

export default TransferForm;
