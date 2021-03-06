const container = document.querySelector('.container');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e) {
    if( e.target.className == 'thumb'){
        const x = e.target.parentElement.previousElementSibling;
        x.setAttribute('src', e.target.src);
        
        x.classList.add('fade');
        setTimeout(function() {
            x.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
        
    }
});