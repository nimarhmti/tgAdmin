import { createColumnHelper } from "@tanstack/react-table";
import translate from "../../assets/translate/translate.json";
import { Chip } from "../ui/Chip/Chip";
export const users = [
  {
    id: 22,
    userName: "nima",
    role: "adimn",
    activities: true,
  },
  {
    id: 22,
    userName: "nima",
    role: "adimn",
    activities: false,
  },
  {
    id: 22,
    userName: "nima",
    role: "adimn",
    activities: true,
  },
];
const columnHelper = createColumnHelper<any>();

export const columns = [
  columnHelper.accessor("userName", {
    cell: (info) => info.getValue(),
    header: translate.HOME_PAGE.USERNAME,
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    header: translate.HOME_PAGE.ROLE,
  }),
  columnHelper.accessor("activities", {
    cell: (info) => {
      const val = info.getValue();
      return val ? (
        <Chip label={translate.HOME_PAGE.ACTIVE} bgColor="bg-[#2f9e44]" />
      ) : (
        <Chip label={translate.HOME_PAGE.DISABLED} bgColor="bg-[#adb5bd]" />
      );
    },
    header: translate.HOME_PAGE.STATUS,
  }),
];
