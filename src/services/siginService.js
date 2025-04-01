export const signInService = async (user) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorMessage}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (error) {
    console.error("Sign-in error:", error.message);
    return { error: error.message };
  }
};
