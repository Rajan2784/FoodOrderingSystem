import { useState } from "react";

const MenuPage = () => {
  //   const { category } = useParams();
  const [category, setCategory] = useState("veg-thali");

  // Mock menu data
  const menuData = {
    "veg-thali": [
      {
        name: "Dal Tadka",
        description: "A creamy yellow lentil dish tempered with spices.",
        image: "daal-tadka.jpg",
        price: 150,
      },
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes in a rich tomato gravy.",
        price: 200,
        image: "panner-butter-masala.jpg",
      },
      {
        name: "Aloo Gobi",
        description: "A dry curry made with potatoes and cauliflower.",
        price: 120,
        image: "aloo-gobi.jpg",
      },
      {
        name: "Chana Masala",
        description: "Spicy chickpea curry with flavorful masalas.",
        price: 140,
        image: "chana-masala.jpg",
      },
      {
        name: "Vegetable Pulao",
        description: "Fragrant rice cooked with mixed vegetables.",
        price: 180,
        image: "veg-pulao.jpg",
      },
    ],
    "non-veg": [
      {
        name: "Butter Chicken",
        description: "Tender chicken pieces in a creamy tomato gravy.",
        price: 250,
        image: "butter-chicken.jpg",
      },
      {
        name: "Chicken Tikka Masala",
        description: "Char-grilled chicken in a spiced curry.",
        price: 230,
        image: "chicken-tikka-masala.jpg",
      },
      {
        name: "Mutton Curry",
        description: "Slow-cooked lamb in a flavorful curry.",
        price: 300,
        image: "mutton-curry.jpg",
      },
      {
        name: "Fish Curry",
        description: "Fresh fish cooked in a spicy coconut gravy.",
        price: 220,
        image: "fish-curry.jpg",
      },
      {
        name: "Chicken Biryani",
        description: "Aromatic rice cooked with chicken and spices.",
        price: 280,
        image: "chicken-biryani.jpg",
      },
    ],
    drinks: [
      {
        name: "Mango Lassi",
        description: "A refreshing yogurt-based mango drink.",
        price: 80,
        image: "mango-lassi.jpg",
      },
      {
        name: "Masala Chai",
        description: "Indian spiced tea with milk.",
        price: 40,
        image: "masala-chai.jpg",
      },
      {
        name: "Cold Coffee",
        description: "Chilled coffee with milk and ice.",
        price: 90,
        image: "cold-coffee.jpg",
      },
      {
        name: "Fresh Lime Soda",
        description: "Sparkling lime soda, sweet or salty.",
        price: 50,
        image: "lime-soda.jpg",
      },
      {
        name: "Coconut Water",
        description: "Fresh coconut water served chilled.",
        price: 70,
        image: "coconut-water.jpg",
      },
      {
        name: "Mazza",
        description: "Fresh mango juice served chilled.",
        price: 70,
        image: "mazza.webp",
      },
      {
        name: "Thumbs Up",
        description: "Indian cola drink with a unique taste.",
        price: 60,
        image: "thumbs-up.webp",
      },
      {
        name: "Sprite",
        description: "Lemon-lime flavored carbonated drink.",
        price: 60,
        image: "sprite.webp",
      },
      {
        name: "Coca Cola",
        description: "Classic carbonated cola drink.",
        price: 60,
        image: "coca-cola.webp",
      },
    ],
  };

  // Retrieve the menu items for the selected category
  const items = menuData[category] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-playwrite text-green-600">
        MENU
      </h1>

      <section className="grid grid-cols-12 gap-2">
        {/* Left Section  */}
        <div className="col-span-3 relative">
          {/* This will be the left section of the page where we will display the filters and sorting options. */}
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

        {/* // Right Section */}
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

          {items.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={`/${item.image}`}
                    alt={item.name}
                    className="rounded-lg w-full h-60 object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-500">
                      ₹{item.price}
                    </span>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
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
