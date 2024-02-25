"use server";
import { AnggotaKelCreate, AnggotaKelUpdate, CookieAuth, ParamUpdate } from "@/{model}/anggotakel.response";
import axios from "axios";

export async function UpdateAction(pardata: AnggotaKelUpdate, ca: CookieAuth, id: ParamUpdate) {
    try {
      const token = ca.cookies;
      console.log('berhasil kirim response update')
  
      const response = await axios.post(
        `http://127.0.0.1:2000/api/kependudukan/anggotakel/update/${id}`,
        pardata,
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
  