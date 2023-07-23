import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/pic/profile.jpg";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import translate from "../../assets/translate/translate.json";
import navItems, { navItemModel } from "../../config/navItem";
import { useGetPathName } from "../../hooks/useGetPath";
interface Props {
  collapsed: boolean;
  onCollapsed: () => void;
  shown: boolean;
}

export const Sidebar = ({ collapsed, onCollapsed, shown }: Props) => {
  const path = useGetPathName();
  const [selectedRoute, setSelectedRoute] = React.useState<string | undefined>(
    path?.Path
  );
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

  //map NavItem Handler
  const mapNavItemHandler = ({ icons, id, label, to }: navItemModel) => (
    <li
      key={id}
      onClick={() => setSelectedRoute(id)}
      className={`
        ${
          collapsed
            ? "rounded-full p-2 mx-3 w-10 h-10 " + "navItem "
            : "rounded-md p-2 mx-3 gap-4 " + "navItem "
        }
       ${selectedRoute === id && "bg-slate-700"} 
      `}
    >
      <Link to={to} className="flex items-center justify-center gap-3">
        {icons}
        <span>{!collapsed && label}</span>
      </Link>
    </li>
  );
  //sidebar
  return (
    <aside
      className={`aside ${collapsed ? "w-16" : "w-[300px]"} ${
        !shown && " -translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* sidebar header section */}
        <div
          className={
            collapsed
              ? "py-4 justify-center " + "sidebar"
              : "p-4 justify-between " + "sidebar"
          }
        >
          {!collapsed && (
            <span className="whitespace-nowrap">
              {translate.SIDEBAR.ADMIN_PANEL}
            </span>
          )}
          <button
            onClick={onCollapsed}
            className="grid place-content-center hover:bg-slate-700 w-10 h-10 rounded-full"
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        {/* navigation items section */}
        <div className="flex-grow">
          <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navItems.map(mapNavItemHandler)}
          </ul>
        </div>
        {/* profile section */}
        <div className="profile-section hover:bg-slate-700 ">
          <div className="flex gap-4 items-center h-11 overflow-hidden ">
            <img
              src={profile}
              alt="profile image"
              className="rounded-full w-9 h-9"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">نیما رحمتی </span>
                <Link to="/" className="text-indigo-200 text-sm">
                  {translate.SIDEBAR.VIEW_PROFILE}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
