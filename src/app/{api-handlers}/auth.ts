"use server"
import AuthUser from "@/model/auth.response";
import { setCookie } from "cookies-next"; 

export default async function AuthHandler(auth_model : AuthUser) {
  try {
    const user = {
      Email: auth_model.Email,
      Password: auth_model.Password,
    };

    const response = await fetch('http://127.0.0.1:2000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    // console.error('Login failed:', error);
  }
}
