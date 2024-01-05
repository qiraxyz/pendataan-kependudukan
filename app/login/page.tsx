"use client";
import { useState, useEffect } from "react";
import progressBar from "@/library/Loader/progressBar";
import { motion } from "framer-motion";
import HandlerLoginFetcher from "@/HandlerApi/LoginHandler";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "@/Model/login.model";

export default function Login() {
  const router = useRouter();
  const progressBarLoading = progressBar();

  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
    shouldFetch: false,
  });
  const [isClient, setIsClient] = useState(false);

  const { data, isFetching, isError } = HandlerLoginFetcher(
    credentials
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (data && !localStorage.getItem("jwt")) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        shouldFetch: false,
      }));
      console.log(data.data.token);
      localStorage.setItem("jwtToken", data.data.token);
      router.replace("/");
    } else if (localStorage.getItem("jwtToken")) {
      console.log("data already exist");
      router.replace("/");
    }
  }, [data, isClient]);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      shouldFetch: true,
    }));

    setTimeout(() => {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        shouldFetch: false,
      }));
    }, 1000);
  };

  if (isClient && localStorage.getItem("jwtToken")) {
    router.replace("/");
    return null;
  }

  return (
    <>
      {progressBarLoading && !isFetching ? (
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
            <form onSubmit={handleLogin}>
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
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials((prevCredentials) => ({
                      ...prevCredentials,
                      username: e.target.value,
                    }))
                  }
                  placeholder="username"
                  autoComplete="off"
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
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prevCredentials) => ({
                      ...prevCredentials,
                      password: e.target.value,
                    }))
                  }
                  placeholder="password"
                  autoComplete="off"
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

