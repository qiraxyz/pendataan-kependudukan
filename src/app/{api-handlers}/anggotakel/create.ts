"use server";
import { AnggotaKelCreate, CookieAuth } from "@/{model}/anggotakel.response";
import axios from "axios";

export async function CreateAnggota(
  ca: CookieAuth,
  anggotakel: AnggotaKelCreate
) {
  try {
    const token = ca.cookies;
    
    // const formData = new FormData();
    // formData.append('NomorKK', anggotakel.NomorKK);
    // formData.append('NIK', anggotakel.NIK);
    // formData.append('Nama', anggotakel.Nama);
    // formData.append('JenisKelamin', anggotakel.JenisKelamin);
    // formData.append('TempatLahir', anggotakel.TempatLahir);
    // formData.append('TanggalLahir', anggotakel.TanggalLahir);
    // formData.append('Agama', anggotakel.Agama);
    // formData.append('Pendidikan', anggotakel.Pendidikan);
    // formData.append('JenisPekerjaan', anggotakel.JenisPekerjaan);
    // formData.append('StatusPernikahan', anggotakel.StatusPernikahan);
    // formData.append('StatusHubunganDalamKeluarga', anggotakel.StatusHubunganDalamKeluarga);
    // formData.append('Kewarganegaraan', anggotakel.Kewarganegaraan);
    // formData.append('NamaAyah', anggotakel.NamaAyah);
    // formData.append('NamaIbu', anggotakel.NamaIbu);
    // formData.append('GolonganDarah', anggotakel.GolonganDarah);
    // formData.append('YatimPiatu', anggotakel.YatimPiatu);
    // formData.append('MemilikiUsaha', anggotakel.MemilikiUsaha);

    const response = await axios.post(
      "http://127.0.0.1:2000/api/kependudukan/anggotakel/add",
      anggotakel,
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
