let qntAdultos, qntCriancas, qntHoras;

window.onload = () => {
  let input = document.getElementsByTagName("input");
  for (const element of input) {
    element.addEventListener("change", valueHandler);
  }
};

function valueHandler() {
  switch (this.id) {
    case "adulto":
      qntAdultos = this.value;
      break;
    case "crianca":
      qntCriancas = this.value;
      break;
    case "horas":
      qntHoras = this.value;
      break;
    default:
      break;
  }
}

function calculateValue() {
  qntAdultos = qntAdultos ? qntAdultos : 0;
  qntCriancas = qntCriancas ? qntCriancas : 0;
  qntHoras = qntHoras ? qntHoras : 1;

  return {
    totalCarne: (
      ((qntAdultos * 200) / 1000 + (qntCriancas * 105) / 1000) *
      qntHoras
    ).toFixed(2),
    totalBebidas: qntAdultos * 3 * qntHoras,
  };
}

function onCalculateButton() {
  const result = calculateValue();

  document.getElementById(
    "carne"
  ).innerText = `Total de carne: ${result.totalCarne} Kg`;
  document.getElementById(
    "bebida"
  ).innerText = `Total de latinhas de cerveja: ${result.totalBebidas} Latinhas`;
}

function renderHTML() {
  document.body.innerHTML = `<form action="" method="">
        <h2>Churrascômetro</h2>
        <label for="adulto"> Adulto
            <input id="adulto" type="number" placeholder="Insira a quantidade de adultos" min="0" value="0">
        </label>
        <label for="crianca">Criança
            <input id="crianca" type="number" placeholder="Insira a quantidade de adultos" min="0" value="0">
        </label>
        <label for="horas"> Horas
            <input id="horas" type="number" placeholder="Insira a quantidade de Horas" min="0" value="0">
        </label>
        <label for="calcular">
            <input id="calcular" onclick="onCalculateButton()" class="inputBtn" type="button" value="Calcular">
        </label>
    </form>
    <div>
        <p id="carne"></p>
        <p id="bebida"></p>
    </div>
    `;
}

renderHTML();
