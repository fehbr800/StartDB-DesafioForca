const readline = require('readline-sync');
const Forca = require('./forca');
const arrayPalavras= ["gato","cachorro", "papagaio", "furao" ,"cobra","porco" ]
const sorteioPalavra = arrayPalavras[Math.floor (Math.random()*arrayPalavras.length)]
console.log(sorteioPalavra);

const iniciarJogo = new Forca(sorteioPalavra);

while (!["perdeu", "ganhou"].includes(iniciarJogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n");
    iniciarJogo.chutar(chute);
    console.log(iniciarJogo.buscarDadosDoJogo());
}

console.log("Você " + iniciarJogo.buscarEstado() + " o jogo");