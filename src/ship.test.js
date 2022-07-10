import { shipFactory } from "./ship";
import { hit } from "./ship";

test("Ship of length 3 is named 'submarine'", () => {
  const submarine = shipFactory(3);
  expect(submarine.name).toBe("submarine");
});

test("Hitting a ship at location 2 is recorded in 'hitLocations' property", () => {
  const submarine = shipFactory(3);
  submarine.hit(2);
  expect(submarine.hitLocations).toStrictEqual([1]);
});


