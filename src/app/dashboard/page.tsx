"use client";
import progressBar from "@/{lib}/loader";
import NavbarMain from "../{components}/navbar";
import DashboardContent from "../{components}/dashboard/kependudukan";

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
            <DashboardContent />
          </>
        )}
      </div>
    </>
  );
}
