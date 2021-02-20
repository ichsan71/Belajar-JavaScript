// Membuat object

// object literal
var mhs = {
    nama : "san",
    umur :  31,
    ip : [3.00, 2.80, 3.20],
    alamat : {
        jalan : "Jl. Mandorsena",
        kota : "bogor",
        provinsi : "Jawa Barat"
    }
}

// function declaration
function Mhs(nama, nim, email, jurusan) {
    var mhs = {}
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
 var mhs3 = Mhs('ichsan', 10120210, 'ichsankamil704@gmail.com',
                 'Informatika');

// Constructor (diawal fungsi huruf kapital)
function Mahasiswa(nama, nim, kelas, jurusan) {
     this.nama = nama;
     this.nim = nim;
     this.kelas = kelas;
     this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('Nama', 10120210, 'IF-6', 'Informatika');

