import timelineData from "../../Data/timelineData";

function Timeline() {
  return (
    <section className="bg-[#08182B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Journey Through Time
        </p>

        <h2 className="mt-3 font-playfair text-5xl text-white">
          Key Milestones
        </h2>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Horizontal Line */}

          <div className="absolute left-0 right-0 top-7 h-0.5 bg-yellow-500/30"></div>

          {/* Timeline Items */}

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-7">

            {timelineData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className="group relative text-center"
                >

                  {/* Circle */}

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-500 bg-[#071321] transition duration-300 group-hover:bg-yellow-500 group-hover:scale-110">

                    <Icon className="text-xl text-yellow-400 transition group-hover:text-[#071321]" />

                  </div>

                  {/* Year */}

                  <h3 className="mt-5 font-playfair text-2xl text-yellow-400">
                    {item.year}
                  </h3>

                  {/* Title */}

                  <p className="mt-2 font-semibold text-white">
                    {item.title}
                  </p>

                  {/* Description */}

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;