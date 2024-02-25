"use server";
import { CookieAuth, Param, ParamUpdate } from "@/{model}/kepalakel.response";
import axios from "axios";

export async function GetKepalaKelById(set: Param, ca: CookieAuth, id: ParamUpdate) {
  try {
    const token = ca.cookies;
    console.log('berhasil kirim response get')

    const response = await axios.post(
      `http://127.0.0.1:2000/api/kependudukan/kepalakel/search/${id}`,
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