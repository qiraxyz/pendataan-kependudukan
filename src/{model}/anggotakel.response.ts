export interface AnggotaKelDetail {
  id: number;
  NoKK: string;
  nik: string;
  nama: string;
  JenisKelamin: string;
  TempatLahir: string;
  TanggalLahir: string;
  Agama: string;
  pendidikan: string;
  JenisPekerjaan: string;
  StatusPernikahan: string;
  StatusHubKeluarga: string;
  Kewarganegaraan: string;
  NamaAyah: string;
  NamaIbu: string;
  GolDarah: string;
  YatimPiatu: string;
  MemilikiUsaha: string;
  pic: string;
}

export interface AnggotaKelCreate {
  NomorKK: any;
  NIK: any;
  Nama: any;
  JenisKelamin: any;
  TempatLahir: any;
  TanggalLahir: any;
  Agama: any;
  Pendidikan: any;
  JenisPekerjaan: any;
  StatusPernikahan: any;
  StatusHubunganDalamKeluarga: any;
  Kewarganegaraan: any;
  NamaAyah: any;
  NamaIbu: any;
  GolonganDarah: any;
  YatimPiatu: any;
  MemilikiUsaha: any;
}
export interface AnggotaKelUpdate {
  NomorKK: any;
  NIK: any;
  Nama: any;
  JenisKelamin: any;
  TempatLahir: any;
  TanggalLahir: any;
  Agama: any;
  Pendidikan: any;
  JenisPekerjaan: any;
  StatusPernikahan: any;
  StatusHubunganDalamKeluarga: any;
  Kewarganegaraan: any;
  NamaAyah: any;
  NamaIbu: any;
  GolonganDarah: any;
  YatimPiatu: any;
  MemilikiUsaha: any;
}


export interface AnggotaKel {
  id: number;
  NoKK: string;
  nik: string;
  nama: string;
  JenisKelamin: string;
  Agama: string;
  pendidikan: string;
  JenisPekerjaan: string;
}

export interface Param {
  set: string;
}
export interface ParamUpdate {
  id: any;
}
export interface CookieAuth {
  cookies: any;
}
