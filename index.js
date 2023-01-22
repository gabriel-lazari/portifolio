const menu = document.querySelector('[menu]');
const menuBtn = document.querySelector('[menu="btn"]');
const menuLista = document.querySelector('[menu="lista"]');

menu.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-animation');
    menuLista.classList.toggle('menu-ativo')
})