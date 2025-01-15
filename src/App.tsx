import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-base-100">
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
};

export default App;
