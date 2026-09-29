const organisations = [
  "IGNITE FOUNDATION",
  "THE GREATNESS FORUM",
  "IMPACT AFRICA",
  "KINGDOM BUILDERS",
  "YOUTH RISE",
  "THE LEGACY INITIATIVE",
  "GREATNESS HUB",
  "IGNITE WOMEN",
];

const firstRow = [...organisations, ...organisations];
const secondRow = [
  ...organisations.slice(4),
  ...organisations.slice(0, 4),
  ...organisations.slice(4),
  ...organisations.slice(0, 4),
];

export default function Outreach() {
  return (
    <section
      aria-labelledby="outreach-heading"
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
            Our Impact
          </span>

          <h2
            id="outreach-heading"
            className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
          >
            Movements, We are{" "}
            <span className="text-orchid">Proud to Fuel</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            Beyond the four walls of the church — these are the platforms,
            foundations and forums Ignite Outreach has helped birth and sustain
            to make greatness common across society.
          </p>
        </div>
      </div>

      {/* Organisation marquee */}
      <div className="relative mt-16 space-y-5">
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32"
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32"
        />

        {/* First row */}
        <div className="group overflow-hidden">
          <div className="flex w-max animate-[outreach-marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {firstRow.map((organisation, index) => (
              <OrganisationCard
                key={`${organisation}-${index}`}
                name={organisation}
              />
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="group overflow-hidden">
          <div className="flex w-max animate-[outreach-marquee-reverse_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {secondRow.map((organisation, index) => (
              <OrganisationCard
                key={`${organisation}-${index}`}
                name={organisation}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="mx-auto mt-14 flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-8 bg-gold/60" />
          Making greatness common
          <span className="h-px w-8 bg-gold/60" />
        </div>
      </div>
    </section>
  );
}

function OrganisationCard({ name }) {
    return (
        <div className="mx-2 flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-plum/10 bg-cream/40 px-6 transition-all duration-300 hover:border-gold/50 hover:bg-lilac/30 sm:mx-3 sm:w-64">
            <div className="text-center">
                {/* Simple emblem */}
                <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
                <span className="h-2 w-2 rounded-full bg-gold" />
                </div>

                <p className="font-heading text-sm font-semibold tracking-[0.12em] text-plum sm:text-base">
                {name}
                </p>
            </div>
        </div>
    );
}