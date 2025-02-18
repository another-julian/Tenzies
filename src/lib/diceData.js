export const getNewDiceData = (num = 10) =>
  Array.from({ length: num }, (v, index) => ({
    id: index,
    value: Math.floor(Math.random() * 6) + 1,
    isHeld: false,
  }));

export const setIsHeld = (prevDiceData, id) =>
  prevDiceData.map((dieData) =>
    dieData.id === id ? { ...dieData, isHeld: !dieData.isHeld } : dieData
  );

export const rollDiceData = (prevDiceData) =>
  prevDiceData.map((dieData) =>
    dieData.isHeld
      ? dieData
      : { ...dieData, value: Math.floor(Math.random() * 6) + 1 }
  );
