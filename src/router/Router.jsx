import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import City from "../pages/City";
import Favorites from "../pages/Favorites";
import Main from "../pages/Main";
function Router() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Main />} />
        <Route path="city" element={<City />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default Router;
