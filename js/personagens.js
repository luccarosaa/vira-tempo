// Obtém elementos do DOM
const areaPersonagem = document.querySelector('.area-personagem');
const personagens = document.querySelectorAll('.personagem');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.btn-i');
const personagemTitulo = document.getElementById('personagemTitulo');
const personagemInfo = document.getElementById('personagemInfo');
const personagemNascimento = document.getElementById('personagemNascimento');
const personagemNacionalidade = document.getElementById('personagemNacionalidade');

// Conteúdos dos personagens
const conteudos = [
    // Personagem 1
    {titulo: 'Gabriella Barbosa Bueno', info: 'Donec urna odio, viverra eget mi in, scelerisque viverra nibh. Donec maximus risus vel augue bibendum scelerisque. Etiam tincidunt blandit elit vel luctus. Nam at efficitur diam, sit amet ornare est. Morbi felis ligula, varius sed scelerisque viverra, bibendum eget elit. In iaculis tempor nunc, id volutpat sapien faucibus et. Donec et efficitur turpis. Duis iaculis maximus turpis non rhoncus. Pellentesque mattis neque orci, at eleifend ligula vulputate ac. Integer non ex vehicula, euismod nisl vitae, lobortis sem. Nunc non turpis elementum, hendrerit elit in, molestie nunc. Vestibulum scelerisque, sem in imperdiet fermentum, nisi purus pellentesque sapien, suscipit bibendum enim diam et ex. Maecenas at enim sit amet augue egestas convallis.', nascimento: '30/07/2003', nacionalidade: 'Paris - França'},
    // Personagem 2
    {titulo: 'Gustavo Freitas Nunes', info: 'Donec urna odio, viverra eget mi in, scelerisque viverra nibh. Donec maximus risus vel augue bibendum scelerisque. Etiam tincidunt blandit elit vel luctus. Nam at efficitur diam, sit amet ornare est. Morbi felis ligula, varius sed scelerisque viverra, bibendum eget elit. In iaculis tempor nunc, id volutpat sapien faucibus et. Donec et efficitur turpis. Duis iaculis maximus turpis non rhoncus. Pellentesque mattis neque orci, at eleifend ligula vulputate ac. Integer non ex vehicula, euismod nisl vitae, lobortis sem. Nunc non turpis elementum, hendrerit elit in, molestie nunc. Vestibulum scelerisque, sem in imperdiet fermentum, nisi purus pellentesque sapien, suscipit bibendum enim diam et ex. Maecenas at enim sit amet augue egestas convallis.', nascimento: '15/05/2005', nacionalidade: 'São Paulo - Brasil'},
    // Personagem 3
    {titulo: 'Liz Barros Lima', info: 'Donec urna odio, viverra eget mi in, scelerisque viverra nibh. Donec maximus risus vel augue bibendum scelerisque. Etiam tincidunt blandit elit vel luctus. Nam at efficitur diam, sit amet ornare est. Morbi felis ligula, varius sed scelerisque viverra, bibendum eget elit. In iaculis tempor nunc, id volutpat sapien faucibus et. Donec et efficitur turpis. Duis iaculis maximus turpis non rhoncus. Pellentesque mattis neque orci, at eleifend ligula vulputate ac. Integer non ex vehicula, euismod nisl vitae, lobortis sem. Nunc non turpis elementum, hendrerit elit in, molestie nunc. Vestibulum scelerisque, sem in imperdiet fermentum, nisi purus pellentesque sapien, suscipit bibendum enim diam et ex. Maecenas at enim sit amet augue egestas convallis.', nascimento: '20/12/2002', nacionalidade: 'São Paulo - Brasil'},
    // Personagem 4
    {titulo: 'Valentina Antonelli Ferri', info: 'Donec urna odio, viverra eget mi in, scelerisque viverra nibh. Donec maximus risus vel augue bibendum scelerisque. Etiam tincidunt blandit elit vel luctus. Nam at efficitur diam, sit amet ornare est. Morbi felis ligula, varius sed scelerisque viverra, bibendum eget elit. In iaculis tempor nunc, id volutpat sapien faucibus et. Donec et efficitur turpis. Duis iaculis maximus turpis non rhoncus. Pellentesque mattis neque orci, at eleifend ligula vulputate ac. Integer non ex vehicula, euismod nisl vitae, lobortis sem. Nunc non turpis elementum, hendrerit elit in, molestie nunc. Vestibulum scelerisque, sem in imperdiet fermentum, nisi purus pellentesque sapien, suscipit bibendum enim diam et ex. Maecenas at enim sit amet augue egestas convallis.', nascimento: '24/08/2003', nacionalidade: 'São Paulo - Brasil'}
];

// Função para calcular a altura máxima do #personagemInfo
function calcularAlturaMaxima() {
    const overlay = document.querySelector('.overlay');
    const informacoes = document.querySelector('.informacoes');
    const titulo = document.querySelector('#personagemTitulo');
    const nascimento = document.querySelector('#personagemNascimento');
    const nacionalidade = document.querySelector('#personagemNacionalidade');
    const info = document.querySelector('#personagemInfo');

    const overlayHeight = overlay.offsetHeight; // Altura total do overlay
    const tituloHeight = titulo.offsetHeight; // Altura do título
    const nascimentoHeight = nascimento.offsetHeight; // Altura da data de nascimento
    const nacionalidadeHeight = nacionalidade.offsetHeight; // Altura da nacionalidade
    const paddingOverlay = 2 * parseFloat(getComputedStyle(overlay).paddingTop); // Padding do overlay

    // Calcular a altura máxima considerando o padding
    const alturaMaxima = overlayHeight - tituloHeight - nascimentoHeight - nacionalidadeHeight - paddingOverlay;

    // Subtrair o padding extra
    const paddingExtra = 3 * 16; // 3rem de padding convertido para pixels
    const alturaMaximaFinal = alturaMaxima - paddingExtra;

    // Definir a altura máxima do #personagemInfo
    info.style.maxHeight = alturaMaximaFinal + 'px';
}

// Variáveis para controle de arrastar na área de personagens
personagens.forEach((personagem, index) => {
    personagem.addEventListener('click', () => {
        personagemTitulo.textContent = conteudos[index].titulo;
        personagemInfo.textContent = conteudos[index].info;
        personagemNascimento.textContent = conteudos[index].nascimento;
        personagemNacionalidade.textContent = conteudos[index].nacionalidade;
        overlay.classList.add('active');
        calcularAlturaMaxima();
    });
});

// Adiciona listeners de eventos para detectar o arrastar na área de personagens
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Variáveis para controle de arrastar na área de personagens
let startX;
let scrollLeft;
let isDown = false;

// Adiciona listeners de eventos para detectar o arrastar na área de personagens
areaPersonagem.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - areaPersonagem.offsetLeft;
    scrollLeft = areaPersonagem.scrollLeft;
});
areaPersonagem.addEventListener('mouseleave', () => {
    isDown = false;
});
areaPersonagem.addEventListener('mouseup', () => {
    isDown = false;
});
areaPersonagem.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - areaPersonagem.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste da velocidade de rolagem aqui
    areaPersonagem.scrollLeft = scrollLeft - walk;
});
