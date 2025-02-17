import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
