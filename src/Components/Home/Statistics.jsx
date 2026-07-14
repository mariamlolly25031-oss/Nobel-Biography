import { HiOutlineMapPin,HiOutlineAcademicCap,HiOutlineBeaker,HiOutlineGlobeAlt,} from "react-icons/hi2";

function Statistics() {
  return (
    <section className="bg-[#071321] pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-700 bg-[#0b1b2e] shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {/* Born */}
            <div className="flex gap-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-700">
              <HiOutlineMapPin className="text-4xl text-yellow-400 shrink-0" />

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-slate-400">
                  Born
                </p>

                <h3 className="mt-2 text-white font-semibold">
                  30 December 1930
                </h3>

                <p className="text-slate-400">
                  Ningbo, Zhejiang, China
                </p>
              </div>
            </div>

            {/* Profession */}
            <div className="flex gap-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-700">
              <HiOutlineAcademicCap className="text-4xl text-yellow-400 shrink-0" />

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-slate-400">
                  Profession
                </p>

                <h3 className="mt-2 text-white font-semibold">
                  Pharmacologist
                </h3>

                <p className="text-slate-400">
                  Research Scientist
                </p>
              </div>
            </div>

            {/* Discovery */}
            <div className="flex gap-4 p-8 border-b md:border-b-0 lg:border-r border-slate-700">
              <HiOutlineBeaker className="text-4xl text-yellow-400 shrink-0" />

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-slate-400">
                  Discovery
                </p>

                <h3 className="mt-2 text-white font-semibold">
                  Artemisinin
                </h3>

                <p className="text-slate-400">
                  Anti-malarial Drug
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="flex gap-4 p-8">
              <HiOutlineGlobeAlt className="text-4xl text-yellow-400 shrink-0" />

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-slate-400">
                  Impact
                </p>

                <h3 className="mt-2 text-white font-semibold">
                  Millions Saved
                </h3>

                <p className="text-slate-400">
                  Worldwide from Malaria
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Statistics;