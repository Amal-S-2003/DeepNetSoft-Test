import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between mx-20  ">
      <div className="logo flex gap-1 items-start z-99">
        <img
          src="./dns-logo.png"
          alt="deepnetlogo"
          style={{ height: "76px" }}
        />
        <div
          className=" flex-col text-2xl  mt-1 font-bold hidden md:flex"
          style={{ fontWeight: "500" }}
        >
          <div className="flex gap-1">
            <span className="text-blue-600">DEEP</span>{" "}
            <span className="text-white">NET</span>{" "}
          </div>
          <span className="text-gray-300">SOFT</span>
        </div>
      </div>
      <div className="menu hidden md:flex z-99">
        <ul className="flex gap-5">
          <li className="text-white hover:text-blue-500  ">HOME</li>
          <li className="text-white hover:text-blue-500  ">MENU</li>
          <li className="text-white hover:text-blue-500  ">
            MAKE A RESERVATION
          </li>
          <li className="text-white hover:text-blue-500  ">CONTACT US</li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl z-99"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="z-99 absolute top-16 right-6 bg-black border border-gray-700 w-48 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {["HOME", "MENU", "MAKE A RESERVATION", "CONTACT US"].map(
              (item) => (
                <li
                  key={item}
                  className="text-white hover:text-blue-500 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
