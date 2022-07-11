const shipFactory = (length) => {
  const shipLength = length;
  const name = getShipName(length);
  const isSunk = false;

  // An array of arrays, each containing a coordinate occupied by ship
  const hitLocations = [];

  const hit = function recordHitToHitLocations(location) {
    this.hitLocations.push(location);
    this.isSunk = checkIfSunk(this.hitLocations, this.shipLength);
  };

  return { shipLength, name, isSunk, hitLocations, hit };
};

const getShipName = function nameShip(length) {
  switch (length) {
    case 2:
      return "dingy";
      break;
    case 3:
      return "submarine";
      break;
    case 4:
      return "battleship";
      break;
    case 5:
      return "carrier";
      break;
  }
};

const checkIfSunk = function reviewHitLocations(hits, shipLength) {
  const numberOfHits = hits.length;
  if (numberOfHits === shipLength) {
    return true;
  }
  return false;
};

export { shipFactory };
