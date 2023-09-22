import { createColumnHelper } from "@tanstack/react-table";
import translate from "../../assets/translate/translate.json";
import { Chip } from "../ui/Chip/Chip";
import { positionChecker } from "../utils/idChecker";
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
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: translate.HOME_PAGE.USERNAME,
  }),
  columnHelper.accessor("id", {
    cell: (info) => positionChecker(info.getValue()),
    header: translate.HOME_PAGE.ROLE,
  }),
  columnHelper.accessor("active", {
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
