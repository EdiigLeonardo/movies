import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
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
  );
};

export default SearchBar;
