import React from "react";
import Die from "./components/Die";
import { getNewDiceData, setIsHeld } from "./lib/diceData";

function App() {
  const [diceData, setDiceData] = React.useState(() => getNewDiceData());

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

  return (
    <main className="game-container">
      <header>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn">Roll</button>
    </main>
  );
}

export default App;
