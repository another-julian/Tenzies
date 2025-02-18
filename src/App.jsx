import React from "react";
import Die from "./components/Die";
import { getNewDiceData } from "./lib/diceData";

function App() {
  const [diceData, setDiceData] = React.useState(() => getNewDiceData());

  const diceElements = diceData.map(() => <Die />);

  return <main>{diceElements}</main>;
}

export default App;
