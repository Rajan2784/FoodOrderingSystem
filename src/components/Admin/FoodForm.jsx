import React from "react";
import { useForm } from "react-hook-form";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { uploadFoods } from "../../utils/api";
import { Bounce, toast, ToastContainer } from "react-toastify";

const FoodForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Uploading the image to Cloudinary and getting the URL
      const imageUrl = await uploadToCloudinary(data.image[0]);

      // Sending food data with the image URL to the backend
      const foodData = { ...data, foodImage: imageUrl };

      const response = await uploadFoods(foodData);
      toast.success(response, {
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

      // Reseting the form after successful submission
      reset();
    } catch (error) {
      console.error("Error adding food:", error);
      alert("Error adding food item.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
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
      {/* Form Section */}
      <div className="bg-white shadow-md rounded p-5 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add Food Item</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-medium">Food Name</label>
            <input
              type="text"
              {...register("foodName", { required: "Food Name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              {...register("foodCategory", {
                required: "Category is required",
              })}
              className="w-full p-2 border rounded"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("foodDescription", {
                required: "Description is required",
              })}
              className="w-full p-2 border rounded"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm font-medium">Discount (%)</label>
            <input
              type="number"
              {...register("discount")}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              {...register("foodType", { required: "Type is required" })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Type</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              {...register("foodStatus", { required: "Status is required" })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full p-2 border rounded"
              accept="image/*"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Submit Button */}
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
