import 'tailwindcss/tailwind.css'; 
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

// Type for the lazy-loaded component
type LazyImport<T> = () => Promise<{ default: T }>;

// Lazy load the pages with caching
const lazyWithCache = <T,>(importFunc: LazyImport<T>): LazyImport<T> => {
  const cache: { [key: string]: T } = {};
  return () => {
    const key = importFunc.toString();
    if (cache[key]) {
      return Promise.resolve({ default: cache[key] });
    }
    return importFunc().then(module => {
      cache[key] = module.default;
      return module;
    });
  };
};

// Lazy-loaded components
const Home = lazy(lazyWithCache(() => import("./pages/Home")));
const Movie = lazy(lazyWithCache(() => import("./pages/Movie")));
const Search = lazy(lazyWithCache(() => import("./pages/Search")));

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root container not found. Make sure there is a <div id='root'></div> in your index.html.");
}