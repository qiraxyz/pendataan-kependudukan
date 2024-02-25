"use server";
import { KepalaKelCreate, CookieAuth } from "@/{model}/kepalakel.response";
import axios from "axios";

export async function CreateKepala(
  ca: CookieAuth,
  kepalakel: KepalaKelCreate
) {
  try {
    const token = ca.cookies;

    const response = await axios.post(
      "http://127.0.0.1:2000/api/kependudukan/kepalakel/add",
      kepalakel,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status >= 200 && response.status <= 300) {
      console.log(response.data);
      return response.data;
    } else {
      console.error("Request failed with status:", response.status);
      console.error("Response data:", response.data); 
      return null;
    }
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}
