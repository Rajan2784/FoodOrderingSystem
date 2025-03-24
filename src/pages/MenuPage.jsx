import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { getFoods } from "../utils/api";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("veg-thali");
  const [foods,setFoods] = useState([])
  const getFood = async () => {
    const response = await getFoods();
    setFoods(response)
  }
  
  useEffect(()=>{
    getFood()
  },[])
console.log(foods)
  const handleCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h1 className="text-3xl font-bold text-center mb-8 font-playwrite text-green-600">
        MENU
      </h1>

      <section className="grid grid-cols-12 gap-2">
        {/* Left Section for sorting and filtering */}
        <div className="col-span-3 relative">
          <div className="relative">
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search for items..."
              className="pl-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h1 className="text-xl text-green-600 relative font-semibold before:absolute before:-bottom-1 before:w-full before:bg-green-600 before:h-0.5 before:content-[''] before:mx-auto before:rounded-full">
              Filters
            </h1>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Best Seller
            </p>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Top Rated
            </p>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              New Dishes
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h1 className="text-xl relative text-green-600 font-semibold mt-4 before:absolute before:-bottom-1 before:w-full before:bg-green-600 before:h-0.5 before:content-[''] before:mx-auto before:rounded-full">
              Sort By
            </h1>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Price: Low to High
            </p>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Price: High to Low
            </p>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Rating: Low to High
            </p>
            <p className="mt-1 hover:bg-orange-600 rounded-lg hover:text-white px-2 py-3 cursor-pointer">
              Rating: High to Low
            </p>
          </div>
        </div>

        {/* Right Section for showing the items */}
        <div className="col-span-9">
          <div className="flex justify-start flex-wrap items-center mb-6 gap-8 px-4 bg-green-600 rounded-lg">
            <h2 className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer">
              All
            </h2>
            <h2
              className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setCategory("veg-thali")}
            >
              Veg
            </h2>
            <h2
              className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setCategory("non-veg")}
            >
              Non-Veg
            </h2>
            <h2 className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer">
              FastFoods
            </h2>
            <h2 className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer">
              Deserts
            </h2>
            <h2
              className="text-xl hover:bg-orange-600 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setCategory("drinks")}
            >
              Drinks
            </h2>
          </div>

          {foods.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foods.map((item) => (
                <div
                  key={item.foodId}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={`${item.foodImage}`}
                    alt={item.foodName}
                    className="rounded-lg w-full h-60 object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.foodName}</h2>
                  <p className="text-gray-600 mb-4">{item.foodDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-500">
                      ₹{item.price}
                    </span>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      onClick={() => handleCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No items available for this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
