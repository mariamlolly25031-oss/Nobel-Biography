import wormwood from "../../assets/images/artemisininannua.jpg";

function Room005() {
  return (
    <section className="bg-[#071321] py-14">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
              Exhibition Room 05
            </p>

            <h2 className="mt-4 font-playfair text-5xl text-white">
              The Plant That
              <br />
              Changed Medicine
            </h2>

            <div className="mt-5 h-1 w-20 bg-yellow-500 rounded-full"></div>

            <p className="mt-8 text-lg text-slate-300 leading-9">
              Artemisia annua, commonly called sweet wormwood, had been used in
              traditional Chinese medicine for centuries.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Inspired by the ancient manuscript, Tu Youyou believed that the
              preparation method—not the plant itself—held the secret to its
              effectiveness.
            </p>

            <div className="mt-10 rounded-2xl bg-[#0c2038] border border-white/10 p-6">

              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs">
                Scientific Name
              </p>

              <p className="mt-2 text-white text-2xl italic">
                Artemisia annua
              </p>

            </div>

          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10">

            <img
              src={wormwood}
              alt="Artemisia annua"
              className="w-full h-150 object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Room005;