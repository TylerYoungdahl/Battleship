export function displayBoard(player) {
  const board = document.querySelector(`#board-${player}`);

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add(`cell-${player}`);

    board.appendChild(cell);
  }
}
