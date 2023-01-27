const menu = document.querySelector('[menu]');
const botao = document.querySelector('[botao]');
const lista = document.querySelector('[lista]');

menu.addEventListener('click', () => {
    botao.classList.toggle('botao-animation');
    lista.classList.toggle('lista-ativa');
})