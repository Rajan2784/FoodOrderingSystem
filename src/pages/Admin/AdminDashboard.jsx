import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Dashboard from "../../components/Admin/Dashboard";
import FoodForm from "../../components/Admin/FoodForm";
import Foods from "../../components/Admin/Foods";
import Sidebar from "../../components/Admin/Sidebar";

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [tab, setTab] = useState("dashboard");

  const renderTabs = () => {
    switch (tab) {
      case "dashboard":
        return <Dashboard />;
      case "foodItems":
        return <Foods />;
      case "addFood":
        return <FoodForm />;
      default:
        return <Dashboard />;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen flex mt-12 gap-5">
      {/* <Dashboard />
      <Foods />
      <FoodForm /> */}
      {/* Main Content */}
      {/* <main className="w-3/4 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Add Food Item
        </h1>

        <form
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="foodName" className="block text-lg font-semibold">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              {...register("foodName", { required: "Food name is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.foodName && (
              <p className="text-red-500 text-sm">{errors.foodName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-lg font-semibold">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: "Price is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block text-lg font-semibold">
              Category
            </label>
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            >
              <option value="">Select Category</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-lg font-semibold">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              {...register("image", { required: "Image is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Add Food
            </button>
          </div>
        </form>
      </main> */}

      <Sidebar setTab={setTab} tab={tab} />

      {renderTabs()}
    </div>
  );
};

export default AdminDashboard;
