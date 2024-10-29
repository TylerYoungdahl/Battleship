import Player from "./player";

export default class GameController {
  constructor(refreshBoards) {
    this.player = new Player("player");
    this.computer = new Player("computer");
    this.winner = null;
    this.refreshBoards = refreshBoards;

    this.player.playerBoard.generateBoard();
    this.computer.playerBoard.generateBoard();
  }

  playerTurn(x, y) {
    this.computer.playerBoard.receiveAttack(x, y);

    this.checkWinner(this.player, this.computer);

    this.compTurn();
  }

  compTurn() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const coordinate = this.player.playerBoard.board[x][y];

    if (this.winner) {
      this.refreshBoards();

      return;
    } else if (!coordinate.hit && !coordinate.miss) {
      this.player.playerBoard.receiveAttack(x, y);

      this.checkWinner(this.computer, this.player);

      this.refreshBoards();
    } else {
      this.compTurn();
    }
  }

  checkWinner(player, opponent) {
    if (opponent.playerBoard.checkAllShipsSunk()) {
      this.winner = player.playerType;
    }
  }
}
