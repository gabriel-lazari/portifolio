const target = document.querySelectorAll('[data-anime]')

function animeScroll() {
    const windowsTop = window.pageYOffset + (window.innerHeight * .85);
    target.forEach(Element => {
        if (windowsTop > Element.offsetTop) {
            Element.classList.add('animation');
        } else {
            Element.classList.remove('animation');
        }

    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', () => {
        animeScroll();
    })
}