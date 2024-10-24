import GameBoard from "./gameBoard";

export default class Player {
  constructor(playerType) {
    this.playerType = playerType;
    this.board = new GameBoard();
  }
}
