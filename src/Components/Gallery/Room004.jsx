import geHong from "../../assets/images/gehong-manuscript.jpg";

function Room004() {
  return (
    <section className="bg-[#08182B] py-14">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <div className="group relative">

            <div className="absolute -left-5 -top-5 h-full w-full border border-yellow-500/20 rounded-3xl"></div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">

              <img
                src={geHong}
                alt="Ancient Chinese medical manuscript"
                className="w-full h-150 object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
              Exhibition Room 04
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white">
              Ancient
              <br />
              Wisdom
            </h2>

            <div className="mt-5 h-1 w-20 bg-yellow-500 rounded-full"></div>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              After modern medicines repeatedly failed, Tu Youyou turned to
              ancient Chinese medical literature in search of forgotten
              treatments.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Among hundreds of historical texts, one sentence from Ge Hong's
              fourth-century medical handbook described using qinghao
              (Artemisia annua) to relieve intermittent fever—a classic
              symptom of malaria.
            </p>

            <blockquote className="mt-10 border-l-2 border-yellow-500 pl-6 italic text-slate-300">
              "...take a handful of qinghao, soak it in cold water, wring out
              the juice and drink it."
            </blockquote>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Room004;