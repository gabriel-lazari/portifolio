const enviarForm = document.querySelector('[data-enviado]');
const btnEnviar = document.querySelector('[data-enviar]');

btnEnviar.addEventListener('click', (event) => {
    enviarForm.classList.toggle('enviando');
})