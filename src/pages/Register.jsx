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
    <div className="bg-gray-100 flex items-center h-screen">
      <div className="h-svh p-6 flex flex-col w-[350px] sm:w-[400px]">
        <h2 className="text-[28px] font-medium text-[#1D2226] leading-[36px] font-rubik mb-4">
          Create your PopX account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 flex-grow font-rubik"
        >
          {[
            { label: "Full Name", name: "fullName", placeholder: "Xavier doe" },
            { label: "Phone Number", name: "phone", placeholder: "1234567890" },
            {
              label: "Email Address",
              name: "email",
              placeholder: "xavier@example.com",
            },
            {
              label: "Password",
              name: "password",
              placeholder: "Enter password",
              type: "password",
            },
            {
              label: "Company Name",
              name: "company",
              placeholder: "Xavier Pvt Ltd",
            },
          ].map(({ label, name, placeholder, type = "text" }) => (
            <fieldset
              key={name}
              className="border border-gray-300 rounded-md pb-2 px-3"
            >
              <legend className="text-[13px] font-rubik text-[#6C25FF] font-regular leading-[17px]">
                {label} <span className="text-[#DD4A3D]">*</span>
              </legend>

              <input
                type={type}
                placeholder={placeholder}
                {...register(name, { required: `${label} is required` })}
                className="w-full text-[13px] text-[#1D2226] leading-[17px] outline-none font-[rubik]"
              />
            </fieldset>
          ))}

          {Object.entries(errors).map(([key, error]) => (
            <p
              key={key}
              className="text-[13px] font-rubik text-[#DD4A3D] leading-[17px]"
            >
              {error.message}
            </p>
          ))}

          <label className="text-[14px] font-rubik font-regular text-[#1D2226] leading-[17px]">
            Are you an Agency? <span className="text-[#DD4A3D]">*</span>
          </label>

          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center text-[13px] text-[#1D2226] leading-[17px]"
              >
                <input
                  type="radio"
                  {...register("agency", {
                    required: "Please select an option",
                  })}
                  value={option}
                  className="accent-[#6C25FF] w-4 h-4 mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          {errors.agency && (
            <p className="text-[13px] font-rubik text-[#DD4A3D] leading-[17px]">
              {errors.agency.message}
            </p>
          )}

          <div className="mt-auto">
            <button
              type="submit"
              disabled={!isValid}
              className={`font-rubik font-medium text-[16px] leading-[17px] text-[#FFFFFF] p-3 rounded-lg w-full transition-all ${
                isValid
                  ? "bg-[#6C25FF] hover:bg-[#5720D4]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
