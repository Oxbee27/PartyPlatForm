export default function DashboardSimple({ metrics }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="card">
          <p className="text-sm font-medium text-forest-500">{metric.label}</p>
          <p className="mt-2 font-display text-2xl font-semibold text-forest-800">{metric.value}</p>
          {metric.note && <p className="mt-1 text-xs text-forest-400">{metric.note}</p>}
        </div>
      ))}
    </div>
  );
}
