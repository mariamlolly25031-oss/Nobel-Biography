function GalleryHero() {
  return (
    <section className="relative bg-[#071321] min-h-screen flex items-center overflow-hidden">

  {/* Background Typography */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <h1 className="font-playfair text-[18rem] text-white/5 leading-none">
      EXHIBITION
    </h1>

  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm">
      Nobel Prize Museum
    </p>

    <h1 className="mt-8 font-playfair text-6xl lg:text-8xl text-white leading-tight max-w-5xl">

      The Discovery
      <br />

      <span className="text-yellow-400">
        Exhibition
      </span>

    </h1>

    <p className="mt-10 max-w-3xl text-xl text-slate-400 leading-10">

      Step inside the remarkable journey of Tu Youyou —
      from ancient Chinese medicine to one of the greatest
      medical discoveries in human history.

    </p>

    <div className="mt-20 flex items-center gap-5">

      <div className="h-px w-20 bg-yellow-500"></div>

      <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">

        Begin Exhibition

      </p>

    </div>

  </div>

</section>
  );
}

export default GalleryHero;