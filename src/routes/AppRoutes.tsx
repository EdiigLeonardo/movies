import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import App from "@/App";
import Login from "@/pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ProgressBar from "@/components/ProgressBar";

// Lazy-loaded components
const Home = React.lazy(() => import("@/pages/Home"));
const Movie = React.lazy(() => import("@/pages/Movie"));
const Search = React.lazy(() => import("@/pages/Search"));

const AppRoutes = () => (
  <Suspense fallback={<ProgressBar />}>
    <Routes>
      <Route element={<App />}>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <Movie />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
