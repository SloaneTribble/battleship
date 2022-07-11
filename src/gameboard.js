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

  const placeShip = function placeShipWithOrientation(ship, orientation) {
    
  };
};
