import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Common/Layout";

import Home from "./Pages/Home";
import Biography from "./Pages/Biography";
import Research from "./Pages/Research";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/research" element={<Research />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;