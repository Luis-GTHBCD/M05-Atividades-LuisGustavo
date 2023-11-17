function getElements(cell, parent = document) {
    const elements = parent.getElementsByTagName("*");
    const array = [];
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
  
      if (element.classList.contains(cell)) {
        array.push(element);
      }
    }
    return array;
}
  
const cells = [];
const allElements = getElements("cell");
  
for (let i = 0; i < allElements.length; i++) {
    cells.push(allElements[i]);
    allElements[i].addEventListener("click", cellClicked);
}

const statusText = document.getElementById("statusText");
const restart = document.getElementById("restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let playerXScore = 0;
let playerOScore = 0;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", restartGame);
    statusText.textContent = `É a vez do jogador: ${currentPlayer}`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `É a vez do jogador: ${currentPlayer}`;
}

function updateScores() {
    const user1 = document.getElementsByClassName("user_1")[0].getElementsByTagName("span")[0];
    const user2 = document.getElementsByClassName("user_2")[0].getElementsByTagName("span")[0];

    user1.textContent = `${playerXScore}`;
    user2.textContent = `${playerOScore}`;
}


function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `O jogador ${currentPlayer} venceu!`;
        if (currentPlayer === "X") {
            playerXScore++;
        } else {
            playerOScore++;
        }
        updateScores();
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = "Draw";
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `É a vez do jogador: ${currentPlayer}`;
    cells.forEach(cell => (cell.textContent = ""));
    running = true;
}
