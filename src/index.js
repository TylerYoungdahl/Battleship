import dom from "./modules/dom";
import GameBoard from "./modules/gameBoard";
import "./assets/styles/styles.css";
import GameController from "./modules/gameController";

const playerBoard = document.querySelector("#board-player");
const compBoard = document.querySelector("#board-computer");
const randBtn = document.querySelector("#random");
const startBtn = document.querySelector("#start");

const screen = dom();
const game = new GameController();

randBtn.addEventListener("click", () => {
  game.player.playerBoard.shuffleShips();
  screen.displayBoard(playerBoard, "player", game.player.playerBoard);
});

document.addEventListener("DOMContentLoaded", () => {
  game.player.playerBoard.generateBoard();
  game.computer.playerBoard.generateBoard();
  screen.displayBoard(playerBoard, game.player, game.player.playerBoard);
  screen.displayBoard(compBoard, game.computer, game.computer.playerBoard);
});
