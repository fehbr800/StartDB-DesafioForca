class Forca {
  constructor(palavraEsperada) {
    this.letrasChutadas = [];
    this.letrasCorretas = [];
    this.letrasErradas = [];
    this.vidas = 6;
    this.palavraEsperada = palavraEsperada;
    this.palavraEscondida = [];
  }

  chutar(letra) {
    const palavraChutadaEsperada = letra.toLowerCase();
    if (!this.isCaracterValido (palavraChutadaEsperada)) {
      return console.log("Você inseriu um ou mais caracteres inválidos. \n  Tente novamente inserindo apenas uma letra")
    }
    if (this.letrasChutadas.includes (palavraChutadaEsperada)) {
      return console.log("A Letra já foi inserida, insira outro caracter")
    }
    if (this.palavraEsperada.includes (palavraChutadaEsperada)) {
      this.letrasCorretas.push (palavraChutadaEsperada)
      this.letrasChutadas.push (palavraChutadaEsperada)
    } else {
      this.vidas -= 1
      this.letrasErradas.push (palavraChutadaEsperada)
      this.letrasChutadas.push (palavraChutadaEsperada)
    }
  }

  isCaracterValido(input) {
    return input.length === 1 && input.match(/[a-z]/i);
  }

  buscarEstado() {
    if (this.palavraEscondida.join("") === this.palavraEsperada) {
      return "ganhou"
    }
    if (this.vidas > 0) {
      return "aguardando chute"
    } else {
      return "perdeu"
    }
  } 
  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    const palavra = this.palavraEsperada.split("")
    this.palavraEscondida = palavra.map(letra => {
      if (this.letrasCorretas.includes(letra)) {
        return letra
      }
      return "_"
    })
    return {
      letrasErradas: this.letrasErradas,
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavraEscondida // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;