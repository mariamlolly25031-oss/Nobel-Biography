import { useEffect, useState } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";

function Ticker() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Getting location...");

  // Live Time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get User Location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown";

          const state = data.address.state || "";

          const country = data.address.country || "";

          setLocation(
            `${city}, ${state}, ${country} • ${latitude.toFixed(
              2
            )}°, ${longitude.toFixed(2)}°`
          );
        } catch {
          setLocation(
            `${latitude.toFixed(2)}°, ${longitude.toFixed(
              2
            )}°`
          );
        }
      },
      () => {
        setLocation("Location permission denied");
      }
    );
  }, []);

  const date = time.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString("en-GB");

  return (
  <div className="fixed bottom-0 left-0 w-full overflow-hidden bg-slate-950 border-t border-yellow-500/20 py-1.5 z-50">
    <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap text-sm text-slate-200">

      {/* First Copy */}
      <div className="flex min-w-full items-center justify-center gap-2 px-8 shrink-0">
        <CiCalendarDate className="text-yellow-400 text-lg" />
        <span>{date}</span>

        <span className="text-yellow-500/60">•</span>

        <MdOutlineAccessTime className="text-yellow-400 text-base" />
        <span>{currentTime}</span>

        <span className="text-yellow-500/60">•</span>

        <CiLocationOn className="text-yellow-400 text-lg" />
        <span>{location}</span>

        <span className="text-yellow-500/60">•</span>

        <span>Nobel Prize in Physiology or Medicine</span>

        <span className="text-yellow-500/60">•</span>

        <span>Tu Youyou</span>

        <span className="text-yellow-500/60">•</span>

        <span>Artemisinin Discovery</span>
      </div>

      {/* Second Copy */}
      <div className="flex min-w-full items-center justify-center gap-2 px-8 shrink-0">
        <CiCalendarDate className="text-yellow-400 text-lg" />
        <span>{date}</span>

        <span className="text-yellow-500/60">•</span>

        <MdOutlineAccessTime className="text-yellow-400 text-base" />
        <span>{currentTime}</span>

        <span className="text-yellow-500/60">•</span>

        <CiLocationOn className="text-yellow-400 text-lg" />
        <span>{location}</span>

        <span className="text-yellow-500/60">•</span>

        <span>Nobel Prize in Physiology or Medicine</span>

        <span className="text-yellow-500/60">•</span>

        <span>Tu Youyou</span>

        <span className="text-yellow-500/60">•</span>

        <span>Artemisinin Discovery</span>
      </div>

    </div>
  </div>
);
}

export default Ticker;