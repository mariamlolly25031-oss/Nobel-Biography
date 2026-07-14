import stats from "../../Data/statisticsData";

function ImpactStatistics() {
  return (
    <section className="bg-[#071321] pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
            GLOBAL IMPACT
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-white">
            A Discovery That Changed the World
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            Artemisinin transformed malaria treatment worldwide,
            saving millions of lives and becoming one of the most
            important medical discoveries of the twentieth century.
          </p>
        </div>

        {/* Statistics Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-[#0b1b2e] shadow-xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-5">

            {stats.map((item, index) => {
              // Get the icon component
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-8
                    ${
                      index !== stats.length - 1
                        ? "border-r border-slate-700"
                        : ""
                    }
                    ${
                      index < 4
                        ? "lg:border-r border-slate-700"
                        : ""
                    }`}
                >
                  {/* Icon */}
                  <Icon className={`text-4xl ${item.color}`} />

                  {/* Text */}
                  <div>
                    <h3 className="font-playfair text-3xl text-yellow-400">
                      {item.title}
                    </h3>

                    <p className="text-white">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ImpactStatistics;