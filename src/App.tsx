import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Nav/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-base-100">
        <Navbar />
        <Outlet />
      </div>
      <Login/>
    </QueryClientProvider>
  );
};

export default App;
