export const registerService = async (user) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorMessage}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error("Sign-up error:", error.message);
    return { error: error.message };
  }
};
