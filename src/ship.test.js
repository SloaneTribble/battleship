import { shipFactory } from "./ship";

test("Ship of length 3 is named 'submarine'", () => {
  const submarine = shipFactory(3);
  expect(submarine.name).toBe("submarine");
});

test("Hitting a ship at location 2 is recorded in 'hitLocations' property", () => {
  const submarine = shipFactory(3);
  submarine.hit([2, 1]);
  expect(submarine.hitLocations).toStrictEqual([[2, 1]]);
});

test("Calling hit() on a 3-length ship 3 times will cause it to sink", () => {
  const submarine = shipFactory(3);
  submarine.hit([1, 2]);
  submarine.hit([2, 2]);
  submarine.hit([3, 2]);

  expect(submarine.isSunk).toBe(true);
});
