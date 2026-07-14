import legacyImage from "../../assets/images/tuResearchReport.jpg";

function Legacy() {
  return (
    <section className="bg-[#071321] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Lasting Legacy
            </p>

            <h2 className="mt-4 font-playfair text-4xl sm:text-5xl text-white leading-tight">
              A Discovery That
              <br />
              Continues to Save Lives
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Tu Youyou's discovery of artemisinin transformed the global
              fight against malaria and became one of the most important
              pharmaceutical breakthroughs of modern medicine.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Artemisinin-based combination therapies became a leading
              treatment against malaria, helping reduce deaths and protecting
              millions of people in regions where the disease remains a major
              public health threat.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Her work also demonstrated the extraordinary possibilities that
              emerge when traditional medical knowledge is examined through
              modern scientific research.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Without a doctorate, medical degree, or overseas training,
              Tu Youyou built a scientific legacy whose influence extends far
              beyond China and across generations of researchers worldwide.
            </p>

            {/* LEGACY STAT */}
            <div className="mt-10 border-l-2 border-yellow-500 pl-6">
              <p className="font-playfair text-3xl text-yellow-400">
                Millions of lives
              </p>

              <p className="mt-2 text-slate-400">
                impacted by modern artemisinin-based malaria treatments.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group w-full max-w-lg mx-auto lg:ml-auto">

            {/* GOLD FRAME */}
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl border border-yellow-500/20 transition duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1b2e] shadow-2xl">

              <img
                src={legacyImage}
                alt="Tu Youyou research report from 1971 to 1978"
                className="w-full h-140 object-contain p-8 transition duration-700 group-hover:scale-105"
              />

              {/* CAPTION */}
              <div className="border-t border-white/10 px-6 py-4">
                <p className="text-sm text-slate-400 italic">
                  Tu Youyou's research report, 1971 - 1978.
                  Photo © Nobel Prize Museum
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Legacy;