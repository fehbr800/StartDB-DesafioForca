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
    const palavraModificada = letra.toLowerCase();
    if (!this.isCaracterValido (palavraModificada)) {
      return console.log("Você inseriu um ou mais caracteres inválidos. \n  Tente novamente inserindo apenas uma letra")
    }
    if (this.letrasChutadas.includes (palavraModificada)) {
      return console.log("A Letra já foi inserida, insira outro caracter")
    }
    if (this.palavraEsperada.includes (palavraModificada)) {
      this.letrasCorretas.push (palavraModificada)
      this.letrasChutadas.push (palavraModificada)
    } else {
      this.vidas -= 1
      this.letrasErradas.push (palavraModificada)
      this.letrasChutadas.push (palavraModificada)
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
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

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