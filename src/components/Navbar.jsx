import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav className="bg-gray-900 shadow-xl">
      <div className="container mx-auto py-4 px-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between md:text-xl">
          <h2 className="text-warning">
            <Link to="/" className="flex items-center gap-2 text-warning">
              <BiCameraMovie /> MoviesLib
            </Link>
          </h2>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white">
              {/* You can use an icon or text for the mobile menu button */}
              Menu
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:flex md:items-center md:space-x-4 hidden">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Busque um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="py-2 px-3 rounded input input-bordered input-warning w-full max-w-xs"
            />
            <button
              type="submit"
              className="btn btn-warning rounded text-black py-2 px-3 text-lg flex items-center cursor-pointer"
            >
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
