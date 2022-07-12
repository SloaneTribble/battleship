import { shipFactory } from "./ship";

const gameBoardFactory = (player) => {
  const boardOwner = player;

  /**
   * Keep track of which spaces are occupied, hit or miss
   * Each space will be designated by an array with an x and y value
   */
  const occupiedSpaces = [];

  // Record each ship with its respective coordinates

  const shipLocations = {};

  /**
   * Record each ship object in its entirety
   * They will always be stored in the same order, ascending in length
   */

  const shipObjects = [];

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

    // Keep a record of entire ship

    shipObjects.push(currentShip);

    const currentShipCoordinates = [];

    const length = currentShip.shipLength;

    // If ship is placed horizontally, it will occupy several spaces along x-axis, and vice versa
    const axisIndex = orientation === "horizontal" ? 0 : 1;

    // Use ship length and orientation to spaces that it occupies, add those to gameboard's record

    const startingIndex = startingCoordinate[axisIndex];
    const endingIndex = startingIndex + length - 1;

    if (axisIndex === 0) {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [i, startingCoordinate[1]];
        this.occupiedSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    } else {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [startingCoordinate[0], i];
        this.occupiedSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    }
    shipLocations[currentShip.shipName] = currentShipCoordinates;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    attackedSpaces.push(coordinates);

    const isHit = occupiedSpaces.some((a) =>
      coordinates.every((v, i) => v === a[i])
    );
    if (isHit) {
      const hitShip = checkHit(coordinates);

      logHit(hitShip, coordinates);

      const isSunk = checkStatus(hitShip);
        if (isSunk) {
          sunkShips.push(shipObjects[ship]);
        }

      return `${hitShip} has been hit`;
    } else {
      return "miss";
    }
  };

  // Takes a pair of coordinates and see which boat they belong to
  const checkHit = function checkWhichBoatWasHit(coordinates) {
    for (const ship in shipLocations) {
      const shipSpaces = Object.values(shipLocations[ship]);
      const hit = shipSpaces.some((a) =>
        coordinates.every((v, i) => v === a[i])
      );
      if (hit) return ship;
    }
  };

  const logHit = function recordHit(hitShip, coordinates) {
    for (const ship in shipObjects) {
      if (shipObjects[ship].shipName === hitShip) {
        shipObjects[ship].hit(coordinates);
      }
    }
  };

  const checkStatus = function checkIfShipSank(hitShip) {
    for (const ship in shipObjects){
      if (shipObjects[ship].shipName === hitShip){
        if(shipObjects[ship].isSunk){
          sunkShips.push(shipObjects[ship]);
        }
      }
    }
  };
  return { placeShip, occupiedSpaces, shipLocations, sunkShips, receiveAttack };
};

export { gameBoardFactory };
