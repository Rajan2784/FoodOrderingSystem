import React from "react";

const HomeOffer = () => {
    const items = ["", "", ""];
  return (
    <div className="flex items-center justify-between mt-10">
      {items.map((item, index) => (
        <div className="h-[30rem] w-[26rem] rounded-lg shadow-lg overflow-hidden group relative" key={index}>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-125"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/15059063/pexels-photo-15059063/free-photo-of-a-bowl-of-food-with-a-spoon-and-lemon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
          ></div>

          {/* Overlay Content */}
          <div className="relative h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl text-white font-bold mb-4">
              Special Offers
            </h2>
            <ul className="text-white mb-8">
              <li className="mb-2">10% off on all orders</li>
              <li className="mb-2">Free delivery on orders above $20</li>
              <li className="mb-2">Buy one get one free on all desserts</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeOffer;
