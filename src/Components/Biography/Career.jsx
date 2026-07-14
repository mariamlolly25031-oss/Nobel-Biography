import project523 from "../../assets/images/project523.jpg";

function Career() {
  return (
    <section className="bg-[#08182B] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Career & Project 523
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              Leading a Secret Mission
              <br />
              Against Malaria
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              After graduating from Beijing Medical College and joining the
              Academy of Traditional Chinese Medicine, Tu Youyou built her
              career studying medicinal plants and traditional healing methods.
              Her expertise would soon place her at the center of one of
              China's most important scientific missions.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              In <span className="text-yellow-400 font-semibold">1969</span>,
              at the age of thirty-nine, she was appointed leader of
              <span className="text-yellow-400 font-semibold"> Project 523</span>,
              a confidential national research program established to discover a
              treatment for drug-resistant malaria during the Vietnam War.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Malaria had become one of the world's deadliest infectious
              diseases. Existing medicines such as chloroquine were rapidly
              losing their effectiveness, and millions of people across Asia,
              Africa, and South America faced an uncertain future.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              The responsibility demanded enormous personal sacrifice. Tu
              Youyou left her young daughters in the care of relatives so she
              could devote herself entirely to the research. For several years,
              scientific discovery became her only priority.
            </p>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative group">

            {/* Gold Accent */}
            <div className="absolute -right-5 -bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-slate-900">

              {/* Replace with your WHO Conference image */}
              <img
                src={project523}
                alt="Project 523 Research Team"
                className="h-140 w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <p className="mt-4 text-sm text-slate-500 italic leading-6">
              Delegates attending the Fourth Scientific Working Group on the
              Chemotherapy of Malaria in Beijing (1981), where research on
              artemisinin gained international recognition.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Career;