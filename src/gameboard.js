import { shipFactory } from "./ship";

const gameBoardFactory = function makeGameBoard() {
  const gameOver = false;

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

    const outOfBounds = checkBounds(potentialSpaces);

    if (outOfBounds) {
      return "Out of bounds";
    }

    for (const space in potentialSpaces) {
      this.occupiedSpaces.push(potentialSpaces[space]);
    }
    // Keep a record of entire ship object
    this.shipObjects.push(currentShip);

    this.shipLocations[currentShip.shipName] = currentShipCoordinates;

    return `${shipName} was placed`;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    this.attackedSpaces.push(coordinates);

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

  // Take an array of spaces and make sure none are out of bounds
  const checkBounds = function checkIfOutOfBounds(potentialSpaces) {
    for (const space in potentialSpaces) {
      let coord = potentialSpaces[space];
      if (coord[0] > 10 || coord[1] > 10) {
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

  const board = {
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

  return board;
};

export { gameBoardFactory };
