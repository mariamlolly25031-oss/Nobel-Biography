import geHong from "../../assets/images/gehong-manuscript.jpg";

function AncientWisdom() {
  return (
    <section className="bg-[#071321] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative group">

            {/* Gold Frame */}

            <div className="absolute -left-5 -bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src={geHong}
                alt="Ge Hong's Handbook of Prescriptions for Emergencies"
                className="h-150 w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <p className="mt-4 text-sm italic text-slate-500">
              A page from <span className="text-yellow-400">Ge Hong's Handbook of
              Prescriptions for Emergencies</span>, written around the 4th
              century AD. The ancient text inspired Tu Youyou's breakthrough
              discovery of artemisinin.
            </p>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Ancient Wisdom
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              Looking to the Past
              <br />
              for the Future
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              After countless laboratory tests failed, Tu Youyou chose a
              different path. Instead of abandoning the search, she turned to
              China's ancient medical literature, believing that centuries of
              traditional knowledge might contain answers modern science had
              overlooked.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Together with her team, she examined more than
              <span className="text-yellow-400 font-semibold">
                {" "}2,000 traditional herbal remedies
              </span>
              {" "}and reviewed hundreds of historical medical texts. Most offered
              no solution, but one passage would change everything.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              In the writings of the physician
              <span className="text-yellow-400 font-semibold">
                {" "}Ge Hong
              </span>,
              she discovered a reference describing how sweet wormwood should
              be soaked rather than boiled to treat intermittent fevers, one of
              malaria's most recognizable symptoms.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              This seemingly simple instruction made Tu question her extraction
              method. She realized that excessive heat might be destroying the
              plant's active ingredient. That insight became the turning point
              that transformed centuries-old wisdom into one of modern
              medicine's greatest breakthroughs.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AncientWisdom;