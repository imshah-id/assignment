import React from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-10">
      {/* Account Settings Title */}
      <div className="w-full max-w-md px-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-6">
          Account Settings
        </h1>

        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
          <div className="relative w-16 h-16">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqO4BvvzIaRR17qdLgDPp2MdD4odVN_bvhw&s"
              alt="Profile"
              className="w-16 h-16 rounded-full border"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>

          <div className="ml-4">
            <h2 className="text-lg font-bold text-gray-900">Xavier</h2>
            <p className="text-sm text-gray-500">xavier@gmail.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="border-t-2 border-dashed border-gray-300 mt-6"></div>
      </div>
    </div>
  );
};

export default Profile;
