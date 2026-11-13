const titulo = document.getElementById("titulo-principal");
const subtitulo = document.querySelector("#subtitulo");
const campoBusca = document.querySelector("#campo-busca");
const filtroArea = document.querySelector("#filtro-area");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista-cursos");
const formulario = document.querySelector("#form-cadastro");
const btnTema = document.querySelector("#btn-tema");
const btnLimpar = document.querySelector("#btn-limpar");

/*

// desafio -1
titulo.textContent = "Cursos do IFPB Cajazeiras";




//desafio - 2


console.log(campoBusca.value.trim());


//desafio  - 3

titulo.classList.add("destaque");
console.log(titulo.classList.contains("destaque"));
titulo.classList.remove("destaque");
console.log(titulo.classList.contains("destaque"));



//desafio  -  4
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-alternativo");
});

//desafio - 5
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensagem.textContent = "Formulário recebido!";
});

//desafio - 6

lista.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    console,log(event.currentTarget.id);
});

//desafio -  7

const card = document.querySelector(".card-curso");
const botao =  card.querySelector("button");
lista.addEventListener("click", () => {console.log("lista")});
card.addEventListener("click", () => { console.log("cartão")});
botao.addEventListener("click", () => {console.log("botão")});


//desafio -  8

lista.addEventListener("click", (event) => {
    const botao = event.target.closest("button");
    if(!botao || !lista.contains(botao)) {
        return ;
    }

     const card = botao.closest(".card-curso");

     if(botao.dataset.acao === "detalhes") {
        const detalhes = card.querySelector(".detalhes");
        detalhes.classList.toggle("oculto");

     }

      if(botao.dataset.acao === "remover") {
        card.remover();
      }
});





*/


function aplicarFiltros(){
    const termo = campoBusca.ariaValueMax.trim().toLocaleLowerCase();
    const area = filtroArea.value;
    const cards = document.querySelectorAll(".card-curso");
    let visiveis = 0 ;

    cards.forEach((card) => {
        const nome = card.querySelector("h2").textContent.toLowerCase();
        const combiName = nome.includes(termo);
        const combinaArea = area === "todos" || card.dataset.area === area;
        const mostrar = combinaNome && combinaArea;
        card.classList.toggle("oculto", !mostrar);
        if(mostrar) {
            visiveis++;
        }
    });

    mostrarMensagem( `${visiveis} curso(s) enconrando(s)`);

}

 campoBusca.addEventListener("input", aplicarFiltros);
 filtroArea.addEventListener("change", aplicarFiltros);