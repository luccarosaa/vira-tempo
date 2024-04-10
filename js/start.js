document.addEventListener('DOMContentLoaded', function() {
    var startJogo = document.querySelector('.start-jogo');
    var mapaJogo = document.querySelector('.mapa-jogo');

    // Exibe o mapa do jogo ao clicar na imagem de "Começar Jogo"
    startJogo.addEventListener('click', function() {
        startJogo.style.display = 'none';
        mapaJogo.style.display = 'block';
    });
});
