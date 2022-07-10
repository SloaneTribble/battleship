import { talk } from "./practice";

test.skip("Says hi", () => {
  expect(talk()).toBe("Hi");
});
