import Ship from "./ship";

export default class GameBoard {
  static shipLengths = [5, 4, 3, 3, 2];

  constructor() {
    this.board = this.generateBoard();
    this.ships = [
      new Ship(5, "5"),
      new Ship(4, "4"),
      new Ship(3, "3a"),
      new Ship(3, "3b"),
      new Ship(2, "2"),
    ];
  }

  generateBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      board[i] = [];

      for (let j = 0; j < 10; j++) {
        board[i].push(null);
      }
    }
    return board;
  }

  shuffleShips(ship) {
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
              if (this.board[startY][startX + i] !== null) {
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
              if (this.board[startY + i][startX] !== null) {
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
            this.board[startY][startX + i] = ship.type;
          }
        } else if (shipDirection === "vertical") {
          for (let i = 0; i < ship.length; i++) {
            this.board[startY + i][startX] = ship.type;
          }
        }
      }
    });
  }
}
