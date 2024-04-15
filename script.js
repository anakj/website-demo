const botao = document.getElementById('btn');
const audio = document.getElementById('miado');

botao.addEventListener('click', () => {
    audio.currentTime = 0; // Reinicia o áudio, caso já esteja tocando
    audio.play();
});