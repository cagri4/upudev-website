type AboutSectionProps = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
};

export function AboutSection({ badge, title, description, bullets }: AboutSectionProps) {
  return (
    <section className="io-about-section" id="hakkimizda">
      <div className="io-wrap">
        <div className="io-two-col">
          <article>
            <p className="io-eyebrow">{badge}</p>
            <h2>{title}</h2>
            <p className="io-lead-small">{description}</p>
          </article>
          <article className="io-notes">
            {bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
