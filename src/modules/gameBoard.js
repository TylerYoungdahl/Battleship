export default class GameBoard {
  constructor(misses, hits, ships) {
    this.misses = misses;
    this.hits = hits;
    this.board = grid;
    this.ships = ships;
  }

  generateBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      board[i] = [];

      for (let j = 0; j < 10; j++) {
        board[i].push("");
      }
    }
  }
}
