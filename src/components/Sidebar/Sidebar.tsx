import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
interface Props {
  collapsed: boolean;
  onCollapsed: () => void;
}

const SidebarStyle = " flex items-center border-b border-b-gray-600 ";
export const Sidebar = ({ collapsed, onCollapsed }: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <aside className="bg-sky-900 text-zinc-50 z-20">
      <div className="flex flex-col justify-between">
        <div
          className={
            collapsed
              ? "py-4 justify-center" + SidebarStyle
              : "p-4 justify-between" + SidebarStyle
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
      </div>
    </aside>
  );
};
