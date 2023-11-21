let qntAdultos, qntCriancas, qntHoras;

document.body.innerHTML = `<form action="" method="">
        <h2>Churrascômetro</h2>
        <label for="adulto"> Adulto
            <input id="adulto" type="number" placeholder="Insira a quantidade de adultos" min="0" value="0"
                onchange="valueHandler(value, 'adulto')">
        </label>
        <label for="crianca">Criança
            <input id="crianca" type="number" placeholder="Insira a quantidade de adultos" min="0" value="0"
                onchange="valueHandler(value, 'crianca')">
        </label>
        <label for="horas"> Horas
            <input id="horas" type="number" placeholder="Insira a quantidade de Horas" min="0" value="0"
                onchange="valueHandler(value, 'horas')">
        </label>
        <label for="calcular">
            <input id="calcular" onclick="onCalculateButton()" class="inputBtn" type="button" value="Calcular">
        </label>
    </form>`;

function valueHandler(value, type) {
  switch (type) {
    case "adulto":
      qntAdultos = value;
      break;
    case "crianca":
      qntCriancas = value;
      break;
    case "horas":
      qntHoras = value;
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
    totalBebidas: qntAdultos * 4 * qntHoras,
  };
}

function onCalculateButton() {
  const result = calculateValue();
  renderHTML(result);
}

function renderHTML(valores) {
  const div = document.createElement("div");
  div.classList.add("totalContainer");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const carne = document.createTextNode(
    `Total de carne: ${valores.totalCarne} Kg`
  );
  const bebidas = document.createTextNode(
    `Total de latinhas de cerveja: ${valores.totalBebidas} Latinhas`
  );
  p1.appendChild(carne);
  p2.appendChild(bebidas);
  div.appendChild(p1);
  div.appendChild(p2);
  document.body.appendChild(div);
}
