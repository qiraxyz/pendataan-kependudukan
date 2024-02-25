"use server";
import axios from "axios";
import AuthUser from "@/{model}/auth.response";

export default async function AuthHandler(auth_model: AuthUser) {
  try {
    const user = {
      Email: auth_model.Email,
      Password: auth_model.Password,
    };

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);
    const expiresHeaderValue = expiryDate.toUTCString();

    const response = await axios.post("http://127.0.0.1:2000/api/auth", user, {
      headers: {
        "Content-Type": "application/json",
        // Adding cache-control header to prevent caching
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: expiresHeaderValue,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      // Handle non-2xx status codes
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    // Handle errors
    console.error("Login failed:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}
