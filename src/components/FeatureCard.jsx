export default function FeatureCard({
  title,
  desc,
  icon,
  accent = "var(--primary)",
}) {
  return (
    <div className="feature-card" data-tilt>
      <div
        className="feature-icon"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, ${accent}, transparent)`,
        }}
      >
        <span aria-hidden>{icon}</span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
