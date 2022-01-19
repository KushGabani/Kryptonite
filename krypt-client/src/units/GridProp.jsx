const GridProp = () => {
  return (
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
            className={`${rounded_class[index]} py-4 sm:px-4 sm:text-sm text-xs font-normal text-white/70 flex justify-center items-center border-solid border-[0.25px] border-gray-400/50`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default GridProp;
