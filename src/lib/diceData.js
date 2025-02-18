export const getNewDiceData = (num = 10) =>
  Array.from({ length: num }, (v, index) => ({
    id: index,
    value: Math.floor(Math.random() * 6) + 1,
    isHeld: false,
  }));

export const setIsHeld = (prevDiceData, id) =>
  prevDiceData.map((die) =>
    die.id === id ? { ...die, isHeld: !die.isHeld } : die
  );
