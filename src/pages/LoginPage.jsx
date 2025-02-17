import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../utils/api";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/slices/authSlice.js";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response)
      dispatch(loginAction(response));
      toast.success("LoggedIn Successfully", {
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

      reset();
      navigate("/menu")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-80 flex flex-col items-center justify-center gap-4">
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
      <div className="bg-white shadow-md rounded p-5 w-full h-full mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              {...register("password", { required: "password is required" })}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
