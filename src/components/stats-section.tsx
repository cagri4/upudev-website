import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  note: string;
};

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="io-wrap py-10 md:py-12">
        <div className="grid rounded-2xl border border-neutral-200 bg-white md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={cn(
                "px-7 py-6 text-center",
                index < stats.length - 1 && "border-b border-neutral-200 md:border-r md:border-b-0",
              )}
            >
              <p className="io-stat-value text-5xl font-bold tracking-tight md:text-6xl">
                {stat.value}
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
                {stat.label}
              </h3>
              <small className="mt-2 block text-base leading-relaxed text-neutral-600">
                {stat.note}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
