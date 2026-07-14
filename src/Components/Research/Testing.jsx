import trials from "../../Data/Testing";

function Testing() {
  
  return (
    <section className="bg-[#071321] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-2">
            <span className="font-playfair text-8xl lg:text-9xl text-yellow-500/20">
              04
            </span>
          </div>

          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Testing & Results
            </p>

            <h2 className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              From the Laboratory
              <br />
              to Human Lives.
            </h2>
          </div>

          <div className="lg:col-span-3">
            <p className="text-slate-500 leading-7">
              Each stage moved the research closer to proving that the extract
              could become an effective malaria treatment.
            </p>
          </div>
        </div>

        {/* PROGRESSION */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4">

          {trials.map((trial, index) => (
            <div
              key={trial.stage}
              className="relative border-t border-white/10 px-0 py-10 md:px-8 first:pl-0 lg:border-r last:border-r-0"
            >
              {/* POINT */}
              <div className="absolute -top-2 left-0 md:left-8 first:left-0 h-4 w-4 rounded-full border-2 border-yellow-400 bg-[#071321]"></div>

              <p className="text-xs tracking-[0.3em] text-yellow-400">
                {trial.stage}
              </p>

              <h3 className="mt-6 font-playfair text-3xl text-white">
                {trial.title}
              </h3>

              <p className="mt-3 uppercase tracking-[0.2em] text-xs text-slate-600">
                {trial.label}
              </p>

              <p className="mt-6 text-slate-400 leading-7">
                {trial.text}
              </p>
            </div>
          ))}

        </div>

        {/* FINAL RESULT */}
        <div className="mt-14 text-center border-x border-y border-white/10 py-12">

          <p className="uppercase tracking-[0.4em] text-slate-500 text-xs">
            Clinical Observation
          </p>

          <p className="mt-4 font-playfair text-7xl sm:text-8xl lg:text-8xl text-yellow-400">
            21 / 21
          </p>

          <p className="mt-4 text-xl text-white">
            Patients recovered.
          </p>

          <p className="mt-3 text-slate-500">
            Hainan Province · Early clinical testing
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testing;