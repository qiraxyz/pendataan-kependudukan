"use client";
import NavbarMain from "@/app/{components}/navbar";
import { KepalaKelCreate, KepalaKelDetail, Param, CookieAuth, KepalaKelUpdate,
} from "@/{model}/kepalakel.response";
import progressBar from "@/{lib}/loader";
import { CreateKepala } from "@/app/{api-handlers}/kepalakel/create";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { LokasiObjek, LokasiObjekCreate } from "@/{model}/lokasi_objek.response";
import { CreateLokasiObjek } from "@/app/{api-handlers}/lokasi_objek/create";
import LokasiObjekForm from "@/app/{components}/dashboard/kepalakel/form-lokasiobjek";

export default function CreateKepalaKel() {
  const isLoading = progressBar();
  const [CreateFailed, setCreateFailed] = useState(false);

  
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const token = getCookie("token");

    try {
      const CookieAuth: CookieAuth = { cookies: token };

      const LokasiParam: LokasiObjekCreate = {
        IDJenisObjek: formData.get("id_jenis_objek"),
        IdentitasObjek: formData.get("identitas_objek"),
        Alamat: formData.get("alamat"),
        DesaKelurahan: formData.get("desa_kelurahan"),
        Kecamatan: formData.get("kecamatan"),
        KotaKab: formData.get("kota_kab"),
        Provinsi: formData.get("provinsi"),
        Latitude: formData.get("latitude"),
        Longitude: formData.get("longtitude"),
        NamaObjek: formData.get("nama_objek"),
        Rt: formData.get("rt"),
        Rw: formData.get("rw"),
      }
      const responseDataLokasi = await CreateLokasiObjek(CookieAuth, LokasiParam)

      if (responseDataLokasi.status >= 200 && responseDataLokasi.status < 300) {
        // Handle successful response
        console.log("Data created successfully with id" + responseDataLokasi.data.id);
        // window.location.replace("/dashboard/kepalakel")
        // Redirect or do any other necessary action
      } else {
        // Handle failed response
        console.log("Failed to create data");
        console.log(responseDataLokasi);
        setCreateFailed(true);
      }

      // Kepala kel
      const KepParam: KepalaKelUpdate = {
        NomorKK: formData.get("nomor_kk"),
        NamaKK: formData.get("nama_kk"),
        Alamat: formData.get("alamat"),
        Rt: formData.get("rt"),
        Rw: formData.get("rw"),
        DesaKelurahan: formData.get("desa_kelurahan"),
        Kecamatan: formData.get("kecamatan"),
        Provinsi: formData.get("provinsi"),
        LokasiObjekID: responseDataLokasi.data.ld,
        Kota: formData.get("kota"),
      };

      const responseData = await CreateKepala(CookieAuth, KepParam);

      if (responseData.status >= 200 && responseData.status < 300) {
        // Handle successful response
        console.log("Data created successfully");
        window.location.replace("/dashboard/kepalakel");
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
              <LokasiObjekForm  />
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
                    htmlFor="nama_kk"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Nama KK
                  </label>
                  <input
                    type="text"
                    id="nama_kk"
                    name="nama_kk"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Bambang trisno"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="alamat"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Jl Susilo"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="kecamatan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Kecamatan
                  </label>
                  <input
                    id="kecamatan"
                    name="kecamatan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Bojong gede"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Rt / Rw
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      id="rt"
                      name="rt"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                      placeholder="Ex: 04"
                      min="00"
                      max="9999"
                      required
                    />
                    <span>/</span>
                    <input
                      type="number"
                      id="rw"
                      name="rw"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                      placeholder="Ex: 06"
                      min="1"
                      max="1200"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="desa_kelurahan"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Desa Kelurahan
                  </label>
                  <input
                    type="text"
                    id="desa_kelurahan"
                    name="desa_kelurahan"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="ex: Kelurahan/Desa Sukmajaya"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="provinsi"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Provinsi
                  </label>
                  <input
                    id="provinsi"
                    name="provinsi"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Jawa Barat"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="confirm_password"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Lokasi Objek Id
                  </label>
                  <input
                    id="id_lokasi_objek"
                    name="id_lokasi_objek"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: 1"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="kota"
                    className="mb-2 text-sm font-medium text-black"
                  >
                    Kota
                  </label>
                  <input
                    id="kota"
                    name="kota"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="Ex: Kota Depok"
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
