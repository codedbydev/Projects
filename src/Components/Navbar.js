import React, { useState } from "react";
import Logo from "../assests/images/logo.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import {Link} from 'react-scroll'

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);


    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
    <div>
      <nav className="fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <img src={Logo} alt="logo" className="h-20 ml-4 " />

          <div className="flex md:order-2">
            <button
              onClick={toggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200"
            >
              <AiOutlineMenuFold className="text-orange-400 text-lg "></AiOutlineMenuFold>
            </button>
          </div>

          <div className={`
            items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen? 'block' : 'hidden'
            } 
          `}>
            <ul className={`flex flex-col p-4 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isOpen ? 'bg-orange-100 bg-opacity-70 ' :''
            }`} >
              <Link spy={true} to="Home" className="activeClass">
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700  ">
                  Home
                </div>
              </li>
              </Link>

              <Link spy={true} to="Overview">
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700  ">
                  About
                </div>
              </li>
              </Link>
              <Link spy={true} to="Projects">
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700  ">
                  Projects
                </div>
              </li>
              </Link>
              <Link spy={true} to="Contact">
              <li>
                <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700  ">
                  Contacts
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
