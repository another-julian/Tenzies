import React from "react";
import Die from "./components/Die";
import Confetti from "./components/Confetti";
import { getNewDiceData, setIsHeld, rollDiceData } from "./lib/diceData";

function App() {
  const [diceData, setDiceData] = React.useState(() => getNewDiceData());

  const gameWon = diceData.every(
    (dieData) => dieData.isHeld && dieData.value === diceData[0].value
  );

  const diceElements = diceData.map((dieData) => (
    <Die
      key={dieData.id}
      value={dieData.value}
      isHeld={dieData.isHeld}
      onClick={() => hold(dieData.id)}
    />
  ));

  function hold(id) {
    setDiceData((prev) => setIsHeld(prev, id));
  }

  function rollDice() {
    if (gameWon) setDiceData(getNewDiceData());
    else setDiceData((prev) => rollDiceData(prev));
  }

  return (
    <main className="game-container">
      {gameWon ? <Confetti /> : null}
      <header>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
