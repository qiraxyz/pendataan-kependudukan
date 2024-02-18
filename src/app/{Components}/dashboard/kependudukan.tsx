import React from "react";
import KependudukanList from "@/{model}/kependudukan.response";
import Image from "next/image";
import { motion } from "framer-motion";
import { dummyData } from "@/[dummy-data]/kependudukan";

export default function DashboardContent() {
  const Card = ({ ImageFrame, title, description }: KependudukanList) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 m-8 flex flex-col items-center">
        <Image src={ImageFrame} alt={""} width={200} height={200} className=""/>
        <h2 className="text-xl font-semibold mt-4 text-center overflow-hidden overflow-ellipsis">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 text-center overflow-hidden overflow-ellipsis">
          {description}
        </p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          type="button"
          className="mt-4 focus:outline-none font-bold text-white bg-emerald-700
           hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 rounded-lg text-sm px-8 py-2.5"
        >
          Details
        </motion.button>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center">
      {dummyData.map((data) => (
        <Card
          key={data.id}
          ImageFrame={data.ImageFrame}
          title={data.title}
          description={data.description}
          id={0}
        />
      ))}
    </div>
  );
}
