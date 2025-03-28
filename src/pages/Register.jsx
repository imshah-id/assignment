import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    navigate("/profile");
  };

  return (
    <div className="bg-gray-100">
      <div className="h-screen p-4 sm:max-w-lg md:max-w-xl mx-auto">
        <h2 className="text-3xl  font-semibold text-gray-900 mb-4 mt-6">
          Create your PopX account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col">
          <fieldset className="border border-gray-300 pb-2 px-3 rounded-md">
            <legend className="text-sm text-indigo-600">Full Name</legend>
            <input
              placeholder="Xavier"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full outline-0 rounded-md "
            />
          </fieldset>
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}

          <fieldset className="border border-gray-300 pb-2 px-3 rounded-md mt-3">
            <legend className="text-sm text-indigo-600">Phone Number</legend>
            <input
              placeholder="1234567890"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full outline-0 rounded-md "
            />
          </fieldset>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <fieldset className="border border-gray-300 pb-2 px-3 rounded-md mt-3">
            <legend className="text-sm text-indigo-600">Email Address</legend>
            <input
              placeholder="xavier@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full outline-0 rounded-md "
            />
          </fieldset>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <fieldset className="border border-gray-300 pb-2 px-3 rounded-md mt-3">
            <legend className="text-sm text-indigo-600">Password</legend>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
              className="w-full outline-0 rounded-md "
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <fieldset className="border border-gray-300 pb-2 px-3 rounded-md mt-3">
            <legend className="text-sm text-indigo-600">Company Name</legend>
            <input
              placeholder="xavier Pvt Ltd"
              {...register("company", { required: "Company name is required" })}
              className="w-full outline-0 rounded-md "
            />
          </fieldset>
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}

          <label className="text-sm mx-2 mt-2  text-indigo-600">
            Are you an agency?
          </label>
          <div className="flex gap-4 mx-2">
            <label className="flex items-center">
              <input
                type="radio"
                {...register("agency", {
                  required: "Please select an option",
                })}
                value="Yes"
                className="accent-indigo-500 mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                className="accent-indigo-500 mr-2"
                type="radio"
                {...register("agency", {
                  required: "Please select an option",
                })}
                value="No"
              />
              No
            </label>
          </div>

          {errors.agency && (
            <p className="text-red-500 text-sm">{errors.agency.message}</p>
          )}

          <button
            type="submit"
            disabled={!isValid}
            className={`font-semibold text-white p-2 mt-4 rounded-md w-full transition-all ${
              isValid ? "bg-[#6C25FF]" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
