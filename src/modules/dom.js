export default function dom() {
  function displayBoard(domBoard, player, gameBoard) {
    domBoard.innerHTML = "";

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");

        cell.classList.add("cell");
        if (gameBoard.board[x][y].shipType !== null) {
          cell.classList.add("ship");
        } else if (gameBoard.board[x][y].hit) {
          cell.classList.add("hit");
        } else if (gameBoard.board[x][y].miss) {
          cell.classList.add("miss");
        }
        cell.dataset.type = player.type;
        cell.dataset.x = x;
        cell.dataset.y = y;

        domBoard.appendChild(cell);
      }
    }
  }

  return { displayBoard };
}
