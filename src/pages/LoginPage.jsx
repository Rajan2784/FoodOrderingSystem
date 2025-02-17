import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    


  return <div className="flex items-center justify-center">
    <div>
      <form action="">
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
      </form>
    </div>
  </div>;
};

export default LoginPage;
