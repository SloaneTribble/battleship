const shipFactory = (name) => {
  const shipLength = getShipLength(name);
  const shipName = name;
  const isSunk = false;

  // An array of arrays, each containing a coordinate occupied by ship
  const hitLocations = [];

  const hit = function recordHitToHitLocations(location) {
    this.hitLocations.push(location);
    this.isSunk = checkIfSunk(this.hitLocations, this.shipLength);
  };

  return { shipLength, shipName, isSunk, hitLocations, hit };
};

const getShipLength = function measureShip(name) {
  switch (name) {
    case "dinghy":
      return 2;
      break;
    case "dinghy2":
      return 2;
      break;
    case "submarine":
      return 3;
      break;
    case "battleship":
      return 4;
      break;
    case "carrier":
      return 5;
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
