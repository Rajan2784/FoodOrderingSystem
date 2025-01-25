import React from "react";

const Foods = () => {
  // Dummy data for the table
  const foods = [
    {
      name: "Margherita Pizza",
      category: "Italian",
      price: "$12.99",
      discount: "10%",
      type: "Vegetarian",
      status: "Available",
    },
    {
      name: "Chicken Burger",
      category: "Fast Food",
      price: "$8.99",
      discount: "5%",
      type: "Non-Vegetarian",
      status: "Available",
    },
    {
      name: "Pasta Alfredo",
      category: "Italian",
      price: "$15.50",
      discount: "15%",
      type: "Vegetarian",
      status: "Out of Stock",
    },
    {
      name: "Caesar Salad",
      category: "Salads",
      price: "$9.50",
      discount: "5%",
      type: "Vegetarian",
      status: "Available",
    },
    {
      name: "Grilled Salmon",
      category: "Seafood",
      price: "$20.00",
      discount: "10%",
      type: "Non-Vegetarian",
      status: "Available",
    },
  ];

  return (
    <div>
      {/* Table Section */}
      <div className="mt-10 min-h-screen w-full bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-center">Manage Foods</h2>
        <table className="w-full table-auto border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-3">Name</th>
              <th className="border border-gray-400 px-2 py-3">Category</th>
              <th className="border border-gray-400 px-2 py-3">Price</th>
              <th className="border border-gray-400 px-2 py-3">Discount</th>
              <th className="border border-gray-400 px-2 py-3">Type</th>
              <th className="border border-gray-400 px-2 py-3">Status</th>
              <th className="border border-gray-400 px-2 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-2 py-3">{food.name}</td>
                <td className="border border-gray-400 px-2 py-3">{food.category}</td>
                <td className="border border-gray-400 px-2 py-3">{food.price}</td>
                <td className="border border-gray-400 px-2 py-3">{food.discount}</td>
                <td className="border border-gray-400 px-2 py-3">{food.type}</td>
                <td className="border border-gray-400 px-2 py-3">{food.status}</td>
                <td className="border border-gray-400 px-2 py-3">
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Foods;
