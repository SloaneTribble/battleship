import { shipFactory } from "./ship";

const gameBoardFactory = (player) => {
  const boardOwner = player;

  /**
   * Keep track of which spaces are occupied, hit or miss
   * Each space will be designated by an array with an x and y value
   */
  const occupiedSpaces = [];

  /**
   * Keep track of which spaces have been attacked, regardless of hit or miss
   */
  const attackedSpaces = [];

  // Whenever a ship is sunk, add to this array
  const sunkShips = [];

  const placeShip = function placeShipWithOrientation(
    shipName,
    orientation,
    startingCoordinate
  ) {
    const currentShip = shipFactory(shipName);

    const length = currentShip.shipLength;
    // If ship is placed horizontally, it will occupy several spaces along x-axis, and vice versa
    const axisIndex = orientation === "horizontal" ? 0 : 1;

    // Use ship length and orientation to spaces that it occupies, add those to gameboard's record

    const startingIndex = startingCoordinate[axisIndex];
    const endingIndex = startingIndex + length - 1;

    if (axisIndex === 0) {
      for (let i = startingIndex; i <= endingIndex; i++) {
        occupiedSpaces.push([i, startingCoordinate[1]]);
      }
    } else {
      for (let i = startingIndex; i <= endingIndex; i++) {
        occupiedSpaces.push([startingCoordinate[0], i]);
      }
    }
  };

  return { placeShip, occupiedSpaces };
};

export { gameBoardFactory };
