'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { deleteCookie, getCookie } from "cookies-next";

export default function NavbarMain() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Logout() {
    deleteCookie('token');
    window.location.replace('/auth');
  }

  useEffect(() => {
    const checkToken = () => {
      const token = getCookie("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkToken();
  }, []);

  return (
    <>
      <Link href={"/auth"}>
        <motion.div className="flex items-center justify-end flex-wrap bg-zinc-900 p-6 text-white">
          {isLoggedIn && (
            <>
              <p className="mr-2 p-2 pr-4 pl-4 hover:bg-zinc-800 rounded-lg">Home</p>
              <p className="mr-2 p-2 pr-4 pl-4 hover:bg-zinc-800 rounded-lg">Datasource</p>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={Logout}
                className="focus:outline-none font-bold text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 rounded-lg text-sm px-8 py-2.5"
              >
                Logout
              </motion.button>
            </>
          )}

          {!isLoggedIn && (
            <>
              <p className="mr-2 p-2 pr-4 pl-4 hover:bg-zinc-800 rounded-lg">Home</p>
              <p className="mr-8 p-2 pr-4 pl-4 hover:bg-zinc-800 rounded-lg">Datasource</p>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                type="button"
                className="focus:outline-none font-bold text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 rounded-lg text-sm px-8 py-2.5"
              >
                Login
              </motion.button>
            </>
          )}
        </motion.div>
      </Link>
    </>
  );
}
