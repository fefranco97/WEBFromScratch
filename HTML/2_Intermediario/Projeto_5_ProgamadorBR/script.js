window.onload = () => {
  let textArea = document.getElementById("nomes");
  let btnSortear = document.getElementById("sortear");
  let btnReSortear = document.getElementById("reSortear");
  let resultContainer = document.getElementById("resultContainer");
  textArea.addEventListener("change", handlerChange);
  btnSortear.addEventListener("click", sortear);
  btnReSortear.addEventListener("click", reSortear);

  let players = [];
  let teamA = [];
  let teamB = [];

  function handlerChange() {
    players = this.value.split(/\r?\n/);
    players = players.filter((a) => {
      return a.trim() !== "";
    });
    teamB = players;
  }

  function sortear() {
    for (let i = 0; i < 5; i++) {
      let winner = Math.floor(Math.random() * players.length);
      teamA.push(players[winner]);
      teamB.splice(winner, 1);
    }
    render();
  }

  function reSortear() {
    console.log("cliquei no reSortear");
  }

  const render = () => {
    createTeamContainer("teamA");
    createTeamContainer("teamB");

    textArea.style.display = "none";
    resultContainer.style.display = "flex";
    btnSortear.style.display = "none";
    btnReSortear.style.display = "block";
  };

  const createTeamContainer = (time) => {
    let team = document.getElementsByClassName(time);
    let count = 0;

    if (time === "teamA") {
      for (const p of team) {
        p.innerText = teamA[count];
        count++;
      }
    } else {
      for (const p of team) {
        p.innerText = teamB[count];
        count++;
      }
    }
  };
};
