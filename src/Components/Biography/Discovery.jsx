import earlyPublication from "../../assets/images/tuEarlyPublication.jpg";

function Discovery() {
  return (
    <section className="bg-[#08182B] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Discovery
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              The Discovery of
              <br />
              Artemisinin
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Inspired by Ge Hong's ancient writings, Tu Youyou realized that
              boiling sweet wormwood might be destroying its medicinal
              properties. She changed the extraction process, using a
              low-temperature ether solvent instead.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              The results were extraordinary. The new extract eliminated malaria
              parasites in laboratory animals with remarkable success, providing
              the first clear evidence that the centuries-old remedy could
              become a modern medicine.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Before clinical trials, Tu Youyou and two colleagues volunteered
              to test the extract on themselves to confirm its safety. The
              treatment was then administered to patients in Hainan Province,
              where all twenty-one participants recovered successfully.
            </p>

            <blockquote className="mt-10 border-l-4 border-yellow-500 pl-6 italic text-slate-300">
              "Every scientist dreams of doing something that can help the
              world."
            </blockquote>

          </div>

          {/* RIGHT */}

          <div className="relative group">

            <div className="absolute -right-5 -bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src={earlyPublication}
                alt="Tu Youyou research report"
                className="h-150 w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <p className="mt-4 text-sm italic text-slate-500">
              Tu Youyou's research report documenting the development of
              artemisinin between 1971 and 1978.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Discovery;