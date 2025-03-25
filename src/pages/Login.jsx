import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm({mode:'onChange'});
  const onSubmit = () => {
    navigate('/profile')
  };

  return (
    <div className="bg-gray-100 ">
      <div className=" h-screen p-4 sm:max-w-lg md:max-w-xl mx-auto">
        <h2 className="text-3xl max-w-58 font-semibold text-gray-900 mb-2 mt-6">
          Sign in to your PopX account
        </h2>
        <p className=" max-w-68 text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="border border-gray-300 mb-4 pb-2 px-3 rounded-md">
            <legend className="text-sm text-indigo-600  ">Email Address</legend>
            <input
              placeholder="Enter email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              className=" w-full outline-0 rounded-md"
            />
          </fieldset>
          {errors.email && (
            <p className="text-red-500 text-balance">{errors.email.message}</p>
          )}
          <fieldset className="border border-gray-300 pb-2  px-3 rounded-md">
            <legend className="text-sm  text-indigo-600">Password</legend>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "password is required",
              })}
              className=" w-full outline-0  rounded-md"
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button
            type="submit"
            disabled={!isValid} 
            className={`font-semibold text-white p-2 mt-3 rounded-md w-full transition-all ${
              isValid
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
