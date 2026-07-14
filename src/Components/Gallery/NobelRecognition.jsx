import nobelRecognition from "../../assets/images/tuNobel.jpg";

function NobelRecognition() {
  return (
    <section className="bg-[#08182B] py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
            Exhibition Room 08
          </p>

          <h2 className="mt-6 font-playfair text-5xl lg:text-7xl text-white">
            Nobel
            <br />
            Recognition
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-yellow-500"></div>

          <p className="mt-10 text-xl text-slate-300 leading-10">

            In 2015, Tu Youyou received the Nobel Prize in Physiology or
            Medicine for discovering artemisinin, becoming the first mainland
            Chinese scientist to receive a Nobel Prize in a scientific
            category.

          </p>

        </div>

        {/* IMAGE */}

        {/* IMAGE */}

        <div className="mt-20 flex justify-center">

            <div className="group w-full md:w-4/5 lg:w-3/5 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

                <img
                src={nobelRecognition}
                alt="Tu Youyou holding her Nobel Prize medal"
                className="w-full h-112.5 md:h-137.5 object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />

            </div>

        </div>

        {/* QUOTE */}

        <div className="max-w-4xl mx-auto mt-14 text-center">

          <p className="font-playfair italic text-3xl text-white leading-relaxed">

            "Every scientist dreams of doing something
            that can help the world."

          </p>

          <p className="mt-8 uppercase tracking-[0.35em] text-yellow-400 text-sm">

            — TU YOUYOU

          </p>

        </div>

      </div>

    </section>
  );
}

export default NobelRecognition;