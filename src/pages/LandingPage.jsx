import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-svh p-4 bg-gray-100 sm:max-w-lg md:max-w-xl mx-auto">
      <h1 className="text-[1.6rem] font-semibold text-gray-900">
        Welcome to PopX
      </h1>
      <p className="mt-1 mb-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <section className="flex flex-col gap-2.5 mt-4 mb-6">
        <button
          className="py-3 px-4 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
        <button
          className="p-3 font-medium text-gray-900 bg-purple-300 rounded-md"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
