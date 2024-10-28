import dom from "./modules/dom";
import GameBoard from "./modules/gameBoard";
import "./assets/styles/styles.css";
import GameController from "./modules/gameController";

const playerBoard = document.querySelector("#board-player");
const compBoard = document.querySelector("#board-computer");
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
}

randBtn.addEventListener("click", () => {
  game.player.playerBoard.shuffleShips();
  game.computer.playerBoard.shuffleShips();
  screen.displayBoard(playerBoard, game.player, game.player.playerBoard, game);
});

startBtn.addEventListener("click", () => {
  screen.startGameDOM(compBoard, randBtn);
});

document.addEventListener("DOMContentLoaded", () => {
  game.player.playerBoard.generateBoard();
  game.computer.playerBoard.generateBoard();
  refreshBoards();
});

// TESTING

const testPlayer = document.querySelector("#test-player");
const testComp = document.querySelector("#test-comp");
const testAttack = document.querySelector("#player-attack");

testPlayer.addEventListener("click", () => {
  console.log(JSON.stringify(game.player.playerBoard.board));
});
testComp.addEventListener("click", () => {
  console.log(JSON.stringify(game.computer.playerBoard.board));
});
testAttack.addEventListener("click", () => {
  if (checkAttack()) {
    console.log("comp made an attack");
  }
});

const checkAttack = () => {
  return game.player.playerBoard.board.some((row) => {
    return row.some((cell) => cell.hit || cell.miss);
  });
};
