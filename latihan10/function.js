/*function kubus(sisi1,sisi2) {
    var hasil,volumeA,volumeB;

    volumeA=Math.pow(sisi1,3);
    volumeB=Math.pow(sisi2,3);
    
    hasil=volumeA+volumeB;
    return hasil;   
}

function tambah(a,b) {
    return a+b;    
}*/

//memanggil Function Biasa
//alert(kubus(8,8));
//alert(kubus(10,15));

//memangil function dengan input user
//var a =parseInt(prompt('Masukan Nilai 1 :'));
//var b =parseInt(prompt('Masukan Nilai 2 :'));
//alert(kubus(a,b));

//memangil function di dalam function
//var hasil = kubus(tambah(7,3),tambah(8,2));
//alert(hasil);

//memanggil function dengan arguments
/*function tambah() {
    var hasil= 0;
    for ( var i = 0; i < arguments.length; i++) {
            hasil += arguments[i];
    }
    return hasil;    
}
alert(tambah(1,2,3))*/

var array = [3,5,4,1,2];
var arrayUrut = array.sort();
console.log(arrayUrut.join(' - '));

function bagi(a,b) {
    var total = a / b;
    return total;
}

for (var i = 0; i < arrayUrut.length; i++) {
    var x = bagi(arrayUrut[i],2);
    console.log('array hasil bagi ke-'+ i +' : ' + x);
}



