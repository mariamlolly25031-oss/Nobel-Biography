import process from "../../Data/Extraction";

function Extraction() {

  return (
    <section className="bg-[#08182B] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-2">
            <span className="font-playfair text-8xl lg:text-9xl text-yellow-500/20">
              03
            </span>
          </div>

          <div className="lg:col-span-10">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Extraction Breakthrough
            </p>

            <h2 className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              The Problem Wasn't
              <br />
              the Plant.
              <span className="text-yellow-400"> It Was the Process.</span>
            </h2>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mt-16">

          {process.map((step, index) => (
            <div
              key={step.number}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-white/10"
            >

              {/* NUMBER */}
              <div className="md:col-span-1">
                <span className="text-sm text-slate-600">
                  {step.number}
                </span>
              </div>

              {/* TITLE */}
              <div className="md:col-span-4">
                <h3 className="font-playfair text-2xl lg:text-3xl text-white group-hover:text-yellow-400 transition">
                  {step.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-5">
                <p className="text-slate-400 leading-8">
                  {step.description}
                </p>
              </div>

              {/* RESULT */}
              <div className="md:col-span-2 md:text-right">
                <span
                  className={`inline-block text-xs font-semibold tracking-[0.25em] ${
                    index === process.length - 1
                      ? "text-yellow-400"
                      : "text-slate-500"
                  }`}
                >
                  {step.result}
                </span>
              </div>

            </div>
          ))}

          <div className="border-t border-white/10"></div>

        </div>

        {/* BREAKTHROUGH RESULT */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center bg-[#071321] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16">

          <div className="lg:col-span-5">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs font-semibold">
              Experimental Result
            </p>

            <p className="mt-5 font-playfair text-7xl sm:text-8xl lg:text-8xl text-white">
              100<span className="text-yellow-400">%</span>
            </p>

            <p className="mt-3 text-slate-500">
              Parasite inhibition in initial animal testing
            </p>
          </div>

          <div className="lg:col-span-7 lg:border-l border-white/10 lg:pl-12">

            <p className="font-playfair text-2xl sm:text-3xl text-white leading-relaxed">
              The low-temperature extract showed complete effectiveness against
              malaria parasites in mice and monkeys.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              After repeated failures, changing the extraction temperature
              transformed sweet wormwood from an inconsistent traditional
              remedy into a promising scientific treatment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Extraction;