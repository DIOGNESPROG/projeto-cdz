/* OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botões


-

- passo 3 - desmarcar o batão selecionado anterior


- passo 4 - marcar o botão clicado com se estivesse selecionado


- passo 5 - esconder a imagem de fundo anterior


- passo 6 - fazer aparecer a imagem de fundo correspondente so botão clicado

*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoescarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de indentificar o clique do usuário no botão

botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        
       
        //passo 3 - desmarcar o batão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicado com se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem de fundo correspondente so botão clicado
        
        
        imagens[indice].classList.add('ativa');
        


    })


})

