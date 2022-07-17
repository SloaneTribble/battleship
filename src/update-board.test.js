import { gameBoardFactory } from "./gameboard";

import { playerFactory } from "./player";

import { updateBoard } from "./update-board";

test.only("Takes a board and identifies activated spaces (attacked, missed or sunk", () => {
  const userBoard = gameBoardFactory("user");

  userBoard.placeShip("dinghy", "vertical", [0, 0]);

  userBoard.receiveAttack([0, 0]);
  userBoard.receiveAttack([0, 1]);

  const user = playerFactory("user");

  expect(userBoard.showHitLocations()).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);

  const updatedBoard = updateBoard(userBoard);

  expect(updatedBoard.hitLocations).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);

  expect(updatedBoard.sunkLocations).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);

  expect();
});
