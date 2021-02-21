// DOM Selection

// document.getElementById() -> element
//const judul = document.getElementById('judul')
//judul.style.color = 'black'; // menambahkan warna text
//judul.style.backgroundColor = '#ccc'; // menambahkan warna bg
//judul.innerHTML = 'Ichsan Kamil'; // mengubah isi html

// document.gerElementsByTagName() -> Html Collection
//const p = document.getElementsByTagName('p');
//for (let i = 0; i < p.length; i++) {
//    p[i].style.backgroundColor = 'lightblue'
//}

// document.getElementsByClassName() -> HTML collection
//const p1 = document.getElementsByClassName('p1');
//p1[0].innerHTML = 'Ini diubah dari javascript';

// document.querySelector() -> element
const p4 = document.querySelector(' #b p ');
p4.style.color = 'green';

const li2 = document.querySelector('li:nth-child(2)');
li2.style.backgroundColor = 'red';

// document.querySelectorAll() -> node list
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'blue';
}


