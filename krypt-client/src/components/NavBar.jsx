import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="w-full items-center p-4 space-x-4 justify-center flex shadow-xl">
      <img src={logo} alt={"logo"} className={"w-10 h-10 cursor-pointer"} />
      <h2 className={"text-white text-2xl tracking-wider font-semibold"}>
        KRYPTONITE
      </h2>
    </nav>
  );
};

export default NavBar;
