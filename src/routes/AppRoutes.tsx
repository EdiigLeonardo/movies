import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import lazyWithCache from "@/utils/lazyWithCache";
import App from "@/App";

// Lazy-loaded components
const Home = React.lazy((() => import("@/pages/Home")));
const Movie = React.lazy(lazyWithCache(() => import("@/pages/Movie")));
const Search = React.lazy(lazyWithCache(() => import("@/pages/Search")));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;