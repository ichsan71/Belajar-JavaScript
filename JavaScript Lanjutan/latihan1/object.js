/// Cara membuat Object{} (record) pada JS

// 1. Object Literal (TIDAK EFEKTIF JIKA OBJECTNYA > 1)
// let mahasiswa1 = {
//     nama: 'san',
//     darah: 10,
//     // function didalam objek namanya method
//     makan: function(porsi) {
//         this.darah = this.darah + porsi;
//         console.log(`Selamat Makan ${this.nama}, dude!`);
//         return;
//     }
// }
// let mahasiswa2 = {
//     nama: 'sin',
//     darah: 20,
//     // function didalam objek namanya method
//     makan: function(porsi) {
//         this.darah = this.darah + porsi;
//         console.log(`Selamat Makan ${this.nama}, dude!`);
//         return;
//     }
// }

// 2. function declaration ()

// pisahan dari object mahasiswa
// const methodMhs = {
//     // function didalam objek namanya method
//     makan: function(porsi) {
//         this.darah += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dude!`);
//     },
//     ribut: function (jam) {
//         this.darah -= jam;
//         console.log(`Halo ${this.nama}, selamat ribut dude!`);
//     },
//     tidur: function (jam) {
//         this.darah += jam * 2;
//         console.log(`Halo ${this.nama}, oyasumi dude!`);
//     }
// }
// function Mhs(nama, darah) {
//     let mhs = Object.create(methodMhs);
//     mhs.nama = nama;
//     mhs.darah = darah;
//     return mhs;
// }

// let san = Mhs('san', 10);
// let sin = Mhs('sin', 20);

// 3. Constructor Function
// keyword new

// function Mhs(nama, darah) {
//     this.nama = nama;
//     this.darah = darah;

//     // function didalam objek namanya method
//     this.makan = function(porsi) {
//         this.darah += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dude!`);
//     }
//     this.ribut = function (jam) {
//         this.darah -= jam;
//         console.log(`Halo ${this.nama}, selamat ribut dude!`);
//     }
// }
// let san = new Mhs('san', 10);
// let sin = new Mhs('sin', 20);


/// 4. Constructor function menggunakan prototype (rekomen)
// function Mhs(nama, darah) {
//     this.nama = nama;
//     this.darah = darah;
    
// } 
// Mhs.prototype.makan = function(porsi) {
//     this.darah += porsi;
//     return `Halo ${this.nama}, selamat makan dude!`;
// }
// Mhs.prototype.ribut = function(jam) {
//     this.darah -= jam;
//     return `Halo ${this.nama}, selamat ribut dude!`;
// }
// Mhs.prototype.tidur = function (jam) {
//     this.darah += jam * 2;
//     console.log(`Halo ${this.nama}, oyasumi dude!`);
// }

// let san = new Mhs('san', 10);

/// 5. prototype versi class
// class Mhs{
//     constructor(nama, darah) {
//         this.nama = nama;
//         this.darah =darah;
//     }
//     makan(porsi) {
//         this.darah += porsi;
//         return `Halo ${this.nama}, selamat makan dude!`;
//     }
//     ribut(jam) {
//         this.darah -= jam;
//         return `Halo ${this.nama}, selamat ribut dude!`;
//     }
//     tidur(jam) {
//         this.darah += jam * 2;
//         console.log(`Halo ${this.nama}, oyasumi dude!`);
//     }
// }
// let san = new Mhs('san', 10);