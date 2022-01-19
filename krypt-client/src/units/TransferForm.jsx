import { InputField } from "./index";
import { useState } from "react";
import Loader from "./Loader";

const TransferForm = () => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading((prevState) => !prevState);
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
        type={"text"}
        handleChange={() => {}}
      />
      <InputField
        placeholder={"Amount (ETH)"}
        name={"amountEth"}
        type={"number"}
        handleChange={() => {}}
      />

      <InputField
        placeholder={"Keyword (GIF)"}
        name={"keyword"}
        type={"text"}
        handleChange={() => {}}
      />

      <InputField
        placeholder={"Twitter @"}
        name={"twitter"}
        type={"text"}
        handleChange={() => {}}
      />

      <InputField
        placeholder={"Enter Message"}
        name={"message"}
        type={"text"}
        handleChange={() => {}}
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
