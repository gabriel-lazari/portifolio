const links = document.querySelectorAll('[link]');
const email = document.querySelector('[data-email]')

links.forEach(element => {
    element.addEventListener('click', scrollToOnLinks);
});

email.addEventListener('click', scrollToOnLinks);

function scrollToOnLinks(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 80,
        behavior: 'smooth',
    });
}