import { shipFactory } from "./ship";

const gameBoardFactory = (player) => {
  const boardOwner = player;

  let gameOver = false;

  /**
   * Keep track of which spaces are occupied, hit or miss
   * Each space will be designated by an array with an x and y value
   */
  const occupiedSpaces = [];

  // Record each ship's name with its respective coordinates

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

    const currentShipCoordinates = [];

    const length = currentShip.shipLength;

    // If ship is placed horizontally, it will occupy several spaces along x-axis, and vice versa
    const axisIndex = orientation === "horizontal" ? 0 : 1;

    // Use ship length and orientation to spaces that it occupies, add those to gameboard's record

    const startingIndex = startingCoordinate[axisIndex];
    const endingIndex = startingIndex + length - 1;

    const potentialSpaces = [];

    if (axisIndex === 0) {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [i, startingCoordinate[1]];
        potentialSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    } else {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [startingCoordinate[0], i];
        potentialSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    }

    /**
     *  Before updating gameboard's info, make sure new ship will not overlap others.
     *  Calculate which spaces will be occupied, and make sure those spaces are not in the occupiedSpaces array
     */

    const conflict = checkAvailability(potentialSpaces);

    if (conflict) {
      return "Ships cannot overlap";
    }

    for (const space in potentialSpaces) {
      this.occupiedSpaces.push(potentialSpaces[space]);
    }
    // Keep a record of entire ship object
    shipObjects.push(currentShip);

    shipLocations[currentShip.shipName] = currentShipCoordinates;

    return `${shipName} was placed`;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    attackedSpaces.push(coordinates);

    const isHit = occupiedSpaces.some((a) =>
      coordinates.every((v, i) => v === a[i])
    );
    if (isHit) {
      const hitShip = checkHit(coordinates);

      logHit(hitShip, coordinates);

      const sunk = checkStatus(hitShip);
      if (sunk) {
        return `${hitShip} has been sunk`;
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

  // Take an array of spaces and make sure none of them are occupied
  const checkAvailability = function checkIfSpacesAreOccupied(potentialSpaces) {
    // Iterate through array of potential coords and see if any are occupied
    for (const space in potentialSpaces) {
      const conflict = occupiedSpaces.some((a) =>
        potentialSpaces[space].every((v, i) => v === a[i])
      );
      if (conflict) {
        return true;
      }
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
    for (const ship in shipObjects) {
      if (shipObjects[ship].shipName === hitShip) {
        if (shipObjects[ship].isSunk) {
          sunkShips.push(shipObjects[ship]);
          return true;
        }
      }
    }
  };

  const checkGame = function checkIfGameOver() {
    if (this.sunkShips.length === 2) {
      this.gameOver = !this.gameOver;
    }

    return this.gameOver;
  };

  return {
    checkGame,
    gameOver,
    placeShip,
    occupiedSpaces,
    shipLocations,
    shipObjects,
    sunkShips,
    receiveAttack,
    attackedSpaces,
  };
};

export { gameBoardFactory };
