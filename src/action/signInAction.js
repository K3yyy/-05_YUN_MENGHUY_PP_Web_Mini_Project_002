"use server";

import { signIn } from "@/auth";

export const signInAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!password) {
    return { error: "Password is required" };
  }

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboards",
  });
};
