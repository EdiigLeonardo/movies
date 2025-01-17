import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Nav/Navbar";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
      <div className="bg-base-100">
        <Outlet />
      </div>
  );
};

export default App;
