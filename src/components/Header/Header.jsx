import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FaOpencart } from "react-icons/fa6";

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user);
  return (
    <div className="px-16 py-3 flex justify-between items-center bg-white shadow-md">
      <div className="flex items-center">
        <img src="/logo-img.png" alt="logo" className="size-14" />
        <h1 className="font-poppins font-semibold text-lg text-orange-700">
          YumHub
        </h1>
      </div>
      <div className="flex items-center space-x-5">
        <Link
          to={"/"}
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          About
        </Link>
        <Link
          to={"/promotions"}
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Promotions
        </Link>
        <Link
          to={"/menu"}
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Menu
        </Link>
        <Link
          to={"/table"}
          className="text-gray-800 font-poppins font-medium duration-200 hover:text-orange-500"
        >
          Table
        </Link>
      </div>
      <div>
        {user ? (
          <div>
            <Link to={"/cart"}>
              <FaOpencart size={32}/>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-5">
            <Link
              to={"/login"}
              className="border-gray-300 border hover:bg-orange-500 hover:text-white duration-300 px-5 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="border-gray-300 border hover:bg-orange-500 hover:text-white duration-300 px-5 py-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
