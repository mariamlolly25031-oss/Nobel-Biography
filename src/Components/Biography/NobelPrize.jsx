// import awardImage from "../../assets/images/research-report.jpg";

function Awards() {
  return (
    <section className="bg-[#08182B] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
            Awards & Recognition
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-white">
            Global Recognition
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 bg-yellow-500 rounded-full"></div>

          <p className="mt-8 text-lg text-slate-400 leading-8">
            Tu Youyou's discovery transformed malaria treatment and earned
            international recognition. Her work has saved millions of lives
            and changed global public health forever.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          {/* <div className="relative group">

            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">

              <img
                src={awardImage}
                alt="Research Report"
                className="w-full transition duration-700 group-hover:scale-105"
              />

            </div>

          </div> */}

          {/* ACHIEVEMENTS */}

          <div className="space-y-8">

            <div className="border-l-2 border-yellow-500 pl-6">
              <h3 className="text-white text-2xl font-semibold">
                2011
              </h3>

              <p className="text-slate-300 mt-2">
                Received the prestigious Lasker-DeBakey Clinical Medical
                Research Award for discovering artemisinin.
              </p>
            </div>

            <div className="border-l-2 border-yellow-500 pl-6">
              <h3 className="text-white text-2xl font-semibold">
                2015
              </h3>

              <p className="text-slate-300 mt-2">
                Awarded the Nobel Prize in Physiology or Medicine, becoming
                the first mainland Chinese scientist to receive a Nobel Prize
                in a scientific category.
              </p>
            </div>

            <div className="border-l-2 border-yellow-500 pl-6">
              <h3 className="text-white text-2xl font-semibold">
                Global Impact
              </h3>

              <p className="text-slate-300 mt-2">
                Artemisinin-based combination therapy is now the World Health
                Organization's recommended first-line treatment for malaria,
                benefiting over 100 countries.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Awards;