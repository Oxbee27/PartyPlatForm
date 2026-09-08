export default function PageHeader({ kicker, title, description }) {
  return (
    <div className="border-b border-forest-100 bg-mint-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {kicker && <p className="text-sm font-medium text-forest-500">{kicker}</p>}
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-forest-800 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base text-forest-600">{description}</p>
        )}
      </div>
    </div>
  );
}
