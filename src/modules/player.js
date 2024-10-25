import GameBoard from "./gameBoard";

export default class Player {
  constructor(playerType) {
    this.playerType = playerType;
    this.playerBoard = new GameBoard();
  }
}
