import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import ThemeToggle from "@/reducers/Themetoggle";
import { NavList } from "../../../data/navData";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const Navbar = () => {
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
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
