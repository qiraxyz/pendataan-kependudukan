export interface LokasiObjek {
  id: number;
  IDJenisObjek: string;
  IdentitasObjek: string;
  Alamat: string;
  DesaKelurahan: string;
  Kecamatan: string;
  KotaKab: string;
  Provinsi: string;
  Latitude: number;
  Longitude: number;
  NamaObjek: string;
  Rt: string;
  Rw: string;
}
export interface LokasiObjekCreate {
    IDJenisObjek: any;
    IdentitasObjek: any;
    Alamat: any;
    DesaKelurahan: any;
    Kecamatan: any;
    KotaKab: any;
    Provinsi: any;
    Latitude: any;
    Longitude: any;
    NamaObjek: any;
    Rt: any;
    Rw: any;
  }
 
export interface CookieAuth {
    cookies: any;
}