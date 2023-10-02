import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
