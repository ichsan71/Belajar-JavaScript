var item = prompt('Masukan nama makanan/minuman : \n (cth : nasi, daging, susu, pizza, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan/minuman ini sehat');
        break;
    case 'pizza':
    case 'softdrink':
        alert('makanan/minuman ini tidak sehat');
        break;
    default:
        alert('anda salah memasukan makanan/minuman');
        break;
}