import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <p className="text-gray-600 mt-4 text-center">
        We offer a wide range of categories, from traditional to modern.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap justify-between items-center w-full">
        {/* <!-- Veg Thali --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="veg-thali.png"
            alt="Veg Thali"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Veg Thali
          </p>
        </div>

        {/* <!-- Chicken Curry --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="chicken-curry.png"
            alt="Chicken Curry"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Mutton Curry
          </p>
        </div>

        {/* <!-- Mutton Biryani --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="biryani.png"
            alt="Mutton Biryani"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Chicken Biryani
          </p>
        </div>

        {/* <!-- Pizza --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img src="pizza.png" alt="Pizza" className="rounded-full size-28" />
          <p className="text-center text-gray-600 group-hover:text-white">
            Pizza
          </p>
        </div>

        {/* <!-- Cheese Burger --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="burger.png"
            alt="Cheese Burger"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Cheese Burger
          </p>
        </div>

        {/* <!-- Club Sandwich --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="sandwich.png"
            alt="Club Sandwich"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Sandwich
          </p>
        </div>

        {/* <!-- Desserts --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img
            src="dessert-img.png"
            alt="Desserts"
            className="rounded-full size-28"
          />
          <p className="text-center text-gray-600 group-hover:text-white">
            Desserts
          </p>
        </div>

        {/* <!-- Drinks --> */}
        <div className="group bg-white shadow-md hover:bg-green-500 duration-200 cursor-pointer rounded-md p-4">
          <img src="drinks.png" alt="Drinks" className="rounded-full size-28" />
          <p className="text-center text-gray-600 group-hover:text-white">
            Drinks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
