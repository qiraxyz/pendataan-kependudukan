"use client";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import progressBar from "@/{lib}/loader";
import { AnggotaKel, ParamUpdate, CookieAuth, Param, AnggotaKelCreate, } from "@/{model}/anggotakel.response";
import { UpdateAction } from "@/app/{api-handlers}/anggotakel/update.ac";
import { GetAnggotaKelById } from "@/app/{api-handlers}/anggotakel/update";
import { useParams } from "next/navigation";
import NavbarMain from "@/app/{components}/navbar";

export default function UpdateAnggota() {
  const [CreateFailed, setCreateFailed] = useState(false);
  const isLoading = progressBar();
  const params = useParams();
  const UpdateId: ParamUpdate = { id: params.id };
  const [dataRes, setDataRes] = useState<AnggotaKelCreate | null>(null);

  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token");
        const set: Param = { set: "push" };
        const CookieAuth: CookieAuth = { cookies: token };
        const responseData = await GetAnggotaKelById(
          set,
          CookieAuth,
          UpdateId.id
        );
        console.log(responseData);
        const fetchedData: AnggotaKelCreate = {
          NomorKK: responseData.data.nomor_kk,
          NIK: responseData.data.nik,
          Nama: responseData.data.nama,
          JenisKelamin: responseData.data.jenis_kelamin,
          TempatLahir: responseData.data.tempat_lahir,
          TanggalLahir: responseData.data.tanggal_lahir,
          Agama: responseData.data.agama,
          Pendidikan: responseData.data.pendidikan,
          JenisPekerjaan: responseData.data.jenis_pekerjaan,
          StatusPernikahan: responseData.data.status_pernikahan,
          StatusHubunganDalamKeluarga:
            responseData.data.status_hubungan_dalam_keluarga,
          Kewarganegaraan: responseData.data.kewarganegaraan,
          NamaAyah: responseData.data.nama_ayah,
          NamaIbu: responseData.data.nama_ibu,
          GolonganDarah: responseData.data.golongan_darah,
          YatimPiatu: responseData.data.yatim_piatu,
          MemilikiUsaha: responseData.data.memiliki_usaha,
        };
        console.log(fetchedData);
        setDataRes(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (UpdateId.id) {
      fetchData();
    }
  }, [UpdateId.id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const token = getCookie("token");

    try {
      const CookieAuth: CookieAuth = { cookies: token };
      const AngParam: AnggotaKelCreate = {
        NomorKK: formData.get("nomor_kk"),
        NIK: formData.get("nik"),
        Nama: formData.get("nama"),
        JenisKelamin: formData.get("jenis_kelamin"),
        TempatLahir: formData.get("tempat_lahir"),
        // TanggalLahir: `${formData.get("year")}-${formData.get("month")}-${formData.get("day")}`,
        TanggalLahir: formData.get("tanggal_lahir"),
        Agama: formData.get("agama"),
        Pendidikan: formData.get("pendidikan"),
        JenisPekerjaan: formData.get("jenis_pekerjaan"),
        StatusPernikahan: formData.get("status_pernikahan"),
        StatusHubunganDalamKeluarga: formData.get("status_hubungan"),
        Kewarganegaraan: formData.get("kewarganegaraan"),
        NamaAyah: formData.get("nama_ayah"),
        NamaIbu: formData.get("nama_ibu"),
        GolonganDarah: formData.get("gol_darah"),
        YatimPiatu: formData.get("yatim_piatu"),
        MemilikiUsaha: formData.get("memiliki_usaha"),
      };

      const responseData = await UpdateAction(AngParam, CookieAuth, UpdateId.id);

      if (responseData.status >= 200 && responseData.status < 300) {
        // Handle successful response
        console.log("Data created successfully");
        window.location.replace("/dashboard/anggotakel");
        // Redirect or do any other necessary action
      } else {
        // Handle failed response
        console.log("Failed to create data");
        console.log(responseData);
        setCreateFailed(true);
      }
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  return (
    <>
      <div>
        {/* <NavbarMain /> */}
        {isLoading ? (
          <div className="loading-screen">
            <div className="progressBar"></div>
          </div>
        ) : (
          <>
            <form onSubmit={handleUpdate}>
              <NavbarMain />
              <div className="grid gap-6 mb-6 mt-4 md:grid-cols-2 p-2">
                <div className="flex flex-col">
                  <label
                    htmlFor="nomor_kk"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    NoKK
                  </label>
                  <input
                    type="text"
                    name="nomor_kk"
                    id="nomor_kk"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: 327692429"
                    defaultValue={dataRes?.NomorKK || ""}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nik"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Nik
                  </label>
                  <input
                    type="text"
                    id="nik"
                    name="nik"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: 32761293193819"
                    defaultValue={dataRes?.NIK || ""}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nama"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Deo Susilo"
                    defaultValue={dataRes?.Nama || ""}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="jenis_kelamin"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    defaultValue={dataRes?.JenisKelamin}
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L" selected={dataRes?.JenisKelamin === "L"}>
                      Laki-laki
                    </option>
                    <option value="P" selected={dataRes?.JenisKelamin === "P"}>
                      Perempuan
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="tempat_lahir"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Tempat Lahir
                  </label>
                  <input
                    id="tempat_lahir"
                    name="tempat_lahir"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Jakarta"
                    defaultValue={dataRes?.TempatLahir}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    id="birthdate"
                    name="tanggal_lahir"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="YYYY-MM-DD (Ex: 2003-08-17)"
                    pattern="\d{4}-\d{2}-\d{2}"
                    title="Format tanggal harus YYYY-MM-DD"
                    defaultValue={dataRes?.TanggalLahir}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="agama"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Agama
                  </label>
                  <input
                    type="agama"
                    id="agama"
                    name="agama"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Islam, Kristen, Hindu"
                    defaultValue={dataRes?.Agama}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="pendidikan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Pendidikan
                  </label>
                  <input
                    id="pendidikan"
                    name="pendidikan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: lulus SMA"
                    defaultValue={dataRes?.Pendidikan}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="confirm_password"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Jenis Pekerjaan
                  </label>
                  <input
                    id="jenis_pekerjaan"
                    name="jenis_pekerjaan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Pegawai Swasta"
                    defaultValue={dataRes?.JenisPekerjaan}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="status_pernikahan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Status Pernikahan
                  </label>
                  <select
                    id="status_pernikahan"
                    name="status_pernikahan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    defaultValue={dataRes?.StatusPernikahan}
                    required
                  >
                    <option value="">Pilih status pernikahan</option>
                    <option
                      value="Belum Kawin"
                      selected={dataRes?.StatusPernikahan === "Belum Kawin"}
                    >
                      Belum Kawin
                    </option>
                    <option
                      value="Kawin"
                      selected={dataRes?.StatusPernikahan === "Kawin"}
                    >
                      Kawin
                    </option>
                    <option
                      value="Cerai Hidup"
                      selected={dataRes?.StatusPernikahan === "Cerai Hidup"}
                    >
                      Cerai Hidup
                    </option>
                    <option
                      value="Cerai Mati"
                      selected={dataRes?.StatusPernikahan === "Cerai Mati"}
                    >
                      Cerai Mati
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="status_hubungan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Status Hubungan
                  </label>
                  <select
                    id="status_hubungan"
                    name="status_hubungan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    required
                    defaultValue={dataRes?.StatusHubunganDalamKeluarga}
                  >
                    <option value="">Pilih status hubungan</option>
                    <option value="Ayah" selected={dataRes?.StatusHubunganDalamKeluarga === "Ayah"}>Ayah</option>
                    <option value="Ibu" selected={dataRes?.StatusHubunganDalamKeluarga === "Ibu"}>Ibu</option>
                    <option value="Anak" selected={dataRes?.StatusHubunganDalamKeluarga === "Anak"}>Anak</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="kewarganegaraan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Kewarganegaraan
                  </label>
                  <input
                    id="kewarganegaraan"
                    name="kewarganegaraan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: WNI"
                    defaultValue={dataRes?.Kewarganegaraan}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nama_ayah"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Nama Ayah
                  </label>
                  <input
                    id="nama_ayah"
                    name="nama_ayah"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Budi"
                    defaultValue={dataRes?.NamaAyah}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nama_ibu"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Nama Ibu
                  </label>
                  <input
                    id="nama_ibu"
                    name="nama_ibu"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Rosa"
                    defaultValue={dataRes?.NamaIbu}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gol_darah"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Golongan Darah
                  </label>
                  <input
                    id="gol_darah"
                    name="gol_darah"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: B"
                    defaultValue={dataRes?.GolonganDarah}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="yatim_piatu"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Yatim Piatu
                  </label>
                  <input
                    id="yatim_piatu"
                    name="yatim_piatu"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Tidak or Iya or Yatim or Piatu"
                    defaultValue={dataRes?.YatimPiatu}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="memiliki_usaha"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Memiliki Usaha
                  </label>
                  <input
                    id="memiliki_usaha"
                    name="memiliki_usaha"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Usaha Kepala Sawit"
                    defaultValue={dataRes?.MemilikiUsaha}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="text-white bg-emerald-600 mt-7 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Update data
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
function setDataRes(fetchedData: AnggotaKelCreate) {
  throw new Error("Function not implemented.");
}
