import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import ThemeToggle from "@/reducers/Themetoggle";

const Navbar = () => {
  const NavList = [
    {
      link: "/home",
      path: "Home",
      dropList: null,
    },
    {
      link: "/series",
      path: "Séries",
      dropList: [
        { link: "/series/popular", name: "Populares" },
        { link: "/series/now-playing", name: "Em Exibição" },
        { link: "/series/upcoming", name: "Brevemente" },
        { link: "/series/top-rated", name: "Melhor Classificação" },
      ],
    },
    {
      link: "/people",
      path: "Pessoas",
      dropList: [
        { link: "/people/popular", name: "Populares" },
        { link: "/people/now-playing", name: "Em Exibição" },
        { link: "/people/upcoming", name: "Brevemente" },
        { link: "/people/top-rated", name: "Melhor Classificação" },
      ],
    },
    {
      link: "/movies",
      path: "Filmes",
      dropList: [
        { link: "/popular", name: "Populares" },
        { link: "/now-playing", name: "Em Exibição" },
        { link: "/upcoming", name: "Brevemente" },
        { link: "/top-rated", name: "Melhor Classificação" },
      ],
    },
  ];

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav className="bg-base-100 shadow-xl">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <h2 className="text-warning text-xl">
            <Link to="/" className="flex items-center gap-2">
              <BiCameraMovie size={24} />
              MoviesLib
            </Link>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {NavList.map((item, index) => (
            <NavItem
              key={index}
              link={item.link}
              path={item.path}
              dropList={item.dropList}
            />
          ))}
        </div>

        {/* Search Bar & Theme Toggle */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
