function ResearchHero() {
  return (
    <section className="relative bg-[#071321] overflow-hidden">

    
      {/* BACKGROUND MOLECULAR FORMULA */}
        <div className="absolute inset-x-0 top-[42%] -translate-y-1/2 flex justify-center pointer-events-none">
            <span className="text-[15rem] font-playfair text-yellow-400/8 leading-none whitespace-nowrap">
              C₁₅H₂₂O₅
            </span>
        </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm font-semibold">
            Scientific Research
          </p>

          <h1 className="mt-6 font-playfair text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.05]">
            The Science Behind
            <span className="block text-yellow-400">
              Artemisinin.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-slate-400 leading-9">
            An ancient medical clue. A failed extraction process. A scientific
            insight that transformed the global treatment of malaria.
          </p>

          {/* RESEARCH META */}
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Research Field
              </p>
              <p className="mt-2 text-white">
                Pharmacology
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Primary Compound
              </p>
              <p className="mt-2 text-white">
                Artemisinin
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Molecular Formula
              </p>
              <p className="mt-2 text-white">
                C₁₅H₂₂O₅
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Breakthrough
              </p>
              <p className="mt-2 text-white">
                1971
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="h-px bg-linear-to-r from-transparent via-yellow-500/40 to-transparent"></div>

    </section>
  );
}

export default ResearchHero;