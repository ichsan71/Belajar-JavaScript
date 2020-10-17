var angka = true;

while (angka) {
    var angka = prompt('Masukan Nilai');
    
    if (angka >= 0) {
        alert('Anda memasukan nilai positif');   
    } 
    else if (angka < 0) {
        alert('Anda memasukan nilai negatif');
    }
    else{
        confirm('Anda Harus memasukan angka!, Coba lagi?'); 
}}
