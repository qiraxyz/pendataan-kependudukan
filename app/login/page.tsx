"use client";
import progressBar from "@/library/Loader/progressBar";
import { motion } from "framer-motion";

export default function Login() {
  const isLoading = progressBar();
  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="progressBar"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen text-m flex items-center text-black justify-center bg-stone-900"
        >
          <div className="bg-stone-800 p-10 rounded-lg shadow-md w-96 xl:w-1/3">
            <h2 className="text-2xl text-white font-semibold mb-4">
              Login Admin
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-gray-300"
                />
              </div>
              <div className="mb-4 pb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-red-900 text-white p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                Login
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
}
