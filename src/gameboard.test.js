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

test("Hitting a dingy twice will cause it to sink", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  playerBoard.receiveAttack([0, 0]);
  playerBoard.receiveAttack([0, 1]);

  expect(playerBoard.sunkShips[0].shipName).toBe("dingy");
});

test("No spot may be attacked twice", ()=>{
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);

  playerBoard.receiveAttack([0, 0]);
  const secondHit = playerBoard.receiveAttack([0, 0]);

  expect(secondHit).toBe("cannot attack same spot twice");
  expect(playerBoard.sunkShips.length).toBe(0);
})

test("Player may not place overlapping ships", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [1, 1]);
  expect(playerBoard.placeShip("submarine", "horizontal", [0, 1])).toBe(
    "Ships cannot overlap"
  );
});

test("Gameboard should recognize when all its ships are sunk", () => {
  const playerBoard = gameBoardFactory("Human");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);
  playerBoard.placeShip("dingy2", "vertical", [1, 0]);

  playerBoard.receiveAttack([0, 0]);
  playerBoard.receiveAttack([0, 1]);
  playerBoard.receiveAttack([1, 0]);
  playerBoard.receiveAttack([1, 1]);

  expect(playerBoard.checkGame()).toBe(true);
});

test("Multiple gameboards do not conflict with one another", () => {
  const playerBoard = gameBoardFactory("Human");
  const enemyBoard = gameBoardFactory("Foe");

  playerBoard.placeShip("dingy", "vertical", [0, 0]);
  playerBoard.placeShip("dingy2", "vertical", [1, 0]);

  enemyBoard.placeShip("dingy", "vertical", [0, 0]);
  enemyBoard.placeShip("dingy2", "vertical", [1, 0]);

  playerBoard.receiveAttack([0, 0]);
  playerBoard.receiveAttack([0, 1]);
  playerBoard.receiveAttack([1, 0]);
  playerBoard.receiveAttack([1, 1]);

  expect(playerBoard.checkGame()).toBe(true);
  expect(enemyBoard.checkGame()).toBe(false);
  expect(enemyBoard.sunkShips.length).toBe(0);
});

test("Player may not place ship out of horizontal bounds", () => {
  const playerBoard = gameBoardFactory("Human");

  expect(playerBoard.placeShip("dingy", "vertical", [11, 0])).toBe(
    "Out of bounds"
  );
});

test("Player may not place ship out of vertical bounds", () => {
  const playerBoard = gameBoardFactory("Human");

  expect(playerBoard.placeShip("dingy", "vertical", [0, 11])).toBe(
    "Out of bounds"
  );
});
