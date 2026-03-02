import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick={() => setGood(good + 1)} text="good" />
      <Button onclick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onclick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};

export default App;
