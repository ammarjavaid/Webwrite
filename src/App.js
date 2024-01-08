import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import GetInTouch from "./components/getTouch/GetInTouch";
import Gallery from "./pages/gallery/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/get-in-touch" element={<GetInTouch />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
