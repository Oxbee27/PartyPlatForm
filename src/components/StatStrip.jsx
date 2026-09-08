export default function StatStrip({ stats }) {
  return (
    <div className="grid grid-cols-2 divide-y divide-forest-700 border-y border-forest-700 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
      {stats.map((stat) => (
        <div key={stat.label} className="px-5 py-6 text-center sm:text-left">
          <p className="font-display text-3xl font-semibold text-paper">{stat.value}</p>
          <p className="mt-1 text-sm text-forest-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
