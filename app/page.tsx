"use client";
import { useEffect, useState } from "react";
import progressBar from "@/library/Loader/progressBar";
import Navbar from "@/library/Component/navbar";

export default function Home() {
  const isLoading = progressBar();
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
