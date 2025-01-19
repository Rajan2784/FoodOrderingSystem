import React from 'react'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center px-16 h-[80vh]">
        {/* <img
          src="burger-home.png"
          alt="burger"
          className="absolute top-96 rotate-45 z-10 size-80 left-80"
        /> */}

        <div className="text-start z-20">
          <h1 className="text-2xl font-bold mt-10 text-orange-600 font-poppins">
            Welcome to Yum Hub Foodies :)
          </h1>
          <p className="mt-5 text-4xl z-20">Taste😋 the best in your town.</p>
          <p class="text-lg md:text-xl text-gray-600 mt-4">
            Delicious meals crafted with love, delivered straight to your door.
          </p>
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg">
            Order Now
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg ml-4">
            View Menu
          </button>
        </div>
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
        </div>
      </div>
    </div>
  );
}

export default Home