import Player from "./player";

export default class GameController {
  constructor() {
    this.player = new Player("player");
    this.computer = new Player("computer");
    this.player.playerBoard.generateBoard();
    this.computer.playerBoard.generateBoard();
  }

  compTurn() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const coordinate = this.player.playerBoard.board[x][y];

    if (!coordinate.hit && !coordinate.miss) {
      this.player.playerBoard.receiveAttack(x, y);
    }
    //  else {
    //   this.compTurn();
    // }
  }

  checkWinner(player) {
    if (player.playerBoard.checkAllShipsSunk()) {
      console.log(`${player.playerType} wins`);
    }
  }
}
