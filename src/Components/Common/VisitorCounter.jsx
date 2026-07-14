import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let visits = localStorage.getItem("visitorCount");

    if (!visits) {
      visits = 1;
    } else {
      visits = Number(visits) + 1;
    }

    localStorage.setItem("visitorCount", visits);
    setCount(visits);
  }, []);

  return (
    <div className="flex items-center gap-2 text-slate-300 text-sm">
      <FiEye className="text-yellow-400 text-lg" />
      <span>{count.toLocaleString()}</span>
    </div>
  );
}

export default VisitorCounter;