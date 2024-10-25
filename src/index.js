import dom from "./modules/dom";
import GameBoard from "./modules/gameBoard";
import "./assets/styles/styles.css";

const screen = dom();
const board1 = new GameBoard();
const btn = document.querySelector("#test-btn");

board1.generateBoard();

btn.addEventListener("click", () => {
  board1.shuffleShips();
  screen.displayBoard("player", board1);
  console.log(board1.board);
  console.log("test");
});

screen.displayBoard("player", board1);
// screen.displayBoard("computer");

console.log("hello");
