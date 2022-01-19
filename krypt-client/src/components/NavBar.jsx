import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logo.svg";
import { useState } from "react";

const NavBarItem = ({ title, classProps }) => {
  return (
    <li
      className={`mx-2 md:mx-4 p-2 md:py-2 md:px-3 rounded-sm cursor-pointer ${classProps} hover:bg-blue-50/20`}
    >
      {title}
    </li>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavToggle = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <nav className="w-full items-center flex-col space-y-8 pb-4 pt-8 md:p-8 justify-center md:space-y-0 md:flex md:flex-row md:justify-between shadow-xl">
      <div className={"flex flex-none justify-between mx-8 items-center"}>
        <img src={logo} alt={"logo"} className={"w-12 h-12 cursor-pointer"} />
        <button className={"md:hidden"} onClick={handleNavToggle}>
          {toggleMenu ? (
            <AiOutlineClose size={28} color={"white"} />
          ) : (
            <HiMenuAlt4 size={28} color={"white"} />
          )}
        </button>
      </div>
      <ul
        className={
          "text-white hidden md:flex space-y-2 md:space-y-0 md:flex-row list-none justify-between items-center shadow-2xl"
        }
      >
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
          return <NavBarItem key={item + index} title={item} />;
        })}
        <li
          className={
            "bg-[#2952e3] w-max py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          }
        >
          Login
        </li>
      </ul>
      {toggleMenu && (
        <ul
          className={
            "text-white md:hidden flex flex-col space-y-2 md:space-y-0 md:flex-row list-none justify-between items-center sm:pb-0 pb-3"
          }
        >
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
            return <NavBarItem key={item + index} title={item} />;
          })}
          <li
            className={
              "bg-[#2952e3] w-max py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
            }
          >
            Login
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
