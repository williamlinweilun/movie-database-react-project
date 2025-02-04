import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
