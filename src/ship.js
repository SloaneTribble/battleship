const shipFactory = (length) => {
  const shipLength = length;
  const name = getShipName(length);
  const isSunk = false;
  const hitLocations = [];

  const hit = function recordHitToHitLocations(location) {
    this.hitLocations.push(location - 1);
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

export { shipFactory };
