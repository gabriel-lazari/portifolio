const menu = document.querySelector('[menu]');
const botao = document.querySelector('[botao]');
const lista = document.querySelector('[lista]');
const linkMenu = document.querySelectorAll('[link]');

menu.addEventListener('click', () => {
    botao.classList.toggle('botao-animation');
    lista.classList.toggle('lista-ativa');
})

linkMenu.forEach(Element => {
    Element.addEventListener('click', () => {
        lista.classList.toggle('lista-ativa');
    })
})