export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some tasks to complete 😁 </em>
      </p>
    );

  const numItems = items.length;
  const numComp = items.filter((item) => item.packed).length;
  const percentage = Math.round((numComp / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "All tasks completed! Good Work 😎 "
            : `You have ${numItems} tasks on your list, and you have already completed ${numComp} (${percentage}%)`}
        </em>
      </footer>
    </>
  );
}
