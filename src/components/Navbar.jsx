import classNames from "classnames";
import { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const nav =
    "text-[16px] px-2 hover:text-[#fbbf24] hover:cursor-pointer  my-[4px]  py-2";
  const [navMenu, setNav] = useState(false);
  const toogleNavMenu = () => {
    setNav(!navMenu);
  };
  const [scroll, setScroll] = useState(false);
  const handleNavbarColor = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavbarColor);
  return (<>
    <div
      className={classNames(
        scroll ? " border-b-slate-600 border-b shadow-2xl" : " ",
        " z-20  fixed bg-[#000000] text-[#ffffff] left-0 w-screen flex  items-center duration-500 justify-between px-5   ",
      )}
    >
      <div className=" text-[25px] w-[200px] font-bold  pr-10 py-2 ">
        <img src={logo} alt="" />
      </div>
      <div className=" hidden md:flex flex-row justify-between text-3xl w-screen px-5  pb-[0px] UPP">
        <div className={nav}>Accueil</div>
        <div className={nav}>Galerie</div>
        <div className={nav}>Contact</div>
        <div className={nav}>À propos</div>
        <div className={classNames(scroll?'bg-[#fde047] text-black rounded-md hover:bg-white hover:text-black px-5 ':'',nav) }>Commander</div>
      </div>
      <div
        className="md:hidden  flex items-center  hover:cursor-pointer"
        onClick={toogleNavMenu}
      >
        {!navMenu ? (
          <span className="material-icons ">menu</span>
        ) : (
          <span className="material-icons ">close</span>
        )}
      </div></div><div>
      <ul
        className={classNames(
          !navMenu ? "left-[-100%]" : "left-0",
          "md:hidden text-black px-5 text-center fixed z-10 ease-in-out duration-500 top-0  bg-[#f8e066] w-[100%] h-screen pt-[100px] uppercase ",
        )}
      >
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#fbbf24]">
          accueil
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#fbbf24]">
          producteurs
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#fbbf24]">
          projets
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#fbbf24]">
          chat
        </li>
        <li className="px-5 py-3 border-b border-gray-500 hover:bg-[#fbbf24]">
          notications
        </li>
      </ul>
    </div></>
  );
}

export default Navbar;
