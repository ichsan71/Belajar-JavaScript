//Contoh rekursif 1
/* 
function tampilAngka(n) {
    if (n === -10) {
        console.log(n);
        return;
    }
    tampilAngka(n-1);
}

tampilAngka(10); */

// Contoh 2 rekrusif faktorial
function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n-1);
}

console.log(faktorial(5));