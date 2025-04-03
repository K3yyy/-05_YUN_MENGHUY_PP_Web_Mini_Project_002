import { auth } from "@/auth";

const headerToken = async () => {
  const session = await auth();
  console.log("header token session: ", session);

  const token = session?.user?.payload?.token;
  if (!token) {
    console.error("No access token found!");
    return {};
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export default headerToken;
