import { Link } from "react-router-dom";
import artmeisia from "../../assets/images/cmugwort.jpg";

function ResearchPreview() {
  return (
    <section className="bg-[#071321] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={artmeisia}
                alt="Artemisia annua plant"
                className="
                  h-72
                  sm:h-96
                  lg:h-137.5
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.3em] sm:tracking-[0.35em] text-xs sm:text-sm font-semibold text-emerald-500">
              Research
            </p>

            <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              The Discovery That
              <br className="hidden sm:block" />
              Changed Medicine
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-slate-300">
              In the late 1960s, malaria had become one of the world's
              deadliest diseases. Existing treatments were failing,
              prompting China to launch the secretive Project 523.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-slate-400">
              Inspired by a fourth-century medical text, Tu Youyou
              successfully extracted artemisinin from the Artemisia
              annua plant, creating a breakthrough that transformed
              malaria treatment and continues to save millions of lives.
            </p>

            <Link
              to="/research"
              className="w-full sm:w-auto inline-flex mt-8 sm:mt-10 justify-center rounded-full bg-emerald-700 px-8 py-3 sm:py-4 text-white transition hover:bg-emerald-600"
            >
              Explore Research →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ResearchPreview;