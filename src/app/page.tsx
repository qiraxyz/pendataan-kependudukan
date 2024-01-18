"use client";
import progressBar from "@/lib/loader";
import Head from "next/head";
// import NavbarMain from "./{Components}/navbar";

export default function Home() {
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
          <></>
        )}
      </div>
    </>
  );
}
