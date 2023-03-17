const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
botoes.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {
        desativarBotao();
        botao.classList.add('selecionado')  
        esconderImagem();
        imagens[indice].classList.add('ativa')
        
    })
}) ;




function esconderImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove('ativa');
}

function desativarBotao() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove('selecionado');
}

