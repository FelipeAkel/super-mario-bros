const botaoTrailer = document.querySelector(".btn-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alterarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", "");
});


// OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.

// - Passo 1 - Pegar os elementos que representam as abas no HTML.
// - Passo 2 - Identificar o clique no elemento da aba.
// - Passo 3 - Quando usuário clicar, desmarcar a aba selecionada.
// - Passo 4 - Marcar a aba clicada como selecionado.
// - Passo 5 - Esconder o conteúdo anterior.
// - Passo 6 - Mostrar o conteúdo da aba selecionada.


// - Passo 1 - Pegar os elementos que representam o menu-botao no HTML.
// console.log(document);
// console.log(document.querySelectorAll(".menu-botao"));
const menus = document.querySelectorAll(".menu-botao");

menus.forEach(menu_botao => {
    // - Passo 2 - Identificar o clique no elemento da aba.
    // console.log(menu_botao);
    menu_botao.addEventListener("click", function(){

        selecionarMenu(menu_botao);

        mostrarConteudo(menu_botao);

    });
});


function selecionarMenu(menu_botao){

    // - Passo 3 - Quando usuário clicar, desmarcar a aba selecionada.
    const menuSelecionado = document.querySelector('.menu-botao.selecionado')
    // console.log(menuSelecionado);
    // Estou encontrando o class 'aba selecionado' da lista para futuramente retirar o css dela.
    // Verificando quais classes estão dentro da abaSelecionada com o 'classList'.
    // console.log(menuSelecionado.classList);
    // Remover a class do HTML
    menuSelecionado.classList.remove('selecionado');


    // - Passo 4 - Marcar a aba clicada como selecionado.
    //console.log(menu_botao);
    // Ao clicar eu já estou clicando diretamente na aba o qual deverá ser atribuida a class 'selecionado'.
    menu_botao.classList.add('selecionado');

    // Estou evitando que o JavaScript execute códigos o qual já contém a informação da class "selecionado". Com isso, ganha-se tempo de execução do código.
    //console.log(menu_botao.classList.contains('selecionado'));
    if(menu_botao.classList.contains('selecionado')){
        // Caso seja true o 'return' não irá executar o código de baixo.
        //console.log('Valor é "true" ENTROU no if')
        return;
    } else {
        //console.log('NÃO entrou no if');
    }
}

function mostrarConteudo(menu_botao){
    // - Passo 5 - Esconder o conteúdo anterior.
    const informacoesAtivo = document.querySelector('.conteudo-menu.ativo');
    //console.log(informacoesAtivo);
    informacoesAtivo.classList.remove("ativo");


    //Passo 6 - Mostrar o conteúdo da menu-botao selecionada.
    // Para isso, criei os IDs no Menu e nas Informações.
    //console.log(menu_botao.id);
    // Estou pegando a informacao contida no ID do menu da aba e concatenando. Pode ser feito de duas formas:
    //const IdDoElementoConteudoMenuBotao = "conteudo-" + menu_botao.id;
    const IdDoElementoConteudoMenuBotao = `conteudo-${menu_botao.id}`; //Crase ``
    //console.log(IdDoElementoConteudoMenuBotao);

    const informacaoQueSeraMostrada = document.getElementById(IdDoElementoConteudoMenuBotao);
    informacaoQueSeraMostrada.classList.add("ativo");
}
