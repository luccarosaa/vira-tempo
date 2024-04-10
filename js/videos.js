// Função para abrir o vídeo correspondente à área clicada
function openVideo(url, areaId) {
    var videoPlayer = document.getElementById('videoPlayer');
    var loadingIndicator = document.getElementById('loading-indicator'); // Novo elemento para o indicador de carregamento
    var videosDiv = document.getElementById('videos');

    
    // Exibe a div de vídeos
    videosDiv.style.display = 'flex';
    loadingIndicator.style.display = 'flex'; // Exibir o indicador de carregamento em tela cheia
    videoPlayer.src = url; // Define a URL do vídeo no player

    // Adiciona um evento de carregamento do vídeo
    videoPlayer.addEventListener('loadeddata', setTimeout(function() {
        // Marca a área como clicada (impede de abrir novamente)
        markAreaAsClicked(areaId);

        // Oculta o indicador de carregamento após o vídeo ser carregado
        loadingIndicator.style.display = 'none';

        // Inicia a reprodução do vídeo
        videoPlayer.play();

        // Entra em tela cheia
        videoPlayer.requestFullscreen();
    }, 2000));

    // Adiciona um evento de erro de carregamento do vídeo
    videoPlayer.addEventListener('error', function() {
        // Oculta o indicador de carregamento em caso de erro
        loadingIndicator.style.display = 'none';
        console.error('Erro ao carregar o vídeo.');
    });
}



// Função para fechar o vídeo quando terminar
function closeVideo() {
    var videosDiv = document.getElementById('videos');
    videosDiv.style.display = 'none'; // Oculta a div de vídeos
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause(); // Pausa a reprodução do vídeo
    videoPlayer.currentTime = 0; // Volta para o início do vídeo
}

// Função para sair do modo de tela cheia
function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

// Função para verificar se a área já foi clicada antes
function areaAlreadyClicked(areaId) {
    return localStorage.getItem(areaId) === 'clicked';
}

// Função para marcar a área como clicada
function markAreaAsClicked(areaId) {
    localStorage.setItem(areaId, 'clicked');
    document.getElementById(areaId).classList.add('clicked');
    console.log("Área clicada: " + areaId);
}

// Adiciona eventos de clique às áreas da imagem mapeada
document.querySelectorAll('area').forEach(function(area) {
    area.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        var videoUrl = this.getAttribute('href');
        var areaId = this.getAttribute('id');
        if (!areaAlreadyClicked(areaId)) {
            openVideo(videoUrl, areaId); // Abre o vídeo correspondente
        }
        else {
            openVideo(videoUrl, areaId); // Abre o vídeo correspondente
        }
    });
});

// Adiciona evento para fechar o vídeo quando terminar
document.getElementById('videoPlayer').addEventListener('ended', function() {
    closeVideo();
    exitFullscreen()
});

// Limpa as informações sobre áreas clicadas ao recarregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log("Limpando informações sobre áreas clicadas.");
    localStorage.clear();
});