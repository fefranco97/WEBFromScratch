let players = [];
let teamA = [];
let teamB = [];

let textArea, btnSortear, btnReSortear, resultContainer;

window.onload = () => {
  textArea = document.getElementById("nomes");
  btnSortear = document.getElementById("sortear");
  btnReSortear = document.getElementById("reSortear");
  resultContainer = document.getElementById("resultContainer");

  textArea.addEventListener("change", handlePlayerChange);
  btnSortear.addEventListener("click", sortearTeams);
  btnReSortear.addEventListener("click", resetAndSortTeams);
};

function handlePlayerChange(event) {
  players.length = 0;

  for (const line of event.target.value.split(/\r?\n/)) {
    const trimmedLine = line.trim();
    if (trimmedLine) {
      players.push(trimmedLine);
    }
  }
}

function sortearTeams() {
  if (players.length == 10) {
    teamB = players.slice();

    for (let i = 0; i < 5; i++) {
      const winner = Math.floor(Math.random() * teamB.length);
      teamA.push(teamB[winner]);
      teamB.splice(winner, 1);
    }

    updateUi();
  } else {
    alert("Por favor insira 10 nomes");
  }
}

function resetAndSortTeams() {
  teamA.length = 0;
  teamB = players.slice();

  for (let i = 0; i < 5; i++) {
    const winner = Math.floor(Math.random() * teamB.length);
    teamA.push(teamB[winner]);
    teamB.splice(winner, 1);
  }

  updateUi();
}

function updateUi() {
  textArea.style.display = "none";
  resultContainer.style.display = "flex";
  btnSortear.style.display = "none";
  btnReSortear.style.display = "block";

  const teamAContainer = document.querySelectorAll(".teamA");
  const teamBContainer = document.querySelectorAll(".teamB");

  for (let i = 0; i < 5; i++) {
    teamAContainer[i].innerText = teamA[i];
    teamBContainer[i].innerText = teamB[i];
  }
}
