import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white relative">
      {/* Brand */}
      <div className="max-w-28 ml-10">
        <img src="/shrinkit.png" alt="logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="block md:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-10 mt-5 text-lightGray font-medium text-xl">
        <li>
          <a href="#" className="hover:text-black">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Resources
          </a>
        </li>
      </ul>

      {/* Actions */}
      <div className="hidden md:flex gap-4 mt-5 font-medium">
        <a
          href="#"
          className="px-4 py-2 text-black hover:border-none hover:text-white hover:rounded-full hover:bg-primary rounded-full border-[1px]"
        >
          Login
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-primary text-white rounded-full hover:opacity-70 hover:text-black hover:bg-white hover:border-black hover:border-[1px] transition"
        >
          Sign Up
        </a>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-darkBlue text-white text-center py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Resources
              </a>
            </li>
            <hr className="border-t border-gray-600 my-2" />
            <li>
              <a
                href="#"
                className="px-4 py-2 text-black bg-white rounded-full hover:bg-primary hover:text-white transition"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 bg-primary text-white rounded-full hover:opacity-70 hover:text-black hover:bg-white transition"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
