import { FC, useState, PropsWithChildren } from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Sidebar } from "../../Sidebar/Sidebar";
const baseGridLayout =
  " transition-[grid-template-columns] duration-300 ease-in-out grid min-h-screen ";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setSidebarCollapsed] = useState<boolean>(false);
  const onCollapsed = () => {
    setSidebarCollapsed((pre) => !pre);
  };
  return (
    <div
      className={
        collapsed
          ? "grid-cols-sidebar-collapsed" + baseGridLayout
          : "grid-cols-sidebar" + baseGridLayout
      }
    >
      <Sidebar collapsed={collapsed} onCollapsed={onCollapsed} />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
