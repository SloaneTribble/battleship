import { gameBoardFactory } from "./gameboard";

test("Placing a dingy will cause gameboard to have two occupied spaces", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.occupiedSpaces.length).toBe(2);
});

test("Placing a submarine vertically")
