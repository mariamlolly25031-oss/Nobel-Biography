import educationImage from "../../assets/images/tu-with-mentor.jpg";

function Education() {
  return (
    <section className="bg-[#071321] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="relative group">

            {/* Decorative border */}
            <div className="absolute -left-5 -bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src={educationImage}
                alt="Tu Youyou with mentor Lou Zhicen"
                className="w-full h-140 object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* Caption */}
            <p className="mt-4 text-sm italic text-slate-500">
              Tu Youyou with her mentor, pharmacologist Lou Zhicen, during
              her early scientific training. He taught her medicinal botany
              and how to identify traditional Chinese herbs.
            </p>

          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              Education
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              Building the Skills
              <br />
              Behind a Discovery
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Determined to pursue medicine after recovering from
              tuberculosis, Tu Youyou enrolled at
              <span className="text-yellow-400 font-semibold">
                {" "}Beijing Medical College
              </span>
               {" "}in 1951 to study pharmaceutical sciences.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              She studied pharmacology, medicinal botany, organic chemistry,
              pharmaceutical analysis, and methods for extracting active
              compounds from medicinal plants. These scientific foundations
              later enabled her to isolate artemisinin.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              After graduating in 1955, she joined the Academy of Traditional
              Chinese Medicine. Between 1959 and 1962, she also received
              intensive training in traditional Chinese medicine, allowing
              her to combine centuries-old herbal knowledge with modern
              scientific research.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;