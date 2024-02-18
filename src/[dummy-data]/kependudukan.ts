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
  },
  {
    id: 2,
    ImageFrame: KepalaKel,
    title: "Kepala Keluarga",
    description: "data data kepala keluarga",
  },
  {
    id: 3,
    ImageFrame: LokasiObject,
    title: "Lokasi Object",
    description: "data lokasi object anggota keluarga",
  },
  {
    id: 4,
    ImageFrame: PPKS,
    title: "Data PPKS",
    description: "data PPKS dari setiap keluarga",
  },
  {
    id: 5,
    ImageFrame: PSKS,
    title: "Data PSKS",
    description: "data PSKS dari setiap keluarga",
  },
  {
    id: 6,
    ImageFrame: BANSOS,
    title: "Jenis Bansos",
    description: "data Jenis Bantuan Sosial setiap anggota keluarga",
  },
  { id: 7, 
    ImageFrame: wilayah, 
    title: "Data Wilayah", 
    description: "data wilayah" },
];
