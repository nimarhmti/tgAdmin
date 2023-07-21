import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import navItems, { navItemModel } from "../../config/navItem";
interface Props {
  collapsed: boolean;
  onCollapsed: () => void;
}

export const Sidebar = ({ collapsed, onCollapsed }: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  //map NavItem Handler
  const mapNavItemHandler = ({ icons, id, label, to }: navItemModel) => (
    <li
      key={id}
      className={
        collapsed
          ? "rounded-full p-2 mx-3 w-10 h-10 " + "navItem"
          : "rounded-md p-2 mx-3 gap-4 " + "navItem"
      }
    >
      <Link to={to} className="flex items-center justify-center gap-3">
        {icons}
        <span>{!collapsed && label}</span>
      </Link>
    </li>
  );
  return (
    <aside className="bg-sky-900 text-zinc-50 z-20">
      <div className="flex flex-col justify-between">
        <div
          className={
            collapsed
              ? "py-4 justify-center " + "sidebar"
              : "p-4 justify-between " + "sidebar"
          }
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            onClick={onCollapsed}
            className="grid place-content-center hover:bg-slate-700 w-10 h-10 rounded-full"
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow">
          <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navItems.map(mapNavItemHandler)}
          </ul>
        </div>
      </div>
    </aside>
  );
};
