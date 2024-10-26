import Player from "./player";

export default class GameController {
  constructor() {
    this.player = new Player("player");
    this.computer = new Player("computer");
    this.playerTurn = false;
  }
}
