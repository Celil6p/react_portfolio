import { useState } from "react";
import { content } from "../Content";
import { createElement } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-5 z-[999] rounded-lg bg-black/40 p-2"
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        <HamburgerMenu isOpen={showMenu}/>
      </div>
      <nav
        className={`mt-40 ml-4 top-50 left-0 flex-col fixed z-[999] flex items-center gap-9 bg-black/60 px-3 py-6 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
    showMenu ? "left-0" : "left-[-100%]"
  }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer hover:outline outline-1
     ${i === active && "bg-dark_primary text-bg_light_primary"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
