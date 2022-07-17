// Read a player's board and use it to update display

const updateBoard = function readBoardAndUpdateDisplay(board) {
  const owner = board.owner;
  
  const hitLocations = board.showHitLocations();

  const sunkLocations = board.showSunkLocations();

  return { owner, hitLocations, sunkLocations };
};

export { updateBoard };
