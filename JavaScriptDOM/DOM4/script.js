// fitur tombol ubah warna
const h1 = document.getElementsByTagName('h1')[0];
const tombol = document.createElement('button');
const teksTombol = document.createTextNode('ubah warna');
h1.appendChild(tombol);
tombol.setAttribute('type', 'button');
tombol.appendChild(teksTombol);

tombol.addEventListener('click', function() {
    //document.body.style.backgroundColor = 'lightgrey';
    //document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

// fitur tombol ubah warna random
const tombol2 = document.createElement('button');
teksTombol2 = document.createTextNode('Ubah Warna Random');
tombol2.setAttribute('type', 'button');
tombol2.appendChild(teksTombol2);
tombol.after(tombol2);

tombol2.addEventListener('click', function () {
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});

// RGB
const sMerah = document.querySelector('input[name=sMerah]');
const sIjo = document.querySelector('input[name=sIjo]');
const sBiru = document.getElementsByTagName('input')[2];

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sIjo.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sIjo.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
    
});