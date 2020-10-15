//alert('Hello, World!');
//alert('Nama saya santoryuu shishi shosonto');

var nama = prompt('Masukan Nama anda :');
//alert('Hai,'+nama);

/* Mencoba pop up box mengunakan pengkondisisan */
//var cuk = confirm('Kamu yakin??');
//if (cuk === true) {
   //alert('user menekan OK!');
//} else {
    //alert('user menekan CANCEL!');
//}

/* Mencoba pop up box mengunakan pengulangan */
alert('Selamat datang!');
var lagi = true;

while (lagi) {
    alert('Hai,' + nama);

    lagi = confirm('coba lagi?');

}
alert('TQ' + nama);
