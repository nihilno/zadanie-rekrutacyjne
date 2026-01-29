import { NAVIGATION_ITEMS } from "@/constants";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="border-r border-dashed">
      <ul className="flex flex-col gap-4 p-4">
        {NAVIGATION_ITEMS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <NavLink to={href} className="flex items-center gap-2">
              <Icon className="size-5" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
