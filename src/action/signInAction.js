"use server";

import { signIn } from "@/auth";

export const signInAction = async (formData) => {
  console.log("form data", formData);
  await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: "/dashboard",
  });
};
