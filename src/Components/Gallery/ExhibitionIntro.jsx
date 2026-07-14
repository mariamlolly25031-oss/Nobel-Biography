import academyArchive from "../../assets/images/tcm1955.jpg";

function ExhibitionIntro() {
  return (
    <section className="bg-[#08182B] py-14 lg:py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Museum Label */}

        <div className="mb-12">

          <p className="uppercase tracking-[0.45em] text-yellow-400 text-xs font-semibold">
            Exhibition Room 01
          </p>

          <h2 className="mt-4 font-playfair text-5xl lg:text-6xl text-white">
            The Beginning
          </h2>

          <div className="mt-6 h-px w-24 bg-yellow-500"></div>

        </div>

        {/* Archive */}

        <div className="relative">

          {/* Paper Border */}

          <div className="absolute -right-5 -bottom-5 w-full h-full border border-yellow-500/20 rounded-2xl"></div>

          {/* Image */}

          <div className="relative overflow-hidden rounded-2xl bg-[#06101C] border border-white/10 shadow-2xl">

            <img
              src={academyArchive}
              alt="Academy of Traditional Chinese Medicine"
              className="w-full object-cover"
            />

          </div>

        </div>

        {/* Caption */}

        <div className="mt-5 flex flex-col lg:flex-row lg:justify-between gap-6 border-b border-white/10 pb-8">

          <div>

            <p className="text-sm text-slate-400 italic">
              Archival photograph showing the Academy of Traditional Chinese
              Medicine and early research activities in Beijing.
            </p>

          </div>

          <div className="text-left lg:text-right">

            <p className="uppercase tracking-[0.35em] text-xs text-slate-600">
              Beijing · China
            </p>

            <p className="mt-2 text-yellow-400">
              Circa 1955
            </p>

          </div>

        </div>

        {/* Story */}

        <div className="mt-16 grid lg:grid-cols-12 gap-14">

          <div className="lg:col-span-3">

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs">
              Archive Notes
            </p>

            <p className="mt-4 text-5xl font-playfair text-white">
              01
            </p>

          </div>

          <div className="lg:col-span-9">

            <p className="text-xl leading-10 text-slate-300">

              In <span className="text-yellow-400 font-semibold">1955</span>,
              Tu Youyou graduated from Beijing Medical College and joined the
              newly established Academy of Traditional Chinese Medicine in
              Beijing. There, she began studying medicinal plants, learning
              techniques for extracting active compounds, and combining
              traditional Chinese knowledge with modern pharmacology.

            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              These early years laid the scientific foundation for the work
              that would eventually lead to one of the most important medical
              discoveries of the twentieth century. Long before the Nobel Prize,
              she was simply a young researcher driven by curiosity, discipline,
              and a desire to improve human health.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ExhibitionIntro;