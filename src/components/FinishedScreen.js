function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage > 80 && percentage < 100) emoji = "🎉";

  if (percentage > 50 && percentage < 80) emoji = "🫡";
  if (percentage > 10 && percentage < 50) emoji = "😤";
  if (percentage < 10) emoji = "🤦🏻‍♂️";
  console.log(emoji);
  return (
    <p className="result">
      {emoji} You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishedScreen;
