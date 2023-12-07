const telaLinha = document.getElementById("linha");
const linha = telaLinha.getContext("2d"); // Recupera o Contexto do Canva

// desenha duas linhas lembrando um evelope
linha.moveTo(0, 0); // Ponto Inicial da linha
linha.lineTo(250, 250); // Faz uma linha do ponto inicial até as coordenadas X Y nos parametros
linha.lineTo(500, 0); // Faz uma linha do ponto anterior (250, 250) até as coordanas X Y nos parametros
linha.stroke(); // Desenha a linha

// desenha um retangulo
const telaRet = document.getElementById("retangulo");
const ret = telaRet.getContext("2d");

ret.fillStyle = "blue"; // Define a cor de fundo de dentro do retangulo
ret.fillRect(10, 10, 100, 200); // Cria um retangulo preenchio

ret.strokeStyle = "red"; // Define a cor da linha (borda) do retangulo
ret.strokeRect(150, 10, 100, 200); // Desenha um retangulo sem estar preenchido na parte de dentro

ret.rect(300, 10, 100, 200); // Cria um retangulo
ret.fillStyle = "blue"; // deixa dentro como azul
ret.strokeStyle = "red"; // Deixa a borda vemelha
ret.fill();
ret.stroke();

ret.clearRect(20, 20, 30, 30); // deixa o fundo transparante

const telaBegin = document.getElementById("beginPath");
const ctx = telaBegin.getContext("2d");

ctx.beginPath(); // Cria um novo caminho para não perder a referencia

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.beginPath(); // Sem essa linha, perde a referencia e sobreescreve a linha anteriror

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Trabalhando com Cirulos
const telaCirulo = document.getElementById("circulo");
const ctxCirulo = telaCirulo.getContext("2d");

const x = 250;
const y = 250;
const raio = 100;
const inicio = 0;
const fim = 2 * Math.PI;

ctxCirulo.beginPath();
ctxCirulo.strokeStyle = "blue";
ctxCirulo.fillStyle = "green";
ctxCirulo.arc(x, y, raio, inicio, fim);
ctxCirulo.stroke();
ctxCirulo.fill();

// Animando nossas formas do canvas ( Criando um cirulo e movendo ele )
const telaCirulo2 = document.getElementById("circulo2");
const ctxCirulo2 = telaCirulo2.getContext("2d");

const circle = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0,
};

const drawCircle = (circle) => {
  ctxCirulo2.beginPath();
  ctxCirulo2.rect(0, 0, 500, 500);
  ctxCirulo2.fillStyle = "beige";
  ctxCirulo2.fill();

  ctxCirulo2.beginPath();
  ctxCirulo2.strokeStyle = "blue";
  ctxCirulo2.fillStyle = "green";
  ctxCirulo2.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);
  ctxCirulo2.stroke();
  ctxCirulo2.fill();
};

setInterval(() => {
  if (circle.fim < 2 * Math.PI) {
    circle.fim += 0.2;
    circle.x += 4;
  }
  drawCircle(circle);
}, 25);

// Canvas e imagens modo 1, com IMG dentro do HTML
const telaImg = document.getElementById("img");
const ctxImg = telaImg.getContext("2d");
const img = document.getElementById("lobo");

ctxImg.beginPath();
ctxImg.rect(0, 0, 500, 500);
ctxImg.fillStyle = "beige";
ctxImg.fill();

ctxImg.drawImage(img, 20, 20);

// Modo 2 com img criada via JS

const telaImg2 = document.getElementById("img2");
const ctxImg2 = telaImg2.getContext("2d");
const img2 = new Image();

img2.src = "Asserts/Lobos1.jpg";

ctxImg2.beginPath();
ctxImg2.rect(0, 0, 500, 500);
ctxImg2.fillStyle = "beige";
ctxImg2.fill();

function desenharImg() {
  ctxImg2.drawImage(
    this,
    20,
    20,
    this.naturalWidth / 2,
    this.naturalHeight / 2
  );
}

img2.onload = desenharImg;
