import deerImage from "../../assets/images/nameDeer.jpg";

function NameSection() {
  return (
    <section className="bg-[#071321] py-18">
      <div className="max-w-6xl mx-auto px-6 lg:px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              A Remarkable Coincidence
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white leading-tight">
              A Name That
              <br />
              Foretold History
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-8 text-slate-300 leading-8">
              Before Tu Youyou became one of the world's most celebrated
              scientists, her father unknowingly gave her a name that would
              become deeply connected to her life's greatest achievement.
            </p>

            <blockquote className="mt-8 border-l-4 border-yellow-500 pl-6">

              <p className="text-2xl font-playfair text-white italic leading-relaxed">
                呦呦鹿鸣，食野之蒿
              </p>

              <p className="mt-3 text-yellow-400 italic">
                "The deer calls gently while eating the wild qinghao."
              </p>

            </blockquote>

            <p className="mt-8 text-slate-400 leading-8">
              The line comes from the ancient Chinese classic
              <span className="text-yellow-400"> Book of Odes (Shijing)</span>,
              where <span className="text-yellow-400">"Youyou"</span> describes
              the gentle call of a deer, while
              <span className="text-yellow-400"> qinghao</span> refers to the
              wild Artemisia plant.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Decades later, Tu Youyou would isolate
              <span className="text-yellow-400"> artemisinin </span>
              from that very same qinghao plant, transforming malaria treatment
              worldwide. She later described this extraordinary connection as
              one of life's most beautiful coincidences.
            </p>

          </div>

          {/* RIGHT */}

          <div className="relative group">

            <div className="absolute -right-5 -bottom-5 h-full w-full rounded-3xl border border-yellow-500/20"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src={deerImage}
                alt="The Book of Odes and the qinghao plant"
                className="w-full h-[580px] object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-[#071321]/90 backdrop-blur-md p-5 border border-white/10">

              <p className="uppercase tracking-[0.25em] text-yellow-400 text-xs">
                Book of Odes
              </p>

              <p className="mt-2 text-white font-semibold">
                The ancient poem that unknowingly foretold Tu Youyou's
                greatest scientific discovery.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NameSection;