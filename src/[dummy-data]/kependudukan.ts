import KependudukanList from "@/{model}/kependudukan.response";
import KepalaKel from "@/../public/kepala_kel.svg";
import AnggotaKel from "@/../public/anggota_kel.svg";
import LokasiObject from "@/../public/lokasi_objek.svg";
import PPKS from "@/../public/ppks.svg";
import PSKS from "@/../public/psks.svg";
import BANSOS from "@/../public/bansos.jpg";
import wilayah from "@/../public/wilayah.svg";

export const dummyData: KependudukanList[] = [
  {
    id: 1,
    ImageFrame: AnggotaKel,
    title: "Anggota Keluarga",
    description: "data data anggota keluarga",
    detailURI: "/dashboard/anggotakel",
  },
  {
    id: 2,
    ImageFrame: KepalaKel,
    title: "Kepala Keluarga",
    description: "data data kepala keluarga",
    detailURI: "/dashboard/kepalakel",
  },
  {
    id: 3,
    ImageFrame: LokasiObject,
    title: "Lokasi Object",
    description: "data lokasi object anggota keluarga",
    detailURI: "/dashboard/lokasiobject",
  },
  {
    id: 4,
    ImageFrame: PPKS,
    title: "Data PPKS",
    description: "data PPKS dari setiap keluarga",
    detailURI: "/dashboard/ppks",
  },
  {
    id: 5,
    ImageFrame: PSKS,
    title: "Data PSKS",
    description: "data PSKS dari setiap keluarga",
    detailURI: "/dashboard/psks",
  },
  {
    id: 6,
    ImageFrame: BANSOS,
    title: "Jenis Bansos",
    description: "data Jenis Bantuan Sosial setiap anggota keluarga",
    detailURI: "/dashboard/bansos",
  },
  {
    id: 7,
    ImageFrame: wilayah,
    title: "Data Wilayah",
    description: "data wilayah",
    detailURI: "/dashboard/wilayah",
  },
];
