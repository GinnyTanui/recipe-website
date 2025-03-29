import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import Logo from "../images/Group 1.png";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-full h-20 md:h-24 lg:h-28">
        <div className="px-6 md:px-12 py-6 md:py-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <img src={Logo} alt="logo" className="w-32 md:w-40 lg:w-48 h-auto" />
            </div>

            {/* Menu Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden z-50">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 font-semibold text-white font-roboto">
              <li className="cursor-pointer hover:text-gray-200"><Link to='/'>Home</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/about'>About</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/search'>Search for Recipes</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/favorites'>Favorites</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/contact'>Contact</Link></li> 
              <li className="cursor-pointer hover:text-gray-200"><Link to='/privacy'>PrivacyPolicy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#FFF5E1] flex flex-col justify-center items-center  text-black font-semibold font-roboto">
          <ul className="text-lg space-y-6">
          <li className="cursor-pointer hover:text-gray-200"><Link to='/'>Home</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/about'>About</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/search'>Search for Recipes</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/favorites'>Favorites</Link></li>
              <li className="cursor-pointer hover:text-gray-200"><Link to='/contact'>Contact</Link></li> 
              <li className="cursor-pointer hover:text-gray-200"><Link to='/privacy'>PrivacyPolicy</Link></li>
          </ul>

          {/* Close Menu Button */}
          
        </div>
      )} 
    </div> 
     
  ); 
 
};

export default Navbar;
