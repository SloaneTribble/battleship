import { gameBoardFactory } from "./gameboard";

test("Placing a dingy will cause gameboard to have two occupied spaces", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.occupiedSpaces.length).toBe(2);
});

test("Placing a dingy vertically will cause the correct spaces to be occupied", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.occupiedSpaces).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);
});

test("Placing a carrier horizontally will cause correct spaces to be occupied", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("carrier", "horizontal", [4, 3]);

  expect(playerBoard.occupiedSpaces).toStrictEqual([
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);
});

test("Placing a dingy will be recorded in the gameboard's ships section", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.ships).toStrictEqual({
    dingy: [
      [0, 0],
      [0, 1],
    ],
  });
});

test.only("Receiving a hit where dingy is placed will alert that dingy has been hit", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.receiveAttack([0, 1])).toBe("dingy has been hit");
});
