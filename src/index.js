import dom from "./modules/dom";
import GameBoard from "./modules/gameBoard";
import "./assets/styles/styles.css";
import GameController from "./modules/gameController";

const boardContainer = document.querySelector("#board-container");
let playerBoard = document.querySelector("#board-player");
let compBoard = document.querySelector("#board-computer");
const randBtn = document.querySelector("#random");
const startBtn = document.querySelector("#start");

const screen = dom();
const game = new GameController(refreshBoards);

function refreshBoards() {
  screen.displayBoard(playerBoard, game.player, game.player.playerBoard, game);
  screen.displayBoard(
    compBoard,
    game.computer,
    game.computer.playerBoard,
    game
  );

  if (game.winner) {
    console.log("winner");
  }

  screen.checkWinnerDOM(game, boardContainer);
}

randBtn.addEventListener("click", () => {
  game.player.playerBoard.shuffleShips();
  game.computer.playerBoard.shuffleShips();
  screen.displayBoard(playerBoard, game.player, game.player.playerBoard, game);
});

startBtn.addEventListener("click", () => {
  screen.startGameDOM(compBoard, randBtn);
});

document.addEventListener("click", (e) => {
  if (e.target.id === "reset-btn") {
    game.resetGame();
    screen.resetGameDOM(boardContainer);
    playerBoard = document.querySelector("#board-player");
    compBoard = document.querySelector("#board-computer");
    randBtn.style.pointerEvents = "auto";
    refreshBoards();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  game.player.playerBoard.generateBoard();
  game.computer.playerBoard.generateBoard();
  refreshBoards();
});
