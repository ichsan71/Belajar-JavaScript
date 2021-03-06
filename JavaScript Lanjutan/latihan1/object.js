/// Cara membuat Object{} (record) pada JS

// 1. Object Literal
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

// 2. function declaration
// function Mhs(nama, darah) {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.darah = darah;

//     // function didalam objek namanya method
//     mhs.makan = function(porsi) {
//         this.darah += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dude!`);
//     }
//     mhs.ribut = function (jam) {
//         this.darah -= jam;
//         console.log(`Halo ${this.nama}, selamat ribut dude!`);
//     }
//     return mhs;
// }

// let san = Mhs('san', 10);
// let sin = Mhs('sin', 20);

// 3. Constructor Function
// keyword new
function Mhs(nama, darah) {
    this.nama = nama;
    this.darah = darah;

    // function didalam objek namanya method
    this.makan = function(porsi) {
        this.darah += porsi;
        console.log(`Halo ${this.nama}, selamat makan dude!`);
    }
    this.ribut = function (jam) {
        this.darah -= jam;
        console.log(`Halo ${this.nama}, selamat ribut dude!`);
    }
}

let san = new Mhs('san', 10);
let sin = new Mhs('sin', 20);
