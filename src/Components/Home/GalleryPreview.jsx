import { Link } from "react-router-dom";
import images from "../../Data/GalleryPreview";

function GalleryPreview() {
  return (
    <section className="bg-[#071321] py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
            Gallery
          </p>

          <h2 className="mt-4 font-playfair text-5xl text-white">
            Moments in Time
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A collection of memorable photographs capturing
            Tu Youyou's scientific journey, humanitarian
            impact, and Nobel Prize recognition.
          </p>

        </div>

        {/* Images */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {images.map((item, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-[#0b1b2e]"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h3 className="text-white font-semibold group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-14">

          <Link
            to="/gallery"
            className="inline-flex items-center rounded-full border border-yellow-400 px-8 py-3 font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-[#071321]"
          >
            Explore Full Gallery →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;