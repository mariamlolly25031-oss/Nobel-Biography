function ResearchProblem() {
  return (
    <section className="bg-[#08182B] py-14 lg:py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="grid lg:grid-cols-12 gap-10">

          {/* NUMBER */}
          <div className="lg:col-span-2">
            <span className="font-playfair text-8xl lg:text-9xl text-yellow-500/20">
              01
            </span>
          </div>

          {/* HEADING */}
          <div className="lg:col-span-7">

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              The Research Problem
            </p>

            <h2 className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Malaria Was Winning.
              <br />
              Existing Medicine
              <br />
              Was Failing.
            </h2>

          </div>

          {/* YEAR */}
          <div className="lg:col-span-3 lg:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Research Context
            </p>

            <p className="mt-3 font-playfair text-4xl text-white">
              1967
            </p>

            <p className="mt-2 text-slate-500">
              Project 523 begins
            </p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-12">

          <div>
            <p className="text-yellow-400 text-sm font-semibold">
              01 — Resistance
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              The malaria parasite was becoming increasingly resistant to
              chloroquine, one of the most widely used antimalarial medicines
              of the period.
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-sm font-semibold">
              02 — Crisis
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              Malaria was causing devastating illness and casualties across
              tropical regions, creating an urgent demand for a new and
              effective treatment.
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-sm font-semibold">
              03 — Mission
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              China launched Project 523, a national research programme focused
              on discovering treatments capable of defeating
              chloroquine-resistant malaria.
            </p>
          </div>

        </div>

        {/* STATEMENT */}
        <div className="mt-20 border-y border-white/10 py-10">

          <p className="max-w-5xl font-playfair text-2xl sm:text-3xl lg:text-2.5xl text-slate-300 leading-relaxed">
            The research question was urgent and unforgiving:
            <span className="text-white">
              {" "}could a new antimalarial treatment be discovered before
              drug resistance made existing therapies ineffective?
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}

export default ResearchProblem;