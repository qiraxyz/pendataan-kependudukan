"use server";
import axios from "axios";
import {
  Param,
  CookieAuth,
  AnggotaKelCreate,
} from "@/{model}/anggotakel.response";

export async function GetAnggotaKelHandler(set: Param, ca: CookieAuth) {
  try {
    const token = ca.cookies;

    const response = await axios.post(
      "http://127.0.0.1:2000/api/kependudukan/anggotakel",
      set,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status >= 200 && response.status <= 300) {
      // console.log(response.data);
      return response.data;
    } else {
      // console.error('Request failed with status:', response.status);
      // console.error('Response data:', response.data); // Tambahkan ini untuk melihat data respons saat gagal
      return null;
    }
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}
