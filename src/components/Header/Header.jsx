import React from "react";

const Header = () => {
  return (
    <div className="px-16 py-3 flex justify-between items-center bg-white shadow-md">
      <div className="flex items-center">
        <img src="/logo-img.png" alt="logo" className="size-14" />
        <h1 className="font-poppins font-semibold text-lg text-orange-700">
          YumHub
        </h1>
      </div>
      <div className="flex items-center space-x-5">
        <a
          href="#"
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Promotions
        </a>
        <a
          href="#"
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Menu
        </a>
        <a
          href="#"
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Table
        </a>
      </div>
      <div className="flex items-center space-x-5">
        <button className="border-gray-300 border hover:bg-orange-500 hover:text-white duration-300 px-5 py-2 rounded-lg">
          Login
        </button>
        <button className="border-gray-300 border hover:bg-orange-500 hover:text-white duration-300 px-5 py-2 rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
