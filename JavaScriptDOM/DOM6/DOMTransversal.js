// const x = document.querySelectorAll('.close');

// x.forEach(function(el) {
//     el.addEventListener('click',function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // menghentikan aksi bawaan
//         e.stopPropagation(); // menghentikan event lain jadi cuma event ini aja
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//         alert('oke');
//     });
// });

/// DOM Transversal parent
// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling);

const cointainer = document.querySelector('.container');

cointainer.addEventListener('click', function(e) {
    if( e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});