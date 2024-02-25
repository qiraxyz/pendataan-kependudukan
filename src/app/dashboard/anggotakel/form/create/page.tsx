"use client";
import NavbarMain from "@/app/{components}/navbar";
import { AnggotaKelCreate, AnggotaKelDetail, Param, CookieAuth, AnggotaKelUpdate } from "@/{model}/anggotakel.response";
import progressBar from "@/{lib}/loader";
import { CreateAnggota } from "@/app/{api-handlers}/anggotakel/create";
import { useState } from "react";
import { getCookie } from "cookies-next";

export default function CreateAnggotaKel() {
  const isLoading = progressBar();

  const [CreateFailed, setCreateFailed] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const token = getCookie("token");

    try {
      const CookieAuth: CookieAuth = { cookies: token };
      const AngParam: AnggotaKelUpdate = {
        NomorKK: formData.get("nomor_kk"),
        NIK: formData.get("nik"),
        Nama: formData.get("nama"),
        JenisKelamin: formData.get("jenis_kelamin"),
        TempatLahir: formData.get("tempat_lahir"),
        TanggalLahir: `${formData.get("year")}-${formData.get("month")}-${formData.get("day")}`,
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

      const responseData = await CreateAnggota(CookieAuth, AngParam);

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
          <form onSubmit={handleCreate}>
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
                  required
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
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
                <div className="flex space-x-2">
                  <input
                    type="number"
                    id="year"
                    name="year"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                    placeholder="YY (Ex: 2003)"
                    min="00"
                    max="9999"
                    required
                  />
                  <span>/</span>
                  <input
                    type="number"
                    id="month"
                    name="month"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                    placeholder="MM (Ex: 08)"
                    min="1"
                    max="12"
                    required
                  />
                  <span>/</span>
                  <input
                    type="number"
                    id="day"
                    name="day"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                    placeholder="DD (Ex: 17)"
                    min="1"
                    max="31"
                    required
                  />
                </div>
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
                  required
                >
                  <option value="">Pilih status pernikahan</option>
                  <option value="Belum Kawin">Belum Kawin</option>
                  <option value="Kawin">Kawin</option>
                  <option value="Cerai Hidup">Cerai Hidup</option>
                  <option value="Cerai Mati">Cerai Mati</option>
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
                >
                  <option value="">Pilih status hubungan</option>
                  <option value="Ayah">Ayah</option>
                  <option value="Ibu">Ibu</option>
                  <option value="Anak">Anak</option>
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
                  required
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="text-white bg-emerald-600 mt-7 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Create data
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
