import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral, all }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine
        text="average"
        value={(good * 1 + neutral * 0 + bad * -1) / all}
      />
      <StatisticLine text="positive" value={(good / all) * 100 + "%"} />
    </div>
  );
};

export default Statistics;
