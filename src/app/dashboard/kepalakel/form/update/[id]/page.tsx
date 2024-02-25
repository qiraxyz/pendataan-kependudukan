"use client";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import progressBar from "@/{lib}/loader";
import { KepalaKel, ParamUpdate, CookieAuth, Param, KepalaKelCreate } from "@/{model}/kepalakel.response";
import { UpdateAction } from "@/app/{api-handlers}/kepalakel/update.ac";
import { GetKepalaKelById } from "@/app/{api-handlers}/kepalakel/update";
import { useParams } from "next/navigation";
import NavbarMain from "@/app/{components}/navbar";

export default function UpdateKepala() {
  const [CreateFailed, setCreateFailed] = useState(false);
  const isLoading = progressBar();
  const params = useParams();
  const UpdateId: ParamUpdate = { id: params.id };
  const [dataRes, setDataRes] = useState<KepalaKelCreate | null>(null);

  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token");
        const set: Param = { set: "push" };
        const CookieAuth: CookieAuth = { cookies: token };
        const responseData = await GetKepalaKelById(
          set,
          CookieAuth,
          UpdateId.id
        );
        console.log(responseData);
        const fetchedData: KepalaKelCreate = {
          NomorKK: responseData.data.nomor_kk,
          NamaKK: responseData.data.nama_kk,
          Alamat: responseData.data.alamat,
          Rt: responseData.data.rt,
          Rw: responseData.data.rw,
          DesaKelurahan: responseData.data.desa_kelurahan,
          Kecamatan: responseData.data.kecamatan,
          Provinsi: responseData.data.provinsi,
          LokasiObjekID: responseData.data.id_lokasi_objek,
          Kota: responseData.data.kota,
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
      const KelParam: KepalaKelCreate = {
        NomorKK: formData.get("nomor_kk"),
        NamaKK: formData.get("nama_kk"),
        Alamat: formData.get("alamat"),
        Rt: formData.get("rt"),
        Rw: formData.get("rw"),
        DesaKelurahan: formData.get("desa_kelurahan"),
        Kecamatan: formData.get("kecamatan"),
        Provinsi: formData.get("provinsi"),
        LokasiObjekID: formData.get("id_lokasi_objek"),
        Kota: formData.get("kota"),
      };

      const responseData = await UpdateAction(KelParam, CookieAuth, UpdateId.id);

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
                    defaultValue={dataRes?.NomorKK}
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
                    defaultValue={dataRes?.NamaKK}
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
                    defaultValue={dataRes?.Alamat}
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
                    defaultValue={dataRes?.Kecamatan}
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
                    defaultValue={dataRes?.Rt}
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
                    defaultValue={dataRes?.Rw}
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
                    defaultValue={dataRes?.DesaKelurahan}
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
                    defaultValue={dataRes?.Provinsi}
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
                    defaultValue={dataRes?.LokasiObjekID}
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
                    defaultValue={dataRes?.Kota}
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