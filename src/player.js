/**
 * playerFactory will take a name and give that player a gameboard
 * with ships placed upon it.  Player can have an attack function
 * that calls receiveAttack() on the enemy board.
 *
 * It will be necessary to keep track of the player's own ships, while also
 * providing the human player with a display of the enemy's attacked coordinates
 * The human player should be able to see which attacks failed or succeeded
 */

const playerFactory = function createPlayer(playerName) {
  const name = playerName;

  const turn = false;

  const successfulAttacks = [];

  const missedAttacks = [];

  /**
   * Attempts to take a gameBoard object (created with a factory function), and
   * then call that object's receiveAttack method.  receiveAttack() is meant to modify the gameBoard object
   * and return a string describing the modifications that took place
   */

  const attack = function attackEnemy(enemyBoard, coordinates) {
    // If AI is attacking, generate random, available coordinates
    if (coordinates === "auto") {
      coordinates = generateCoordinates(enemyBoard);

      if (coordinates === "No available spaces") {
        return "No available spaces";
      }
    }

    const result = enemyBoard.receiveAttack(coordinates);

    logResult(result, coordinates);

    return result;
  };

  const generateCoordinates = function generateXAndY(board) {
    let target = "invalid";

    while (target === "invalid") {
      if (board.attackedSpaces.length > 256) {
        return "No available spaces";
      }
      let possibleCoordinates = [];
      let x = getRandomNumberBetween(0, 15);
      let y = getRandomNumberBetween(0, 15);
      possibleCoordinates.push(x);
      possibleCoordinates.push(y);

      let conflict = board.checkOverlap(
        board.attackedSpaces,
        possibleCoordinates
      );

      if (!conflict) {
        target = "valid";
        return possibleCoordinates;
      }
    }
  };

  const logResult = function pushCoordinatesToArray(result, coordinates) {
    if (result.includes("hit") || result.includes("sunk")) {
      successfulAttacks.push(coordinates);
    } else if (result.includes("miss")) {
      missedAttacks.push(coordinates);
    }
  };

  const getSuccessfulAttacks = function showSuccess() {
    return this.successfulAttacks;
  };

  const player = {
    missedAttacks,
    successfulAttacks,
    attack,
    getSuccessfulAttacks,
    generateCoordinates,
    turn,
  };
  return player;
};

export { playerFactory, getRandomNumberBetween };

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
