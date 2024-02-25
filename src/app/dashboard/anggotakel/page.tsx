"use client";
import AnggotaKelTable from "@/app/{components}/dashboard/anggotakel/table";
import NavbarMain from "@/app/{components}/navbar";
import progressBar from "@/{lib}/loader";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnggotaKel() {
  const isLoading = progressBar();
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
            <NavbarMain />
            {/* <div className="flex justify-center mt-24">
          </div> */}
            <div className="flex justify-center mr-16 pt-4 pb-4">
              <Link href={"/dashboard/anggotakel/form/create"}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  type="button"
                  className="text-white bg-emerald-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Tambah data
                </motion.button>
              </Link>
            </div>
            <AnggotaKelTable />
          </>
        )}
      </div>
    </>
  );
}
