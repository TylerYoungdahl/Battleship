import GameController from "../modules/gameController";

const refreshBoards = () => {
  return true;
};

test("Player receives attack from computer", () => {
  const game = new GameController(refreshBoards);

  game.compTurn();

  const checkAttack = () => {
    return game.player.playerBoard.board.some((row) => {
      return row.some((cell) => cell.hit || cell.miss);
    });
  };

  expect(checkAttack()).toBe(true);
});

test("Player's gameboard receives attack in new game", () => {
  const game = new GameController(refreshBoards);

  game.computer.playerBoard.receiveAttack(0, 0);

  expect(game.computer.playerBoard.board[0][0].miss).toBe(true);
});

test("Computer attacks after player", () => {
  const game = new GameController(refreshBoards);

  game.playerTurn(0, 0);
  const checkAttack = () => {
    return game.player.playerBoard.board.some((row) => {
      return row.some((cell) => cell.hit || cell.miss);
    });
  };

  expect(checkAttack()).toBe(true);
});

test("Sinking all ships results in a winner", () => {
  const game = new GameController(refreshBoards);

  game.computer.playerBoard.ships.forEach((ship) => {
    for (let i = 0; i < ship.length; i++) {
      ship.hit();
    }
  });

  game.checkWinner(game.player, game.computer);

  expect(game.winner).toBe("player");
});

test("reset game method resets all values", () => {
  const game = new GameController(refreshBoards);

  game.player.playerBoard.ships[0].sunk = true;
  game.resetGame();

  expect(game.player.playerBoard.ships[0].sunk).toBe(false);
});
