import dom from "./modules/dom";
import GameBoard from "./modules/gameBoard";
import "./assets/styles/styles.css";
import GameController from "./modules/gameController";

const screen = dom();
const playerBoard = document.querySelector("#board-player");
const randBtn = document.querySelector("#random");
const startBtn = document.querySelector("#start");

const game = new GameController();

randBtn.addEventListener("click", () => {
  game.player.playerBoard.shuffleShips();
  screen.displayBoard(playerBoard, "player", game.player.playerBoard);
});

document.addEventListener("DOMContentLoaded", () => {
  game.player.playerBoard.generateBoard();
  console.log(game.player.playerBoard.board);
  screen.displayBoard(playerBoard, game.player, game.player.playerBoard);
});

console.log("hello");
