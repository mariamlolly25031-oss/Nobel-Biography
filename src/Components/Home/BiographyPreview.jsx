import { Link } from "react-router-dom";
import tuChinaAward from "../../assets/images/tuChinaAward.jpg";

function BiographyPreview() {
  return (
    <section className="bg-[#071321] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-yellow-400">
              Why Tu Youyou Matters
            </p>

            <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              More Than a Nobel Prize
            </h2>

            <div className="mt-4 w-20 h-1 rounded-full bg-yellow-500"></div>

            {/* MOBILE EDITORIAL PORTRAIT */}
            <div className="relative w-[85%] mx-auto mt-8 md:hidden">
              {/* Gold Accent */}
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border border-yellow-500/30"></div>

              {/* Image */}
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={tuChinaAward}
                  alt="Tu Youyou receiving an award"
                  className="h-full w-full object-cover object-[95%_center]"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#071321]/90 via-transparent to-transparent"></div>

                {/* Caption */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-semibold">
                    Tu Youyou
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Pharmaceutical Chemist
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 md:mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-slate-300">
              Unlike household names such as{" "}
              <span className="text-white font-medium">Albert Einstein</span>,{" "}
              <span className="text-white font-medium">Marie Curie</span>, or{" "}
              <span className="text-white font-medium">Alan Turing</span>,
              Tu Youyou remained relatively unknown to the wider public for many
              years.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-slate-400">
              Yet her discovery of{" "}
              <span className="text-yellow-400">artemisinin</span>{" "}
              revolutionized malaria treatment and continues to save millions of
              lives across Africa, Asia, and many other parts of the world.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-slate-400">
              Her work bridged traditional Chinese medicine with modern scientific
              research, making one of the greatest medical breakthroughs of the
              twentieth century.
            </p>

            <Link
              to="/biography"
              className="w-full sm:w-auto text-center inline-flex mt-8 sm:mt-10 justify-center items-center rounded-full border border-yellow-500 px-8 py-3 sm:py-4 font-medium text-yellow-400 transition duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Read Full Biography →
            </Link>
          </div>

          {/* DESKTOP / TABLET IMAGE */}
          <div className="relative mt-4 md:mt-0 hidden md:flex">
            {/* Gold Accent Border */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 h-full w-full rounded-3xl border border-yellow-500/30"></div>

            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full md:h-full min-h-80 lg:min-h-115">
              <img
                src={tuChinaAward}
                alt="Tu Youyou receiving an award"
                className="absolute inset-0 h-full w-full object-cover object-[75%_center] transition duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BiographyPreview;