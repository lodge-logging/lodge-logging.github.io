import { useState } from "react";
import icon from "../images/logo/github.svg";
import logo from "../images/logo/Lodge_graphic_mono_color.svg";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const navItemStyle = "pl-4 hover:bg-gray-100 hover:border-gray-300 active:bg-green-200 active:border-green-300 border-l-4 border-white py-2.5";

  return (
    <header>
      <div id="header" className="z-50 items-center bg-white fixed border-b border-gray-200 h-20 w-full flex justify-between">
        <a href="/">
          <img src={logo} alt="the Lodge logo" className="h-20 ml-8" />
        </a>
        <nav className="hidden lg:flex bg-white h-full justify-between items-center text-center text-lg text-gray-500 font-medium">
          <a href="/#landing" className="mx-4">Start Here</a>
          <a href="/#case-study" className="mx-4">Case Study</a>
          <a href="/#presentation" className="mx-4">Presentation</a>
          <a href="/#our-team" className="mx-4">Our Team</a>
          <a href="/docs" className="mx-4">Docs</a>
          <a href="https://github.com/lodge-logging/Lodge" className="mx-4 w-20"><img src={icon} className="w-full h-10" alt="The github logo" /></a>
        </nav>
        <div className="lg:hidden block">
          <button type="button" className={`${showMenu ? "bg-red-500" : "bg-green-300"} w-8 p-8 m-4`} onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
      <div id="mobile-menu" className={`lg:hidden ${showMenu ? "translate-y-20" : "-translate-y-full"} z-0 bg-white fixed flex flex-col text-xl text-gray-800 w-full gap-1 transform transition duration-500 ease-in-out`}>
        <a href="/#landing" className={`${navItemStyle} mt-1`}>Start Here</a>
        <a href="/#case-study" className={navItemStyle}>Case Study</a>
        <a href="/#presentation" className={navItemStyle}>Presentation</a>
        <a href="/#our-team" className={navItemStyle}>Our Team</a>
        <a href="/docs" className={navItemStyle}>Docs</a>
        <a href="https://github.com/lodge-logging/Lodge" className={`${navItemStyle} mb-1`}><i className=""></i> GitHub</a>
      </div>
    </header>
  );
}
export default Nav;
