import malariaMosquito from "../../assets/images/mosquito.jpg";

function Room002() {
  return (
    <section className="bg-[#08182B] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="group relative">

            <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <img
                src={malariaMosquito}
                alt="Malaria mosquito"
                className="w-full h-140 object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Exhibition Room 02
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              The Global
              <br />
              Crisis
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              During the 1960s, malaria remained one of the world's deadliest
              infectious diseases. Existing medicines gradually lost their
              effectiveness as resistant parasites spread across Asia, Africa
              and South America.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              During the Vietnam War, malaria claimed thousands of lives,
              creating an urgent need for a new treatment. In response,
              China launched the classified Project 523 on 23 May 1967,
              bringing together scientists from across the country to
              search for a breakthrough.
            </p>

            <div className="mt-10 border-l-2 border-yellow-500 pl-6">

              <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                Archive Note
              </p>

              <p className="mt-3 text-slate-300 italic">
                "Anopheles mosquito — the primary carrier of malaria parasites."
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Source: CDC Public Health Image Library
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Room002;