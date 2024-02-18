"use client";
import { useState } from "react";
import progressBar from "@/{lib}/loader";
import AuthHandler from "../{api-handlers}/auth";
import AuthUser from "@/{model}/auth.response";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export default function AuthInterface() {
  const isLoading = progressBar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const userData: AuthUser = {
        Email: email,
        Password: password,
      };
      const responseData = await AuthHandler(userData);

      if (responseData.status >= 200 && responseData.status < 300) {
        setCookie("token", responseData.data.token);
        console.log("Login berhasil cookies : " + getCookie('token'));
        window.location.replace("/dashboard");
      } else {
        console.log("Login gagal");
        console.log(responseData);
        setLoginFailed(true);
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="progressBar"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center min-h-screen pt-6 bg-gray-100 text-white">
        <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-zinc-900">
          <div className="text-center my-6">
            <h1 className="text-3xl font-semibold text-gray-500">Sign in</h1>
            <p className="text-gray-400">Sign in to access your account</p>
          </div>
          <div className="m-6">
            <form className="mb-4" onSubmit={handleSignIn}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className={`w-full px-3 py-2 placeholder-gray-300 bg-zinc-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
                    loginFailed ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-300">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className={`w-full px-3 py-2 placeholder-gray-300 bg-zinc-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
                    loginFailed ? "border-red-500" : ""
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginFailed && (
                <p className="text-red-500 text-sm mb-4">
                  Login failed. Please try again.
                </p>
              )}
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-emerald-500 rounded-md hover:bg-emerald-600 focus:outline-none duration-100 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
