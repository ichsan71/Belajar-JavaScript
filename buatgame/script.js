var tanya = true;
while (tanya) {
//Menangkap pilihan Player
var p = prompt('Masukan Pilihan :(gunting,batu,kertas) : ');

//menangkap pilihan computer
//membangkitkan bilangan random
var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gunting';
    } 
    else if (comp >= 0.34 && comp < 0.67) {
        comp = 'kertas';
    }
    else {
        comp = 'batu';
    }

//menentukan rules
var hasil = ''
    if (p == comp) {
        hasil ='SERI!';
    }
    else if (p == 'gunting') {
        if (comp == 'kertas') {
            hasil ='MENANG!';
        }
        else{
            hasil = 'KALAH!';
        }
    }
    else if (p == 'kertas') {
        if (comp == 'batu') {
            hasil ='MENANG!';
        }
        else{
            hasil ='KALAH!';
        }
    }
    else if (p == 'batu') {
        if (comp == 'kertas') {
            hasil ='KALAH!';
        } else {
            hasil ='MENANG!';
        }
    }
    else{
        hasil = 'Anda Memasukan Pilihan Yang salah!';
    }

//Tampilkan Hasilnya
    alert('Kamu memilih : '+ p + ' dan Komputer Memilih : '+ comp + ' Hasilnya adalah : '+ hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain');