import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#050c1a] border-t border-slate-800">

       <div className="h-px w-full bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="font-playfair text-3xl text-white">
              TU YOUYOU
            </h2>

            <p className="mt-2 uppercase tracking-[0.3em] text-xs text-yellow-400">
              Nobel Laureate
            </p>

            <p className="mt-6 text-slate-400 leading-7">
              Honouring the scientist whose discovery of
              artemisinin transformed malaria treatment and
              continues to save millions of lives worldwide.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/biography">Biography</Link></li>

              <li><Link to="/research">Research</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

            </ul>

          </div>

          {/* References */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              References
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="https://www.nobelprize.org/prizes/medicine/2015/tu/facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nobel Prize
                </a>
              </li>

              <li>
                <a
                  href="https://www.nobelprize.org/stories/women-who-changed-science/tu-youyou/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Women Who Changed Science | Tu Youyou
                </a>
              </li>

              <li>
                <a
                  href="https://www.who.int"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  World Health Organization
                </a>
              </li>

              <li>
                <a
                  href="https://www.britannica.com/biography/Tu-Youyou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Britannica
                </a>
              </li>

            </ul>

          </div>

          {/* Project */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Project
            </h3>

            <p className="text-slate-400 leading-7">
              SPA project created with React, React Router
              and Tailwind CSS as a tribute to Nobel Laureate
              Tu Youyou.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Tu Youyou Tribute. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Designed & Developed by Mariam Omolola
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;