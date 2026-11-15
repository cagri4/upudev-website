import type { WorkChainDictionary } from "@/content/work-chain";

/**
 * Uçtan uca iş zinciri: binnenkomst → AI zet klaar → jij keurt goed → verzonden/geboekt
 * + "Twijfelt hij? Dan stopt hij" güvencesi + "Werkt in je bestaande systemen" şeridi.
 * Ana sayfa ve iki landing ortak kullanır. Sade/kurumsal: beyaz kartlar, lacivert vurgu, insan adımı belirgin.
 */
export function WorkChain({
  dict,
  id = "zo-werkt-het",
  className = "",
  sloganInHero = false,
}: {
  dict: WorkChainDictionary;
  id?: string;
  className?: string;
  /** Hero H1 zaten slogan ise zincir başlığı altTitle olur (tekrar yok). */
  sloganInHero?: boolean;
}) {
  return (
    <section id={id} className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">{dict.eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#122d54] md:text-4xl">{sloganInHero ? dict.altTitle : dict.title}</h2>
      <p className="mt-3 max-w-2xl text-lg text-neutral-600">{dict.intro}</p>

      <ol className="mt-10 grid gap-3 md:grid-cols-4 md:gap-0">
        {dict.steps.map((s, i) => (
          <li key={s.label} className="relative flex md:block">
            <div
              className={`flex-1 rounded-2xl border p-5 md:mx-2 md:h-full ${
                s.human ? "border-[#122d54] bg-[#122d54] text-white shadow-md" : "border-neutral-200 bg-white"
              }`}
            >
              <span className={`font-mono text-sm font-bold ${s.human ? "text-[#8FD8CE]" : "text-[#1D7F75]"}`}>{s.label}</span>
              <h3 className={`mt-2 text-lg font-bold ${s.human ? "text-white" : "text-neutral-900"}`}>{s.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${s.human ? "text-white/85" : "text-neutral-600"}`}>{s.text}</p>
            </div>
            {i < dict.steps.length - 1 ? (
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 text-xl leading-none text-[#1D7F75] md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="flex gap-4 rounded-2xl border-2 border-[#8A62B8] bg-[#F3EDFA] p-5">
          <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8A62B8] text-lg font-bold text-white">
            ?
          </span>
          <div>
            <p className="text-base font-bold text-[#3F2A57]">{dict.doubt.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#3F2A57]">{dict.doubt.text}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <p className="text-base font-bold text-neutral-900">{dict.systems.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">{dict.systems.text}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {dict.systems.items.map((it) => (
              <li key={it} className="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700">
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
