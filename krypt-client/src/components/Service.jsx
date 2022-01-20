import { BiSearchAlt, BsShieldFillCheck, RiHeart2Fill } from "react-icons/all";
import { ServiceItem } from "../units";

const serviceData = [
  {
    id: 1,
    icon: <BsShieldFillCheck size={22} />,
    title: "Security Guaranteed",
    desc: "Security is guaranteed. We always maintain privacy and the quality of our products.",
    color: "bg-[#2952E3]",
  },
  {
    id: 2,
    icon: <BiSearchAlt size={22} />,
    title: "Best Exchange Rates",
    desc: "Unlike other exchange mediums that charge a heft empty, Kryptonite is pocket-friendly.",
    color: "bg-[#8945F8]",
  },
  {
    id: 3,
    icon: <RiHeart2Fill size={22} />,
    title: "Fastest Transactions",
    desc: "Send ethereum through the blockchain with lightning speed with Kryptonite.",
    color: "bg-[#F84550]",
  },
];

const Services = () => {
  return (
    <div
      className={"w-full p-6 md:flex justify-center items-center bg-[#0f0e13]"}
    >
      <div
        className={
          "text-3xl p-8 font-bold flex-1 md:w-[60%] md:text-4xl text-white text-gradient lg:ml-10 lg:m-0 px-4 m-4 text-center md:text-left"
        }
      >
        Services that we
        <br />
        continue to improve
      </div>
      <div className={"flex-1 w-full m-0 md:m-4 space-y-4"}>
        {serviceData.map((item) => (
          <ServiceItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
