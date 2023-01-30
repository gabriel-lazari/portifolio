const target = document.querySelectorAll('[data-anime]')

function animeScroll() {
    const windowsTop = window.pageYOffset + (window.innerHeight * .75);
    target.forEach(Element => {
        if (windowsTop > Element.offsetTop) {
            Element.classList.add('animation');
        } else {
            Element.classList.remove('animate');
        }
        
    })
}

window.addEventListener('scroll', function () {
    animeScroll()
})