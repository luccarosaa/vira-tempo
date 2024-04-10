// Rolando para a seção correspondente ao clicar nos botões do menu no celular
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}