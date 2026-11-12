type AboutSectionProps = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  /** Küçük güven şeridi (ör. 50+ projecten · 15+ jaar). */
  stats?: { value: string; label: string }[];
};

export function AboutSection({ badge, title, description, bullets, stats }: AboutSectionProps) {
  return (
    <section className="io-about-section" id="hakkimizda">
      <div className="io-wrap">
        <div className="io-two-col">
          <article>
            <p className="io-eyebrow">{badge}</p>
            <h2>{title}</h2>
            <p className="io-lead-small">{description}</p>
            {stats?.length ? (
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-300/70 pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-[#122d54]">{s.value}</dd>
                    <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
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
