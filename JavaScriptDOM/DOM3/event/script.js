// interaktif prompt
var a = prompt('Haloo, Nama kamu siapa ? ');
if (a == null){
    const nama = document.querySelector('div#judul h1');
    const h2 = document.createElement('h2');
    const texth2 = document.createTextNode('Hello, unknown');
    h2.appendChild(texth2);
    nama.appendChild(h2);
}else {
    const nama = document.querySelector('div#judul h1');
    const h2 = document.createElement('h2');
    const texth2 = document.createTextNode('Hello, ' + a);
    h2.appendChild(texth2);
    nama.appendChild(h2);
};

/// MENU
const menus = document.getElementsByClassName('Menu');

function pindah(id) {
    for (let i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
}


/// Event Handler
const p1 = document.querySelector('.p1');
function ubahwr() {
    p1.style.backgroundColor = 'salmon';
}
p1.onclick = ubahwr; // method onclick

// mengunakan addEventListener
const p2 = document.getElementsByClassName('p2')[0];
p2.addEventListener('click', function() {
    const ul = document.querySelector('div#Home ul');
    const li = document.createElement('li');
    const textli = document.createTextNode('DUDE!');
    li.appendChild(textli);
    ul.appendChild(li);
});



// source event
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHB0YjlHeWNtbmxhS3hZT3FreldHenc3Smc1Z3xBQ3Jtc0tsakQ5RksxWFVJWnJCMktaVkM2RU15Wk12NDcyeG80UVQ4VHJWallmd0p1NzE1Wjd4YzNGOHB1aDdpY2NyLTVySFZuQ2lhZC1pQS1xQi1FcV9yWFBFUUdTbkVTaFBVWFVGWTJURDVpa1lHYkJyLTBfNA&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents
