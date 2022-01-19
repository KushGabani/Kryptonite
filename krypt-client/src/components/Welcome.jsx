import { BsPlayCircle } from "react-icons/all";

const Welcome = () => {
  const connectWallet = () => {
    console.log("Clicked!");
  };

  return (
    <div className={"flex w-full justify-center items-center"}>
      <div
        className={
          "flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 m-4"
        }
      >
        <div
          className={
            "flex flex-1 justify-start items-center md:items-start flex-col md:mr-10"
          }
        >
          <h1
            className={
              "text-3xl sm:text-5xl text-white text-gradient py-1 text-center md:text-left"
            }
          >
            Send Crypto <br />
            across the world
          </h1>
          <p
            className={
              "text-center md:text-left mt-4 mb-12 text-white font-light md:w-9/12 w-11/12 text-base"
            }
          >
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Kryptonite
          </p>
          <button
            type="button"
            onClick={() => connectWallet}
            className={
              "w-52 flex justify-center items-center mb-5 bg-[#2952e3] py-4 px-6 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-semibold"
            }
          >
            <div className={"flex justify-center items-center"}>
              <BsPlayCircle size={24} />
              <p className={"ml-2"}>Connect Wallet</p>
            </div>
          </button>

          <div className={"grid grid-cols-3 mt-12 w-full"}>
            {[
              "Reliability",
              "Security",
              "Ethereum",
              "Web 3.0",
              "Low fees",
              "Blockchain",
            ].map((item, index) => {
              const rounded_class = [
                "rounded-tl-xl",
                "",
                "rounded-tr-xl",
                "rounded-bl-xl",
                "",
                "rounded-br-xl",
              ];

              return (
                <div
                  key={item + index}
                  className={`${rounded_class[index]} sm:py-6 py-4 text-xs sm:text-lg font-normal text-white/70 flex justify-center items-center border-solid border-[0.5px] border-gray-400/50`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
