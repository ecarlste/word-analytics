type StatDisplayProps = {
  statNumber: number;
  statLabel: string;
};

function StatDisplay({ statNumber, statLabel }: StatDisplayProps) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${
          statNumber < 0 ? "stat__number--limit" : ""
        }`}
      >
        {statNumber}
      </span>
      <h2 className="second-heading">{statLabel}</h2>
    </section>
  );
}

export default StatDisplay;
