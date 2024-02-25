import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { Param, CookieAuth, KepalaKel } from "@/{model}/kepalakel.response";
import { GetKepalaKelHandler } from "@/app/{api-handlers}/kepalakel/kepalakel";
import Link from "next/link";
import { DeleteKepala } from "@/app/{api-handlers}/kepalakel/delete";

export default function KepalaKelTable() {
  const [dataKepala, setDataKepala] = useState<KepalaKel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token");
        const set: Param = { set: "push" };
        const CookieAuth: CookieAuth = { cookies: token };
        const responseData = await GetKepalaKelHandler(set, CookieAuth);
        const transformedData = responseData.data.map(
          (item: {
            id: any;
            nomor_kk: any;
            nama_kk: any;
            alamat: any;
            rt: any;
            rw: any;
            desa_kelurahan: any;
            kecamatan: any;
            kota: any;
            provinsi: any;
          }) => ({
            id: item.id,
            NomorKK: item.nomor_kk,
            NamaKK: item.nama_kk,
            Alamat: item.alamat,
            Rt: item.rt,
            Rw: item.rw,
            DesaKelurahan: item.desa_kelurahan,
            Kecamatan: item.kecamatan,
            Provinsi: item.provinsi,
            Kota: item.kota,
          })
        );

        setDataKepala(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []);

  function onDelete(id: any) {
    const set: Param = { set: "push" };
    const token = getCookie("token");
    const CookieAuth: CookieAuth = { cookies: token };
    const DelData = DeleteKepala(set, CookieAuth, id);

    // start delete data
    console.log("berhasil delete");
    return DelData;
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nomor KK
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nama KK
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Alamat
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Rt
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Rw
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Desa Kelurahan
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Kecamatan
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Provinsi
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Kota
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {dataKepala.length > 0 ? (
          dataKepala.map((kepala) => (
            <tr key={kepala.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap">{kepala.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.NomorKK}</td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.NamaKK}</td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.Alamat}</td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.Rt}</td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.Rw}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {kepala.DesaKelurahan}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {kepala.Kecamatan}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {kepala.Provinsi}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{kepala.Kota}</td>
              <td>
                <Link href={`/dashboard/kepalakel/form/update/${kepala.id}`}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Update
                  </button>
                </Link>
                {/* <Link href={`/dashboard/kepalakel/form/delete/${kepala.id}`}> */}
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900"
                  onClick={() => onDelete(kepala.id)}
                >
                  Delete
                </button>
                {/* </Link> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap" colSpan={7}>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
