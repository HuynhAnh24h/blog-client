import { useState, useEffect, useRef } from "react";
import { navItems } from "../constants";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMenuOpen(true);
  };



  return (
    <section className="w-full flex justify-center">
      <header className="container px-4 md:container md:mx-auto flex justify-between items-center py-4">
        <div>
          <a href="/" className="text-xl font-bold text-blue-900 ">
            <span className="uppercase">Software</span> Blog
          </a>
        </div>
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex justify-between items-center gap-5">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <a href="" className="text-lg font-[400] transition-all hover:text-blue-900 text-[#183B56] cursor-pointer">
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center gap-3">
            <button className="md:border-blue-900 md:border-2 px-5 py-2 rounded-full text-lg text-blue-900 font-bold md:text-blue-900 hover:text-white hover:bg-blue-900 transition-all">
              Sign in
            </button>
            <button onClick={handleMobileMenu}>
              <div className="block md:hidden border-blue-900 text-blue-900 border-2 rounded-sm p-2 hover:border-blue-900 hover:bg-blue-900 hover:text-white">
                <FaBars size={20} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div>
          <MobileMenu navMenus={navItems} menuHandle ={setMenuOpen}/>
        </div>
      )}
    </section>
  );
};

export default Header;
