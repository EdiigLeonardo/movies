import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@/store/store";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

interface ProviderProps {
  children: ReactNode;
  store: typeof store;
}

const queryClient = new QueryClient();

const MainProvider: React.FC<ProviderProps> = ({ children, store }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        {children}
        </BrowserRouter>
      </QueryClientProvider>
      </Provider>
    </ClerkProvider>
  );
};

export default MainProvider;
