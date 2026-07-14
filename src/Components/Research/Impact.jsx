function ResearchImpact() {
  return (
    <section className="relative bg-[#08182B] py-18 lg:py-20 overflow-hidden">

      {/* BACKGROUND FORMULA */}
      <span className="absolute right-0 top-10 font-playfair text-[14rem] text-white/2 leading-none">
        C₁₅H₂₂O₅
      </span>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-2">
            <span className="font-playfair text-8xl lg:text-9xl text-yellow-500/20">
              05
            </span>
          </div>

          <div className="lg:col-span-10">
            <p className="uppercase tracking-[6px] text-yellow-400 text-sm font-semibold">
              Global Medical Impact
            </p>

            <h2 className="mt-5 font-playfair text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              One Discovery.
              <br />
              A Global Transformation.
            </h2>
          </div>

        </div>

        {/* IMPACT DATA */}
        <div className="mt-16 grid md:grid-cols-3 border-y border-white/10">

          <div className="py-12 hover:py-10 md:pr-10 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-playfair text-5xl text-yellow-400">
              ACT
            </p>

            <p className="mt-5 text-white text-lg">
              Combination Therapy
            </p>

            <p className="mt-4 text-slate-500 leading-7">
              Artemisinin-based combination therapies became central to modern
              malaria treatment.
            </p>
          </div>

          <div className="py-12 md:px-10 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-playfair text-5xl text-yellow-400">
              Global
            </p>

            <p className="mt-5 text-white text-lg">
              Medical Reach
            </p>

            <p className="mt-4 text-slate-500 leading-7">
              Artemisinin treatments have been used across malaria-affected
              regions around the world.
            </p>
          </div>

          <div className="py-12 md:pl-10">
            <p className="font-playfair text-5xl text-yellow-400">
              Millions
            </p>

            <p className="mt-5 text-white text-lg">
              Lives Impacted
            </p>

            <p className="mt-4 text-slate-500 leading-7">
              Tu Youyou's research transformed the treatment of one of
              humanity's most persistent infectious diseases.
            </p>
          </div>

        </div>

        {/* CLOSING */}
        <div className="max-w-5xl mx-auto text-center pt-16">

          <p className="font-playfair text-3xl sm:text-4xl lg:text-4xl text-white leading-relaxed">
            “Artemisinin is a true gift from old Chinese medicine. <br/>
            But this is not the only instance in which the wisdom of Chinese medicine has borne fruit.”
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-yellow-500"></div>

          <p className="mt-6 uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
            Tu Youyou
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 leading-8">
            Her research demonstrated that scientific breakthroughs can emerge
            when historical knowledge is examined with curiosity, precision,
            and modern experimental methods.
          </p>

        </div>

      </div>
    </section>
  );
}

export default ResearchImpact;