import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { Param, CookieAuth, AnggotaKel } from "@/{model}/anggotakel.response";
import { GetAnggotaKelHandler } from "@/app/{api-handlers}/anggotakel/anggotakel";
import Link from 'next/link';
import { DeleteAnggota } from "@/app/{api-handlers}/anggotakel/delete";

export default function AnggotaKelTable() {
  const [dataAnggota, setDataAnggota] = useState<AnggotaKel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token");
        const set: Param = { set: "push" };
        const CookieAuth: CookieAuth = { cookies: token };
        const responseData = await GetAnggotaKelHandler(set, CookieAuth);
        const transformedData = responseData.data.map(
          (item: {
            id: any;
            nomor_kk: any;
            nik: any;
            nama: any;
            jenis_kelamin: any;
            agama: any;
            jenis_pekerjaan: any;
          }) => ({
            id: item.id,
            NoKK: item.nomor_kk,
            nik: item.nik,
            nama: item.nama,
            JenisKelamin: item.jenis_kelamin,
            Agama: item.agama,
            JenisPekerjaan: item.jenis_pekerjaan,
          })
        );

        setDataAnggota(transformedData);
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
    const DelData = DeleteAnggota(set, CookieAuth, id);

    // start delete data
    console.log('berhasil delete')
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
            Nama
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            NoKK
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            nik
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Agama
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            JenisKelamin
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            JenisPekerjaan
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
        {dataAnggota.length > 0 ? (
          dataAnggota.map((anggota) => (
            <tr key={anggota.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap">{anggota.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{anggota.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap">{anggota.NoKK}</td>
              <td className="px-6 py-4 whitespace-nowrap">{anggota.nik}</td>
              <td className="px-6 py-4 whitespace-nowrap">{anggota.Agama}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {anggota.JenisKelamin}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {anggota.JenisPekerjaan}
              </td>
              <td>
                <Link href={`/dashboard/anggotakel/form/update/${anggota.id}`}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Update
                  </button>
                </Link>
                {/* <Link href={`/dashboard/anggotakel/form/delete/${anggota.id}`}> */}
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900"
                  onClick={() => onDelete(anggota.id)}
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
