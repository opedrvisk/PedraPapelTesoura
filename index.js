const botoes = document.querySelectorAll("button");

const elementoResultado = document.getElementById("resultado");

const elementoPontuacaoJogador = document.getElementById("pontuacao-jogador");

const elementoPontuacaoComputador = document.getElementById("pontuacao-computador");

let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const resultado = jogarRodada(botao.id, jogadaComputador());
    elementoResultado.textContent = resultado;
  });
});

function jogadaComputador() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaAleatoria = Math.floor(Math.random() * opcoes.length);
  return opcoes[escolhaAleatoria];
}

function jogarRodada(escolhaJogador, escolhaComputador) {
  if (escolhaJogador === escolhaComputador) {
    return "Empate!";
  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {
    pontuacaoJogador++;
    elementoPontuacaoJogador.textContent = pontuacaoJogador;
    return "Você venceu! " + escolhaJogador + " vence " + escolhaComputador + "!";
  } else {
    pontuacaoComputador++;
    elementoPontuacaoComputador.textContent = pontuacaoComputador;
    return "Você perdeu! " + escolhaComputador + " vence " + escolhaJogador + "!";
  }
}

function piscarResultado() {
  elementoResultado.style.transition = "opacity 0.5s";
  elementoResultado.style.opacity = "0";
  setTimeout(() => {
    elementoResultado.style.opacity = "1";
  }, 500);
}

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const resultado = jogarRodada(botao.id, jogadaComputador());
    elementoResultado.textContent = resultado;
    piscarResultado(); 
  });
});