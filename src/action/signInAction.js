"use server";

import { signIn } from "@/auth";

export const signInAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!password) {
    return { error: "Password is required" };
  }

  // Check if the token is available
  const token = formData.get("token");
  if (!token) {
    return { error: "Token is missing, please try again." };
  }

  // Proceed with the sign-in action only if token is present
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboards",
  });
};
