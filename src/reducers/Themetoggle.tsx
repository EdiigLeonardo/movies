import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/slicers/themeSlice";
import { RootState } from "@/store/store";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={handleToggle}
      className="flex items-center gap-2 cursor-pointer text-warning"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m16.95-6.364l-2.121 2.121M7.05 7.05L4.93 4.93M16.95 16.95l-2.121 2.121M7.05 16.95l-2.121-2.121"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9m0 7a7 7 0 100-14 7 7 0 000 14zm0 0v4m-7-4h4m7 0h4m-4-7V5m0 7H5"
          />
        </svg>
      )}
      <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
};

export default ThemeToggle;
