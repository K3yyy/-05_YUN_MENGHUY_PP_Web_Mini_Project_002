import React from "react";
import LoginComponent from "../_components/login";
export default function LoginPage() {
  return (
    <main>
      <div className="space-y-6 w-1/3 mx-auto bg-white drop-shadow-light-steel-blue p-12 rounded-3xl ">
        <h1 className="font-bold text-3xl text-center">
          Welcome to Plan<span className="text-watermelon-red">I</span>
        </h1>
        <LoginComponent />
      </div>
    </main>
  );
}
