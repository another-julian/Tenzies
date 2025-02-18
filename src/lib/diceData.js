export function getNewDiceData(num = 10) {
  return Array.from({ length: num }, (v, index) => ({
    id: index,
    value: Math.floor(Math.random() * 6) + 1,
    isHeld: false,
  }));
}
