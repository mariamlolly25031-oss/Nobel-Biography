function ResearchSearch() {
  return (
    <section className="bg-[#071321] py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">

          <div className="lg:col-span-2">
            <span className="font-playfair text-8xl lg:text-9xl text-yellow-500/20">
              02
            </span>
          </div>

          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              The Search
            </p>

            <h2 className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Thousands of Remedies.
              <br />
              One Ancient Clue.
            </h2>
          </div>

          <div className="lg:col-span-3">
            <p className="text-slate-500 leading-7">
              Tu Youyou approached traditional medicine not as folklore, but as
              a vast archive of observations waiting to be scientifically
              examined.
            </p>
          </div>

        </div>

        {/* DATA GRID */}
        <div className="mt-20 grid md:grid-cols-3 border-y border-white/10">

          <div className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-playfair text-6xl text-yellow-400">
              2,000+
            </p>

            <p className="mt-4 uppercase tracking-[0.25em] text-xs text-slate-500">
              Traditional Remedies
            </p>

            <p className="mt-5 text-slate-400 leading-7">
              Ancient preparations and medicinal remedies were examined for
              possible antimalarial activity.
            </p>
          </div>

          <div className="py-10 md:px-10 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-playfair text-6xl text-yellow-400">
              640
            </p>

            <p className="mt-4 uppercase tracking-[0.25em] text-xs text-slate-500">
              Prescriptions Collected
            </p>

            <p className="mt-5 text-slate-400 leading-7">
              The most promising historical prescriptions were organised into
              a research collection for further investigation.
            </p>
          </div>

          <div className="py-10 md:pl-10">
            <p className="font-playfair text-6xl text-yellow-400">
              1
            </p>

            <p className="mt-4 uppercase tracking-[0.25em] text-xs text-slate-500">
              Critical Observation
            </p>

            <p className="mt-5 text-slate-400 leading-7">
              A fourth-century description of sweet wormwood challenged the
              team's entire extraction method.
            </p>
          </div>

        </div>

        {/* ANCIENT CLUE */}
        <div className="mt-16 relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0b1b2e] p-8 sm:p-12 lg:p-16">

          <span className="absolute -right-4 -top-16 font-playfair text-[16rem] text-yellow-500/3 leading-none">
            “
          </span>

          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs font-semibold">
            The Critical Clue
          </p>

          <blockquote className="mt-8 max-w-4xl font-playfair text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed">
            “A handful of qinghao immersed with two litres of water,
            wring out the juice and drink it all.”
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="h-px w-14 bg-yellow-500"></div>

            <p className="text-sm text-slate-500">
              Ge Hong · A Handbook of Prescriptions for Emergencies
              · Fourth Century
            </p>
          </div>

          <p className="mt-10 max-w-3xl text-slate-400 leading-8">
            The wording was important. The plant was
            <span className="text-white"> immersed and wrung out</span> — not
            boiled. Tu Youyou began to question whether high temperatures were
            damaging the compound responsible for the antimalarial effect.
          </p>

        </div>

      </div>
    </section>
  );
}

export default ResearchSearch;