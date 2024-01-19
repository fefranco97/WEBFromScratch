document.addEventListener("DOMContentLoaded", () => {
  const quadrados = document.querySelectorAll(".quadrado");

  const restGame = document.querySelector("#reset-game");
  restGame.addEventListener("click", () => {
    limpaTabuleiro();
  });

  const restStats = document.querySelector("#rest-stats");
  restStats.addEventListener("click", () => {
    limpaTabuleiro(quadrados);
    limpaEstatisticas();
  });

  quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", (e) => {
      if (!jogoEmAndamento) {
        alert("Jogo finalizado! Inicie um novo jogo");
        return;
      }
      let quadrado = e.target;
      let posicao = quadrado.id;
      verificaJogador(posicao);
      verificaJogo();
    });
  });

  function limpaTabuleiro() {
    quadrados.forEach((quadrado) => {
      quadrado.children[0].classList.remove("o");
      quadrado.children[0].classList.remove("x");
    });
    board = ["", "", "", "", "", "", "", "", ""];
    jogoEmAndamento = true;
    isXnext = true;
  }

  function limpaEstatisticas() {
    estatisticas.partida.partidas = 0;
    estatisticas.partida.empates = 0;
    estatisticas.jogador1.vitorias = 0;
    estatisticas.jogador1.derrotas = 0;
    estatisticas.jogador2.vitorias = 0;
    estatisticas.jogador2.derrotas = 0;
    renderizaEstatisticas();
  }
});

function renderizaEstatisticas() {
  const estatisticasGerais = document.querySelector(".general-stats");
  renderizaPartida(estatisticasGerais);

  const estatisticasJogadores = document.querySelectorAll(".stats");
  renderizaJogadores(estatisticasJogadores);
}
function renderizaPartida(estatisticasGerais) {
  const totalPartidas = estatisticasGerais.children[0].children[0];
  const totalEmpates = estatisticasGerais.children[1].children[0];

  totalPartidas.innerHTML = estatisticas.partida.partidas;
  totalEmpates.innerHTML = estatisticas.partida.empates;
}

function renderizaJogadores(estatisticasJogadores) {
  let id = 1;
  estatisticasJogadores.forEach((jogador) => {
    const vitorias = jogador.children[0].children[0];
    const derrotas = jogador.children[1].children[0];
    const nomeJogador = "jogador" + id;

    vitorias.innerHTML = estatisticas[nomeJogador].vitorias;
    derrotas.innerHTML = estatisticas[nomeJogador].derrotas;
    id++;
  });
}

function renderizaTela() {
  const quadrados = document.querySelectorAll(".quadrado");
  quadrados.forEach((quadrado) => {
    let posicao = quadrado.id;
    let jogador = board[posicao];

    if (jogador != "") {
      quadrado.children[0].classList.add(jogador);
    }
  });
}
