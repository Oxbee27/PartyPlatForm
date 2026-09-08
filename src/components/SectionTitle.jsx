export default function SectionTitle({ title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-xl ${alignment}`}>
      <h2 className="font-display text-3xl font-semibold text-forest-800 sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-forest-600">{description}</p>}
    </div>
  );
}
