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

test("Placing a dingy will be recorded in the gameboard's shipLocations section", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.shipLocations).toStrictEqual({
    dingy: [
      [0, 0],
      [0, 1],
    ],
  });
});

test("Receiving a hit where dingy is placed will alert that dingy has been hit", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.receiveAttack([0, 1])).toBe("dingy has been hit");
});

test("Attacking a spot with no boats will return a miss", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  expect(playerBoard.receiveAttack([3, 3])).toBe("miss");
});

// Test with other boats, and make sure that misses are not recorded as hits

test("Hitting a dingy twice will cause it to sink", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  playerBoard.receiveAttack([0, 0]);
  playerBoard.receiveAttack([0, 1]);

  expect(playerBoard.sunkShips[0].shipName).toBe("dingy");
});

test("Player may not place overlapping ships", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [1, 1]);
  expect(playerBoard.placeShip("submarine", "horizontal", [0, 1])).toBe(
    "Ships cannot overlap"
  );
});
