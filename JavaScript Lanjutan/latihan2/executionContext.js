//// 2.1 Execution Context, Hoisting & Scope
/// tonton ini kalo lupa
// https://www.youtube.com/watch?v=8mZsm9ZQFdY&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=5

/// Closure 
// function init() {
//     return tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('san');


//. Contoh 1
// function salam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}!`)
//     }
// }

// let greetingPagi = salam('Pagi');
// let greetingSiang = salam('Siang');
// let greetingMalam = salam('Malam');

// greetingPagi('Ichsan');

//. Contoh 2
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
