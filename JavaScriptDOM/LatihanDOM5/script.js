// RGB kursor
const sMerah = document.querySelector('input[name=sMerah]');
const sIjo = document.querySelector('input[name=sIjo]');
const sBiru = document.getElementsByTagName('input')[2];

document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
    
});

/// Game Suit Jawa
function getPilcom() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgcomp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if ( new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgcomp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
let j = 0;
let k = 0;
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function() {
        const pilcom = getPilcom();
        const pilplayer = pil.className;
        const hasil = getHasil(pilcom, pilplayer);
        
        putar();

        setTimeout(function() {
            // ganti gambar
            const imgcomp = document.querySelector('.img-komputer');
            imgcomp.setAttribute('src', 'img/' + pilcom + '.png');
            
            // info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            if (hasil == 'MENANG!') {
                j = j+1;
                const h1 = document.querySelector('.dude');
                h1.innerHTML = j;
                // alert(' ke -' + j);
                return j;
                }
            else if (hasil == 'KALAH!') {
                k = k+1;
                const h1 = document.querySelector('.dudekom');
                h1.innerHTML = k;
                // alert(' ke -' + j);
                return k;
            }
            }, 1000);
        
    });
});