import { useState } from "react";
import { Link } from "react-router-dom";

interface DropListItem {
  link: string;
  name: string;
}

interface NavItemProps {
  link: string;
  path: string;
  dropList?: DropListItem[] | null;
}

const NavItem: React.FC<NavItemProps> = ({ link, path, dropList }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Link to={link} className="text-base-content hover:text-warning px-4">
        {path}
      </Link>
      {dropList && (
        <ul
          className={`absolute top-6 z-50 left-0 bg-base-200 shadow-lg rounded-lg p-4 space-y-2 ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          {dropList.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="text-base-content hover:text-warning">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
