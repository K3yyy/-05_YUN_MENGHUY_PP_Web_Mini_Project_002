export const registerService = async (user) => {
  try {
    const response = await fetch(
      `http://96.9.81.187:8080/api/v1/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    // Attempt to parse response JSON
    const responseData = await response.json().catch(() => null);
    console.log("Signup Response:", response.status, responseData);

    if (!response.ok) {
      const errorMessage =
        responseData?.message || `Registration failed: ${response.status}`;

      // Handle case where email already exists
      if (response.status === 409) {
        return {
          success: false,
          message: "Email already exists. Please use a different email.",
        };
      }

      return { success: false, message: errorMessage };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("SignUp Service Error:", error);
    return {
      success: false,
      message: error.message || "Signup failed due to an unknown error",
    };
  }
};
