import logo from "../assets/logo.svg";
import { github, linkedin, portfolio } from "../utils/constants";
import { SocialLink } from "../units";

const Footer = () => {
  return (
    <div className={"w-full bg-[#2952E3] flex flex-col"}>
      <div
        className={
          "flex flex-col sm:flex-row sm:justify-evenly justify-center items-center mt-6"
        }
      >
        <div className={"flex space-x-4 justify-center items-center"}>
          <img src={logo} alt={"logo"} className={"w-10 h-10 cursor-pointer"} />
          <h2 className={"text-white text-2xl tracking-wider font-semibold"}>
            KRYPTONITE
          </h2>
        </div>
        <div
          className={
            "flex space-x-6 justify-center items-center text-[#9DB0FF] mt-4 sm:m-0"
          }
        >
          <SocialLink text={"Github"} link={github} />
          <SocialLink text={"Linkedin"} link={linkedin} />
          <SocialLink text={"Portfolio"} link={portfolio} />
        </div>
      </div>
      <div
        className={
          "mt-6 mb-4 space-y-2 flex flex-col justify-center items-center"
        }
      >
        <div className={"mx-4 bg-gray-400/70 h-[0.5px] w-full sm:w-2/3"} />
        <h1 className={"text-xs text-gray-200"}>
          Made by Kush Gabani @ 01/2022
        </h1>
      </div>
    </div>
  );
};
export default Footer;
