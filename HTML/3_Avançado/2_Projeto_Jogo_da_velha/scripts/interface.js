let estatisticas = {
  partida: {
    partidas: 0,
    empates: 0,
  },
  jogador1: {
    vitorias: 0,
    derrotas: 0,
  },
  jogador2: {
    vitorias: 0,
    derrotas: 0,
  },
};

function renderizaEstatisticas() {
  const estatisticasGerais = document.querySelector(".general-stats");
  renderizaPartida(estatisticasGerais);

  const estatisticasJogadores = document.querySelectorAll(".stats");
  renderizaJogadores(estatisticasJogadores);

  console.log(estatisticas);
}

function renderizaPartida(estatisticasGerais) {
  const totalPartidas = estatisticasGerais.children[0].children[0];
  const totalEmpates = estatisticasGerais.children[1].children[0];

  totalPartidas.innerHTML = estatisticas.partida.partidas;
  totalEmpates.innerHTML = estatisticas.partida.empates;
}

function renderizaJogadores(estatisticasJogadores) {
  estatisticasJogadores.forEach((jogador) => {
    const vitorias = jogador.children[0].children[0];
    const derrotas = jogador.children[1].children[0];

    vitorias.innerHTML = estatisticas.jogador1.vitorias;
    derrotas.innerHTML = estatisticas.jogador1.derrotas;
  });
}
