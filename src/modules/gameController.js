import Player from "./player";

export default class GameController {
  constructor() {
    this.player = new Player("player");
    this.computer = new Player("computer");
  }

  startGame() {
    this.computer.board.shuffleShips();
  }
}
