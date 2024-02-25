export interface KepalaKelDetail {
  id: number;
  NomorKK: string;
  NamaKK: string;
  Alamat: string;
  Rt: string;
  Rw: string;
  DesaKelurahan: string;
  Kecamatan: string;
  Provinsi: string;
  LokasiObjekID: string;
  Kota: string;
}

export interface KepalaKelCreate {
  NomorKK: any;
  NamaKK: any;
  Alamat: any;
  Rt: any;
  Rw: any;
  DesaKelurahan: any;
  Kecamatan: any;
  Provinsi: any;
  LokasiObjekID: any;
  Kota: any;
}

export interface KepalaKelUpdate {
  NomorKK: any;
  NamaKK: any;
  Alamat: any;
  Rt: any;
  Rw: any;
  DesaKelurahan: any;
  Kecamatan: any;
  Provinsi: any;
  LokasiObjekID: any;
  Kota: any;
}

export interface KepalaKel {
  id: number;
  NomorKK: string;
  NamaKK: string;
  Alamat: string;
  Rt: string;
  Rw: string;
  DesaKelurahan: string;
  Kecamatan: string;
  Provinsi: string;
  Kota: string;
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
