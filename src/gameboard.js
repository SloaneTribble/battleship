import { shipFactory } from "./ship";

import { getRandomNumberBetween } from "./player";

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

  const missedLocations = [];

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
      occupiedSpaces.push(potentialSpaces[space]);
    }
    // Keep a record of entire ship object
    shipObjects.push(currentShip);

    shipLocations[currentShip.shipName] = currentShipCoordinates;

    return `${shipName} was placed`;
  };

  const autoPlace = function aiPlaceShip(name) {
    const coinFlip = getRandomNumberBetween(0, 1);
    let alignment = "";
    coinFlip === 0 ? (alignment = "vertical") : (alignment = "horizontal");

    let placed = placeShip(name, alignment, generateCoordinates());

    while (placed === "Out of bounds" || placed === "Ships cannot overlap") {
      placed = placeShip(name, alignment, generateCoordinates());
    }
    return placed;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    // Coordinates must be stored in board cells as _x_y to prevent CSS errors

    if (typeof coordinates === "string" && coordinates !== "auto") {
      coordinates = format(coordinates);
    }

    // Must check if spot has already been attacked
    const hitConflict = checkOverlap(attackedSpaces, coordinates);

    if (hitConflict) {
      return "cannot attack same spot twice";
    }

    this.attackedSpaces.push(coordinates);

    const isHit = checkOverlap(occupiedSpaces, coordinates);
    if (isHit) {
      const hitShip = checkHit(coordinates);

      logHit(hitShip, coordinates);

      const sunk = checkStatus(hitShip);
      if (sunk) {
        return ["sunk", hitShip];
      }
      return ["struck", hitShip];
    } else {
      missedLocations.push(coordinates);
      return "missed";
    }
  };

  const checkOverlap = function checkIfCoordinatesMatchArray(
    array,
    coordinates
  ) {
    return array.some((a) => coordinates.every((v, i) => v === a[i]));
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
      if (coord[0] > 11 || coord[1] > 11) {
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
    if (this.sunkShips.length === 5) {
      this.gameOver = !this.gameOver;
    }

    return this.gameOver;
  };

  const showHitLocations = function iterateThroughShipObjects() {
    const hits = [];
    for (let ship of shipObjects) {
      for (let hit of ship.hitLocations) {
        hits.push(hit);
      }
    }
    return hits;
  };

  const showSunkLocations = function iterateThroughSunkShips() {
    const sunkLocations = [];
    for (let ship of sunkShips) {
      for (let hit of ship.hitLocations) {
        sunkLocations.push(hit);
      }
    }
    return sunkLocations;
  };

  const generateCoordinates = function generateXAndY() {
    let target = "invalid";

    while (target === "invalid") {
      let possibleCoordinates = [];
      let x = getRandomNumberBetween(0, 11);
      let y = getRandomNumberBetween(0, 11);
      possibleCoordinates.push(x);
      possibleCoordinates.push(y);

      let conflict = board.checkOverlap(
        board.occupiedSpaces,
        possibleCoordinates
      );

      if (!conflict) {
        target = "valid";
        return possibleCoordinates;
      }
    }
  };

  const board = {
    checkGame,
    gameOver,
    placeShip,
    autoPlace,
    occupiedSpaces,
    shipLocations,
    shipObjects,
    sunkShips,
    receiveAttack,
    attackedSpaces,
    missedLocations,
    checkOverlap,
    showHitLocations,
    showSunkLocations,
  };

  return board;
};

export { gameBoardFactory, format };

const format = function convertCellToArray(coordinates) {
  let formatted = coordinates.split("_");
  formatted.shift();
  let x;
  let y;
  formatted[0] === "0" ? (x = 0) : (x = parseInt(formatted[0]));
  formatted[1] === "0" ? (y = 0) : (y = parseInt(formatted[1]));

  formatted = [x, y];
  coordinates = formatted;
  return coordinates;
};
