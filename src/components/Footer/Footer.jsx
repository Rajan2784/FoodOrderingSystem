import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Our Menu Section */}
        <div className="w-full">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Our Menu</h3>
          <ul className="w-full">
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Pizza
              </span>{" "}
            </li>
            <li className="mb-2 flex items-center cursor-pointer group">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Burgers
              </span>{" "}
            </li>
            <li className="mb-2 flex items-center cursor-pointer group">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Pasta
              </span>{" "}
            </li>
            <li className="mb-2 flex items-center cursor-pointer group">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Salads
              </span>{" "}
            </li>
            <li className="mb-2 flex items-center cursor-pointer group">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Desserts
              </span>
            </li>
            <li className="flex items-center cursor-pointer group">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Drinks
              </span>{" "}
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Links</h3>
          <ul className="">
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Home
              </span>
            </li>
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                About
              </span>
            </li>
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Promotions
              </span>
            </li>
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Menu
              </span>
            </li>
            <li className="flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Book a Table
              </span>
            </li>
          </ul>
        </div>

        {/* Extra Links Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">Extra Links</h3>
          <ul className="">
            <li className="mb-2 flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Login
              </span>
            </li>
            <li className="flex items-center group cursor-pointer">
              <span className="mr-2 text-green-600">➜</span>{" "}
              <span className="group-hover:ml-4 group-hover:scale-110 group-hover:text-green-600 duration-300 text-gray-600">
                Register
              </span>
            </li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            Opening Hours
          </h3>
          <p className="text-gray-500">Everyday: 7:00am To 10:00pm</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/717/717392.png"
              alt="Intagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111774.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} YumHub. All rights reserved.</p>
        <p>Designed & Developed by Rajan.</p>
      </div>
    </footer>
  );
};

export default Footer;
