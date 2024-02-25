export default function LokasiObjekForm() {
  return (
    <>
      <div className="grid gap-6 mb-6 mt-4 md:grid-cols-2 p-2">
        <div className="flex flex-col">
          <label
            htmlFor="id_jenis_objek"
            className="mb-2 text-sm font-medium text-black"
          >
            Jenis Objek
          </label>
          <select
            id="id_jenis_objek"
            name="id_jenis_objek"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          >
            <option value="">Pilih Jenis Objek</option>
            <option value="1">Fasilitas tempat tinggal</option>
            <option value="2">Fasilitas ibadah</option>
            <option value="3">Fasilitas kesehatan</option>
            <option value="4">Fasilitas pendidikan</option>
            <option value="5">Fasilitas rekreasi</option>
            <option value="6">Fasilitas keamanan</option>
            <option value="7">Fasilitas olahraga</option>
            <option value="8">Fasilitas perbelanjaan</option>
            <option value="9">Fasilitas bermain</option>
            <option value="10">Fasilitas transportasi</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="nama_objek"
            className="mb-2 text-sm font-medium text-black"
          >
            Nama Objek
          </label>
          <input
            type="text"
            id="nama_objek"
            name="nama_objek"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="ex: Rumah, Apart"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="identitas_objek"
            className="mb-2 text-sm font-medium text-black"
          >
            Identitas Objek
          </label>
          <select
            id="identitas_objek"
            name="identitas_objek"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          >
            <option value="">Pilih Identitas Objek</option>
            <option value="1">Rumah tinggal</option>
            <option value="2">Rumah susun</option>
            <option value="3">Apartemen</option>
            <option value="4">Masjid</option>
            <option value="5">Gereja</option>
            <option value="6">Pura</option>
            <option value="7">Puskesmas</option>
            <option value="8">Rumah sakit</option>
            <option value="9">Pohon</option>
            <option value="10">TPS</option>
            <option value="11">Septictank komunal</option>
            <option value="12">Bank</option>
            <option value="13">Bank sampah</option>
            <option value="14">Koperasi</option>
            <option value="15">Pasar modern</option>
            <option value="16">UMKM</option>
            <option value="17">Klinik</option>
            <option value="18">PAUD</option>
            <option value="19">SD</option>
            <option value="20">SMP</option>
            <option value="21">SMA</option>
            <option value="22">Perguruan Tinggi</option>
            <option value="23">Cafe</option>
            <option value="24">Restoran</option>
            <option value="25">CCTV</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="kecamatan"
            className="mb-2 text-sm font-medium text-black"
          >
            Kecamatan
          </label>
          <input
            id="kecamatan"
            name="kecamatan"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="ex: Bojong gede"
            required
          />
        </div>
        <div>
          <label
            htmlFor="birthdate"
            className="block mb-2 text-sm font-medium text-black"
          >
            Rt / Rw
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="rt"
              name="rt"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
              placeholder="Ex: 04"
              min="00"
              max="9999"
              required
            />
            <span>/</span>
            <input
              type="number"
              id="rw"
              name="rw"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
              placeholder="Ex: 06"
              min="1"
              max="1200"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="desa_kelurahan"
            className="mb-2 text-sm font-medium text-black"
          >
            Desa Kelurahan
          </label>
          <input
            type="text"
            id="desa_kelurahan"
            name="desa_kelurahan"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="ex: Kelurahan/Desa Sukmajaya"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="provinsi"
            className="mb-2 text-sm font-medium text-black"
          >
            Provinsi
          </label>
          <input
            id="provinsi"
            name="provinsi"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Ex: Jawa Barat"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="confirm_password"
            className="mb-2 text-sm font-medium text-black"
          >
            Latitude
          </label>
          <input
            id="latitude"
            name="latitude"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Ex: 1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="longtitude"
            className="mb-2 text-sm font-medium text-black"
          >
            Longtitude
          </label>
          <input
            id="longtitude"
            name="longtitude"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Ex: Kota Depok"
            required
          />
        </div>
      </div>
    </>
  );
}
