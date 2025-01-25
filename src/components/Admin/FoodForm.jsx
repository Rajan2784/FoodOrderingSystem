import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { uploadFoods } from "../../utils/api";
import { Bounce, toast, ToastContainer } from "react-toastify";

const FoodForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     // Uploading the image to Cloudinary and getting the URL
  //     const imageUrl = await uploadToCloudinary(data.image[0]);

  //     // Sending food data with the image URL to the backend
  //     const foodData = { ...data, foodImage: imageUrl };

  //     const response = await uploadFoods(foodData);
  //     toast.success(response, {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //     });

  //     // Reseting the form after successful submission
  //     reset();
  //   } catch (error) {
  //     console.error("Error adding food:", error);
  //     alert("Error adding food item.");
  //   }
  // };

  return (
    <div>
      Food form
    </div>
  );
};

export default FoodForm;
