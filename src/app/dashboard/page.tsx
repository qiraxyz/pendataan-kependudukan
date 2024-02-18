"use client";
import progressBar from "@/lib/loader";
import NavbarMain from "../{components}/navbar";

export default function Dashboard() {
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
          </>
        )}
      </div>
    </>
  );
}
