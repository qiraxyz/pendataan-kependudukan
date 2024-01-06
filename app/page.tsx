"use client";
import { useEffect, useState } from "react";
import progressBar from "@/library/Loader/progressBar";
import Navbar from "@/library/Component/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isLoading = progressBar();

  useEffect(() => {
    // if (localStorage.getItem("jwtToken")) {
    //   router.replace('/')
    // } else {
    //   router.replace('/login')
    // }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <div className="progressBar"></div>
        </div>
      ) : (
        <>
          <Navbar />
        </>
      )}
    </div>
  );
}
