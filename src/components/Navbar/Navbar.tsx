import { Bars3Icon } from "@heroicons/react/24/outline";
import path from "path";
import { useLocation } from "react-router-dom";
import { Chip } from "../ui/Chip/Chip";
import { useGetPathName } from "../../hooks/useGetPath";
interface Props {
  onMenuButtonClick: () => void;
}
export const Navbar = ({ onMenuButtonClick }: Props) => {
  const path = useGetPathName();
  return (
    <nav className="navbar">
      <div className="font-bold text-lg">
        <Chip label={path?.label} bgColor="bg-[#1da1f2]" />
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
