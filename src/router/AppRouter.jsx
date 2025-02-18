import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageAbout from "../pages/PageAbout";
import PageFavorite from "../pages/PageFavorite";
import PageNotFound from "../pages/PageNotFound";
import PageMovieDetails from "../pages/PageMovieDetails";
import { GlobalProvider } from "../context/GlobalContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/movie/:id" element={<PageMovieDetails />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favorite" element={<PageFavorite />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
