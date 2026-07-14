import report from "../../assets/images/tuResearchReport.jpg";

function Room006() {
  return (
    <section className="bg-[#08182B] py-18">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="group relative">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">

              <img
                src={report}
                alt="Research report"
                className="w-full h-155 object-contain transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
              Exhibition Room 06
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white">
              The
              <br />
              Breakthrough
            </h2>

            <div className="mt-5 h-1 w-20 bg-yellow-500 rounded-full"></div>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              Tu Youyou realized that boiling the plant destroyed its active
              ingredient. Instead, she used a low-temperature ether extraction,
              preserving the compound's remarkable anti-malarial properties.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              The extract achieved a 100% success rate in animal testing before
              Tu and two colleagues volunteered to test it on themselves,
              demonstrating extraordinary confidence in their discovery.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl bg-[#0c2038] p-6">

                <p className="text-yellow-400 text-5xl font-playfair">
                  1972
                </p>

                <p className="mt-3 text-slate-400">
                  Artemisinin isolated
                </p>

              </div>

              <div className="rounded-2xl bg-[#0c2038] p-6">

                <p className="text-yellow-400 text-5xl font-playfair">
                  100%
                </p>

                <p className="mt-3 text-slate-400">
                  Success in early tests
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Room006;