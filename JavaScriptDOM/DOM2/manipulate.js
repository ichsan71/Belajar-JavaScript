/// A. Manipulation ELEMENT 

// 1. element.innerHTML()
// const judul = document.getElementById('judul');
// judul.innerHTML = '<b>Dude!</b>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello world!';

// 2. element.style()
// const judul = document.querySelector('#judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = 'salmon';


// 3. element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'san');

// const p2 = document.querySelector('.p2');

/// B. Manipulation NODE

// 1. document.createElement();
const pBaru = document.createElement('p');
const text = document.createTextNode('Paraghrap baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(text);

// simpan pBaru di akhir section A
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru); // tambah diakhir

const liBaru = document.createElement('li');
const textli = document.createTextNode('item baru');

liBaru.appendChild(textli); // tambah diakhir

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2); // tambah ditengah


// cara remove node.removeChild();
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// cara replace node.replaceChild(a, b);
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const texth2 = document.createTextNode('DUDE!');

h2.appendChild(texth2);

sectionB.replaceChild(h2, p4);

// dokumentasi method manipulasi
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model




