import { Link } from "react-router-dom";
import { FiAward } from "react-icons/fi";
import homeHero from "../../assets/images/home-hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#071321] text-white flex flex-col justify-start">
      
      {/* BACKGROUND IMAGE FOR MOBILE & TABLET (sm & md) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={homeHero}
          alt="Tu Youyou background"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Balanced dark overlay masks */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#071321] via-transparent to-[#071321]/60"></div>
      </div>

      {/* MAIN CONTAINER */}
      {/* - pt-8 lg:pt-10 keeps the top gap tight to the navbar across all views.
        - min-h dynamically fills the viewport height minus header space on mobile/tablet to balance out the extra room.
        - justify-center vertically centers the text block on mobile/tablet, then lg:justify-start switches back to top alignment for desktop.
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-12 lg:pt-10 lg:pb-14 flex flex-col justify-center lg:justify-start items-center lg:items-stretch w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] lg:min-h-0 mt-0">
        
        {/* 2-Column Grid only triggers on Desktop (lg) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT BLOCK - Centered everywhere on sm/md, left-aligned on desktop */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-2xl mx-auto lg:mx-0">
            
            {/* Nobel Tag */}
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-[#071321]/90 lg:bg-yellow-500/10 px-4 py-2 text-xs lg:text-sm tracking-wider text-yellow-400 backdrop-blur-sm lg:backdrop-blur-none">
              <FiAward className="shrink-0" />
              <span className="whitespace-normal">Nobel Prize in Physiology or Medicine • 2015</span>
            </span>

            {/* Typography */}
            <h1 className="mt-4 font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-bold drop-shadow-lg">
              TU YOUYOU
            </h1>

            <div className="mt-4 h-1 w-20 bg-yellow-500 rounded-full mx-auto lg:mx-0"></div>

            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 lg:text-gray-300 drop-shadow-md max-w-xl lg:max-w-none">
              The scientist whose discovery of artemisinin transformed
              malaria treatment and continues to save millions of lives
              worldwide. 
              <br /><br />
              Awarded the 2015 Nobel Prize in Physiology or Medicine for discovering artemisinin, a breakthrough that transformed malaria treatment across the world.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col md:flex-row justify-center lg:justify-start gap-4 w-full md:w-auto min-w-70 sm:min-w-85 md:min-w-0">
              <Link
                to="/biography"
                className="text-center rounded-xl bg-yellow-500 px-8 py-3.5 font-semibold text-black transition transform hover:scale-105 active:scale-95 shadow-lg block w-full md:w-auto"
              >
                Explore Biography →
              </Link>

              <Link
                to="/research"
                className="text-center rounded-xl border border-yellow-500 bg-[#071321]/60 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none px-8 py-3.5 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black active:scale-95 block w-full md:w-auto"
              >
                Research Journey →
              </Link>
            </div>
          </div>

          {/* RIGHT HERO IMAGE - Only visible on Desktop (lg) */}
          <div className="hidden lg:flex relative justify-center items-center">
            {/* Outer Decorative Ring */}
            <div className="absolute h-112.5 w-112.5 rounded-full border border-yellow-500/30 pointer-events-none"></div>

            {/* Portrait Container */}
            <div className="relative z-10 h-100 w-100 overflow-hidden rounded-full border-2 border-yellow-500/10 shadow-2xl">
              <img
                src={homeHero}
                alt="Tu Youyou portrait"
                className="h-full w-full object-cover object-center scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;