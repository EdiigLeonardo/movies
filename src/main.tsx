import "tailwindcss/tailwind.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "@/routes/AppRoutes";
import store from "@/store/store";
import { ClerkProvider } from "@clerk/clerk-react";
import MainProvider from "@/providers/MainProvider";

const container = document.getElementById("root");
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MainProvider store={store}>
              <AppRoutes />
      </MainProvider>
    </React.StrictMode>
  );
} else {
  console.error(
    "Root container not found. Ensure <div id='root'></div> exists in index.html."
  );
}
