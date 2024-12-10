import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
