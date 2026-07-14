import globalImpact from "../../assets/images/malaria.jpg";

function GlobalImpact() {
  return (
    <section className="bg-[#071321] py-14">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Exhibition Room 07
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              Changing
              <br />
              The World
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Artemisinin transformed the global fight against malaria.
              Combined with other medicines, it became the foundation of
              Artemisinin-based Combination Therapy (ACT), now the world's
              most effective treatment for malaria.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Millions of lives have been saved, particularly in Africa,
              where malaria continues to pose one of the greatest public
              health challenges. What began as an ancient herbal remedy
              evolved into one of modern medicine's greatest achievements.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl bg-[#0B1B2E] p-6 border border-white/10">

                <p className="font-playfair text-5xl text-yellow-400">
                  Millions
                </p>

                <p className="mt-3 text-slate-400">
                  Lives Saved
                </p>

              </div>

              <div className="rounded-2xl bg-[#0B1B2E] p-6 border border-white/10">

                <p className="font-playfair text-5xl text-yellow-400">
                  2001
                </p>

                <p className="mt-3 text-slate-400">
                  WHO Recommended ACT
                </p>

              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="group relative">

            <div className="absolute right-5 bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <img
                src={globalImpact}
                alt="Global malaria treatment"
                className="w-full h-155 object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GlobalImpact;