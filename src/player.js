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

  const successfulAttacks = [];

  const missedAttacks = [];

  /**
   * Attempts to take a gameBoard object (created with a factory function), and
   * then call that object's receiveAttack method.  receiveAttack() is meant to modify the gameBoard object 
   * and return a string describing the modifications that took place
   */ 
  
  const attack = function attackEnemy(enemyBoard, coordinates) {
    // If AI is attacking, coordinates must be randomly generated
    const target = coordinates;

    const result = enemyBoard.receiveAttack(coordinates);

    logResult(result, coordinates);

    return result;
  };

  const logResult = function pushCoordinatesToArray(result, coordinates) {
    if (result.includes("hit") || result.includes("sunk")) {
      successfulAttacks.push(coordinates);
    } else if (result.includes("miss")) {
      missedAttacks.push(coordinates);
    }
  };

  const player = { missedAttacks, successfulAttacks, attack };
  return player;
};

export { playerFactory };
