import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import ContactUs from "../pages/ContactUs";
import Certifications from "../pages/Certifications";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/certifications" element={<Certifications />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
