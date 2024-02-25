"use server";
import axios from "axios";
import {
  Param,
  CookieAuth,
  ParamUpdate,
} from "@/{model}/kepalakel.response";

export async function DeleteKepala(set: Param, ca: CookieAuth, id: ParamUpdate) {
  try {
    const token = ca.cookies;
    console.log('berhasil delete response')

    const response = await axios.post(
      `http://127.0.0.1:2000/api/kependudukan/kepalakel/delete/${id}`,
      set,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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