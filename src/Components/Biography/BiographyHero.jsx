import heroImage from "../../assets/images/tuproud.jpg";

function BiographyHero() {
  return (
    <section className="relative w-full bg-[#071321] text-white overflow-hidden flex flex-col justify-start">
      
      {/* IMMERSIVE BACKGROUND FOR MOBILE & TABLET */}
      {/* Cleared heavy dark filters so her portrait details are beautifully visible */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={heroImage}
          alt="Tu Youyou background"
          className="h-full w-full object-cover object-center scale-102"
        />
        <div className="absolute inset-0 bg-[#071321]/35"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#071321] via-transparent to-[#071321]/20"></div>
      </div>

      {/* MAIN CONTAINER */}
      {/* - pt-16 lg:pt-6 pulls everything flush to the top right below the navbar.
        - pb-4 fixes the giant mobile void before the timeline starts.
        - lg:h-[calc(100vh-90px)] locks the entire section to fit within the viewport window.
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4 lg:pt-6 lg:pb-10 w-full flex flex-col justify-center lg:h-[calc(100vh-90px)] min-h-0">
        
        {/* Row layout: Image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 w-full h-full lg:max-h-145 my-auto">

          {/* RIGHT SIDE: TEXT BLOCK */}
          <div className="flex flex-col items-start text-left w-full lg:w-1/2 max-w-2xl justify-center">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs lg:text-sm font-semibold">
              Biography Portrait
            </p>

            <h1 className="mt-2 font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight leading-none drop-shadow-md">
              TU YOUYOU
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-light text-slate-200 leading-relaxed max-w-md drop-shadow">
              The Woman Who Changed
              <br />
              the Fight Against Malaria
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-yellow-500"></div>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 lg:text-slate-400 leading-relaxed drop-shadow">
              From humble beginnings in Ningbo to receiving the Nobel Prize,
              Tu Youyou's journey is a remarkable story of perseverance,
              scientific curiosity, and dedication to improving global health across generations.
            </p>
          </div>

          {/* LEFT SIDE: WIDENED SCREEN-FIT PORTRAIT */}
          {/* Expanded layout width classes to max-w-xl so it displays wide, large, and cinematic */}
          <div className="hidden lg:block w-full lg:w-1/2 max-w-xl h-full relative group">
            {/* Minimal architectural border layer */}
            <div className="absolute inset-0 border border-yellow-500/10 rounded-2xl transform translate-x-2 translate-y-2 pointer-events-none"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900 w-full h-full max-h-130 xl:max-h-140">
              <img
                src={heroImage}
                alt="Tu Youyou elegant showcase portrait"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-101"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BiographyHero;