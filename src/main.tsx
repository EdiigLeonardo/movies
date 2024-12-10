import 'tailwindcss/tailwind.css'; 
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import { Provider } from "react-redux";
import store from "./store/store";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="movie/:id" element={<Movie />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root container not found. Make sure there is a <div id='root'></div> in your index.html.");
}
