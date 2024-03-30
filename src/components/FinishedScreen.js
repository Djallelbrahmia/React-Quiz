function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage > 80 && percentage < 100) emoji = "🎉";

  if (percentage > 50 && percentage < 80) emoji = "🫡";
  if (percentage > 10 && percentage < 50) emoji = "😤";
  if (percentage < 10) emoji = "🤦🏻‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highscore} ponts)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
