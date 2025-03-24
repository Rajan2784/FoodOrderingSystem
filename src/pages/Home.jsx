import React from "react";
import Header from "../components/Header/Header";
import Categories from "../components/Categories";
import HomeOffer from "../components/HomeOffer";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}

      <div className="flex flex-col md:flex-row justify-between items-center h-[80vh]">
        {/* Left Section  */}

        <div className="text-start z-20">
          <h1 className="text-2xl font-bold mt-10 text-orange-600 font-poppins">
            Welcome to Yum Hub Foodies :)
          </h1>
          <p className="mt-5 text-4xl z-20">Taste😋 the best in your town.</p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 mb-5">
            Delicious meals crafted with love, delivered straight to your door.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg">
            Order Now
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg ml-4">
            View Menu
          </button>
        </div>

        {/* Right Section  */}

        <div className="relative w-1/2 flex justify-center items-center">
          <img
            src="spices-home.png"
            alt="species"
            className="absolute w-[36rem]"
          />
          <img
            src="/panner-home.png"
            alt="home"
            className="mx-auto mt-10 size-96"
          />
          {/* <img
            src="/panner-home.jpg"
            alt="home"
            className="mx-auto mt-10 w-[30rem] h-96 rounded-md"
          /> */}
        </div>
      </div>

      {/* Categories Section */}

      <Categories />

      {/* Offer Section */}

      <h1 className="text-center mt-10 text-2xl font-playwrite font-semibold text-green-500">
        Offers
      </h1>
      <HomeOffer />

      {/* Why Choose Us? */}
      <WhyUs />
    </div>
  );
};

export default Home;
