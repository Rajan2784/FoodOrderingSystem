import React from "react";
import PromotionTable from "../components/PromotionTable";

const Promotions = () => {
  return (
    <div>
      <h1 className="text-center mt-10 text-2xl font-playwrite font-semibold text-green-500">
        Promotions
      </h1>
      <h1 className="text-center mt-5 text-2xl font-sans font-semibold">
        Best Quality With Reasonable Price
      </h1>
      <div className="mt-5">
        <PromotionTable />
      </div>

      <h1 className="text-center text-2xl font-semibold mt-6">
        Today's Offers
      </h1>
      <div className="mt-10 grid grid-cols-2 place-items-center">
        <div className="flex gap-3 mt-5 justify-center">
          <div className="col-span-1 items-center flex justify-center">
            <img
              src="burger-home.png"
              alt=""
              className="size-56 rounded-md border"
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl font-semibold">Special Offer</h1>
            <li className="text-gray-600 mt-3">
              Buy 2 Get 1 Free on all Burgers.
            </li>
            <li className="text-gray-600 mt-3">
              <span className="text-red-500">*Offer valid for today only.</span>
            </li>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-5">
              Order now
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="col-span-1 items-center flex justify-center">
            <img src="pizza.png" alt="" className="size-56 rounded-md border" />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl font-semibold">Special Offer</h1>
            <li className="text-gray-600 mt-3">
              Additional 10% off on all Pizzas.
            </li>
            <li className="text-gray-600 mt-3">
              <span className="text-red-500">*Offer valid for today only.</span>
            </li>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-5">
              Order now
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="col-span-1 items-center flex justify-center">
            <img
              src="dessert-img.png"
              alt=""
              className="size-56 rounded-md border"
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl font-semibold">Special Offer</h1>
            <li className="text-gray-600 mt-3">
              Addiotional 15% off on all Desserts.
            </li>
            <li className="text-gray-600 mt-3">
              <span className="text-red-500">*Offer valid for today only.</span>
            </li>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-5">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
