import useFetch from "../hooks/useFetch";
import { FaEthereum } from "react-icons/all";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  twitter,
}) => {
  const gifUrl = useFetch(keyword);

  return (
    <div
      className={
        "max-w-[18rem] min-w-[12rem] bg-[#181918] text-white rounded-md flex flex-col justify-center items-center"
      }
    >
      <div className={"relative"}>
        <img
          src={gifUrl}
          alt={keyword}
          className={"w-full h-64 2xl:h-96 object-cover rounded-md"}
        />
        <div
          className={
            "p-2 flex absolute bottom-2 left-2 justify-between items-center white-glassmorphism"
          }
        >
          <div className={"flex items-center text-white text-lg"}>
            <div className={"w-fit p-2 mr-2 rounded-full bg-white"}>
              <FaEthereum color={"black"} />
            </div>
            <div className={"flex flex-col items-start"}>
              <span>{amount} ETH</span>
              <span className={"text-xs"}>{timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={"w-full p-4"}>
        <div className={"space-y-3"}>
          <div className="flex justify-between items-center  text-white/80 text-sm">
            From:
            <a
              href={`https://ropsten.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "px-2 w-24 text-center py-1 text-black bg-white rounded-full text-xs uppercase"
                }
              >
                {addressFrom.substring(0, 10)}
              </div>
            </a>
          </div>
          <div className="flex justify-between items-center  text-white/80 text-sm">
            To:
            <a
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "px-2 w-24 text-center py-1 text-white bg-[#2952E3] rounded-full text-xs uppercase"
                }
              >
                {addressTo.substring(0, 10)}
              </div>
            </a>
          </div>
          {keyword && (
            <div className="flex justify-between items-center text-white/80 text-sm">
              Keywords:
              <div className={"text-white text-sm"}>
                {keyword.split(" ").join(", ")}
              </div>
            </div>
          )}

          {twitter && (
            <div className="flex justify-between items-center text-white/80 text-sm">
              Twitter:
              <p className={"text-white text-sm lowercase"}>@{twitter}</p>
            </div>
          )}
        </div>
        {message && (
          <p
            className={
              "text-md font-normal w-full text-center flex-col items-center mt-4 normal-case text-[0.95rem] font-bold"
            }
          >
            {message || " "}
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
