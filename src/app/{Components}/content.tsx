import Image from "next/image";
import OfficeImg from "../../../public/office-workplace.svg";

export default function ContentMain() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:items-start md:space-x-8 m-6 md:m-12 lg:m-16 xl:m-24">
      <div className="mb-6 md:mb-0">
        <Image className="mx-auto md:mx-0" priority src={OfficeImg} width={400} alt={""} />
      </div>
      <div className="text-center md:text-left">
        <p className="font-bold uppercase text-6xl pt-10 text-gray-800">pendataan kependudukan</p>
        <p className="font-semibold pt-12 text-2xl ml-2">Application input data kependudukan</p>
      </div>
    </div>
  );
}
