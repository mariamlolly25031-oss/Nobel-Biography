import earlyNingbo from "../../assets/images/ningbo1930s.jpg";

function EarlyLife() {
  return (
    <section className="bg-[#08182B] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Early Life
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              A Childhood That
              <br />
              Shaped a Scientist
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Tu Youyou was born on{" "}
              <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 font-semibold">
                30 December 1930
              </span>{" "}
              in Ningbo, Zhejiang Province, China. Growing up during a period of
              political and social change, she developed resilience and a deep
              appreciation for education.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              At the age of sixteen, she contracted tuberculosis, an illness
              that interrupted her education for nearly two years. Her recovery
              inspired a lifelong determination to study medicine and improve
              treatments for diseases that affected millions of people.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              This personal experience became the foundation of a remarkable
              scientific career dedicated to saving lives through research and
              innovation.
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-xl mx-auto lg:mx-0 relative group lg:justify-self-end">

            {/* Gold Accent Border */}
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl border border-yellow-500/20 pointer-events-none transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

            {/* Image Container */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900 aspect-4/3 w-full">

              <img
                src={earlyNingbo}
                alt="Historic Ningbo, Zhejiang Province"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm p-4">
                <p className="text-sm text-slate-300 italic">
                  Historic Ningbo, Zhejiang Province — birthplace of Tu Youyou
                  in 1930.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EarlyLife;