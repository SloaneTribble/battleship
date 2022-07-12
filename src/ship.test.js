import { shipFactory } from "./ship";

test.skip("Ship named 'submarine' will have length 3", () => {
  const submarine = shipFactory("submarine");
  expect(submarine.shipLength).toBe(3);
});

test.skip("Hitting a ship at location 2 is recorded in 'hitLocations' property", () => {
  const submarine = shipFactory(3);
  submarine.hit([2, 1]);
  expect(submarine.hitLocations).toStrictEqual([[2, 1]]);
});

test.skip("Calling hit() on a submarine ship 3 times will cause it to sink", () => {
  const submarine = shipFactory("submarine");
  submarine.hit([1, 2]);
  submarine.hit([2, 2]);
  submarine.hit([3, 2]);

  expect(submarine.isSunk).toBe(true);
});
