/*Manipulasi Array*/

// 1. Menambah isi array
// cara 1
//var arr = ["a",1,true];
//console.log(arr[1]);

// cara 2
//var myarr = [];
//myarr[0] = "koesmang";
//myarr[1] = "koesming";
//myarr[2] = "koesmung";
//myarr[3] = "koesmeng";// indexnya gk boleh kelewat
//console.log(myarr[1]);

// 2. Menghapus isi array
//myarr[2] = undefined;
//console.log(myarr);

// 3. Menampilkan isi array
//var iniarr = ["koesmang","koesming","karoesming"];

//for (var i = 0; i < iniarr.length; i++) {
//    console.log('kucing ke-' + (i+1) +' : '+iniarr[i]);
//}

/*Method pada Array*/ 
// 1. Join
//var iniarr = ["koesmang","koesming","karoesming"];
//console.log(iniarr.join(' - '));

// 2. Push & Pop
//var iniarr = ["koesmang","koesming","karoesming"];
//iniarr.push('san','nop'); //menambah data di akhir
//iniarr.pop(); //menghapus data di akhir
//console.log(iniarr.join());

// 3. unshift & shift
//var iniarr = ["koesmang","koesming","karoesming"];
//iniarr.unshift('asd'); //menambah data di awal
//iniarr.shift(); //menghapus data di awal
//console.log(iniarr.join());

// 4. splice
// splice(indexAWal, mauDihapusBrp, elemenBaru1, elemenBaru2)
// var arr = ["san","sin","sun"];
//arr.splice(1,0,"kusmeng");
//console.log(arr.join(' - '));

// 5. slice
// slice(indexAwal,indexAkhir);
//var arr = ["san","sin","sun","mang","meng"];
//var arr2 = arr.slice(1,4);
//console.log(arr2.join(' - '));

// 6. forEach
//var nama = ['san','sin','sun','son'];
//nama.forEach(function (e, i) {
//    console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
//});

// 7. map
//var angka = [1,2,3,4,5,6,7];
//var angka2 = angka.map(function (e) {
//    return e*2;
//});
//console.log(angka2.join(' - '));

// 8. sort (pengurutan)
//var angka = [4,2,7,8,1,0,30,20,10];
//angka.sort(function (a,b) {
//    return a-b;
//});
//console.log(angka.join(' - '));

/* Pencarian ARRAY */
// 9. filter
//var a = 1; 
//var angka = [4,2,7,8,1,0,30,20,10];
//var angka2= angka.filter(function (x) {
//    return x == a;
//});
//console.log(angka2);

// 10. find
var a = 1; 
var angka = [4,2,7,8,1,0,30,20,10];
var angka2= angka.find(function (x) {
    return x == a;
});
console.log(angka2);







