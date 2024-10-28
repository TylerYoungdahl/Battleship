export default function dom() {
  function displayBoard(domBoard, player, gameBoard, game) {
    domBoard.innerHTML = "";

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");

        cell.classList.add("cell");
        if (gameBoard.board[x][y].shipType && !gameBoard.board[x][y].hit) {
          cell.classList.add("ship");
        } else if (gameBoard.board[x][y].hit) {
          cell.classList.add("hit");
        } else if (gameBoard.board[x][y].miss) {
          cell.classList.add("miss");
        }

        if (
          player.playerType === "computer" &&
          !gameBoard.board[x][y].hit &&
          !gameBoard.board[x][y].miss
        ) {
          cell.addEventListener("click", (e) => {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            game.playerTurn(x, y);
            displayBoard(domBoard, player, gameBoard, game);
          });
        }

        cell.dataset.type = player.playerType;
        cell.dataset.x = x;
        cell.dataset.y = y;

        domBoard.appendChild(cell);
      }
    }
  }

  function startGameDOM(compBoard, randBtn) {
    compBoard.style.pointerEvents = "auto";
    randBtn.style.pointerEvents = "none";
  }

  return { displayBoard, startGameDOM };
}
