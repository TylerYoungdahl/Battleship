import Ship from "./ship";

export default class GameBoard {
  static shipLengths = [5, 4, 3, 3, 2];

  constructor() {
    this.board = [];
    this.ships = [
      new Ship(5, "5"),
      new Ship(4, "4"),
      new Ship(3, "3a"),
      new Ship(3, "3b"),
      new Ship(2, "2"),
    ];
  }

  generateBoard() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];

      for (let j = 0; j < 10; j++) {
        this.board[i].push({
          empty: true,
          shipType: null,
          hit: false,
          miss: false,
        });
      }
    }
    return this.board;
  }

  receiveAttack(x, y) {
    if (this.board[x][y].empty) {
      this.board[x][y].empty = false;
      this.board[x][y].miss = true;
    } else if (this.board[x][y].shipType !== null) {
      this.board[x][y].hit = true;
    }
  }

  shuffleShips() {
    this.board = [];
    this.generateBoard();

    this.ships.forEach((ship) => {
      let shipDirection = Math.random() < 0.5 ? "vertical" : "horizontal";

      let startX = Math.floor(Math.random() * 10);
      let startY = Math.floor(Math.random() * 10);

      let canPlace = false;

      while (!canPlace) {
        if (shipDirection === "horizontal") {
          if (startX + ship.length <= 10) {
            canPlace = true;

            for (let i = 0; i < ship.length; i++) {
              if (!this.board[startY][startX + i].empty) {
                canPlace = false;

                break;
              }
            }
          }
        }

        if (shipDirection === "vertical") {
          if (startY + ship.length <= 10) {
            canPlace = true;

            for (let i = 0; i < ship.length; i++) {
              if (!this.board[startY + i][startX].empty) {
                canPlace = false;

                break;
              }
            }
          }
        }

        if (!canPlace) {
          startX = Math.floor(Math.random() * 10);
          startY = Math.floor(Math.random() * 10);
          shipDirection = Math.random() < 0.5 ? "vertical" : "horizontal";
        }
      }

      if (canPlace) {
        if (shipDirection === "horizontal") {
          for (let i = 0; i < ship.length; i++) {
            this.board[startY][startX + i].shipType = ship.type;
          }
        } else if (shipDirection === "vertical") {
          for (let i = 0; i < ship.length; i++) {
            this.board[startY + i][startX].shipType = ship.type;
          }
        }
      }
    });
  }
}
