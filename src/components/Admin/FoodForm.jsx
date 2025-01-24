import React, { useState } from "react";

const FoodForm = () => {
    const [foodDetails, setFoodDetails] = useState({
      name: "",
      category: "",
      price: "",
      description: "",
      discount: "",
      type: "",
      status: "",
      image: null,
    });

    const [foods, setFoods] = useState([]); // State to display food details

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "image") {
        setFoodDetails({ ...foodDetails, image: files[0] });
      } else {
        setFoodDetails({ ...foodDetails, [name]: value });
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(foodDetails).forEach(([key, value]) => {
        formData.append(key, value);
      });

      try {
        const response = await axios.post("/api/foods", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Food added successfully");
        setFoods([...foods, response.data]);
        setFoodDetails({
          name: "",
          category: "",
          price: "",
          description: "",
          discount: "",
          type: "",
          status: "",
          image: null,
        });
      } catch (error) {
        console.error(error);
        alert("Error adding food");
      }
    };

  return (
    <div>
      {/* Form Section */}
      <div className="bg-white shadow-md rounded p-5 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add Food Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Food Name</label>
            <input
              type="text"
              name="name"
              value={foodDetails.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={foodDetails.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={foodDetails.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={foodDetails.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={foodDetails.discount}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              name="type"
              value={foodDetails.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Type</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={foodDetails.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodForm;
