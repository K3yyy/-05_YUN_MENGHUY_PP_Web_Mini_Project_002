import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AccountDashboard() {
  return (
    <div className="account-section flex w-full h-32 p-4">
      <div className=" h-20 w-32 rounded-lg flex items-center justify-center  font-semibold text-lg">
        Static
      </div>

      <div className="flex-grow"></div>

      <div className=" w-64 flex items-center p-3 rounded-2xl ">
        <div className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell text-gray-700"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </div>

        {/* Image and Name Section */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img
              src="https://i.pinimg.com/736x/a6/16/28/a6162845747ab6f081706e9a00552a13.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-800">Keyy</h1>
            <p className="text-xs text-blue-600">keyy@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
