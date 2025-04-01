import { signIn } from "@/auth";
import React from "react";

const loginActions = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  await signIn("credentials", {
    email,
    password,
  });

  return <div></div>;
};

export default loginActions;
