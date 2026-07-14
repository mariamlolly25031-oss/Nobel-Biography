import project523Researchers from "../../assets/images/project523Gallery.jpg";

function Room003() {
  return (
    <section className="bg-[#071321] py-14">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Exhibition Room 03
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              Project
              <br />
              523
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              In 1969, Tu Youyou became the leader of a research group within
              the secret Project 523 programme. Rather than relying only on
              modern chemistry, she believed traditional Chinese medicine
              might contain forgotten solutions.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Together with her colleagues, she examined more than 2,000
              traditional remedies and hundreds of ancient medical texts.
              Their determination to combine historical knowledge with
              modern scientific methods would ultimately change the course
              of malaria treatment around the world.
            </p>

            <div className="mt-10 flex gap-12">

              <div>

                <p className="text-yellow-400 font-playfair text-5xl">
                  2,000+
                </p>

                <p className="text-slate-400 mt-2">
                  Traditional Remedies
                </p>

              </div>

              <div>

                <p className="text-yellow-400 font-playfair text-5xl">
                  1969
                </p>

                <p className="text-slate-400 mt-2">
                  Project Leadership
                </p>

              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="group relative">

            <div className="absolute right-5 bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <img
                src={project523Researchers}
                alt="Project 523 researchers"
                className="w-full h-140 object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-6 bg-[#091827] border-t border-white/10">

                <p className="text-white font-semibold">
                  International Scientific Meeting • Beijing • 1981
                </p>

                <p className="mt-2 text-slate-400 text-sm leading-7">
                  Delegates attending the Fourth Scientific Working Group on
                  the Chemotherapy of Malaria (SWG-Chemal), where Tu Youyou's
                  discovery gained international scientific recognition.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Room003;