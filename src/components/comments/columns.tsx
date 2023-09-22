import { createColumnHelper } from "@tanstack/react-table";
import translate from "../../assets/translate/translate.json";
const columnHelper = createColumnHelper<any>();
export const column = [
  columnHelper.accessor("user", {
    header: translate.HOME_PAGE.USER,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("comment", {
    header: translate.GENERAL.COMMENTS,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("reply", {
    header: translate.GENERAL.REPLY,
    cell: (info) => info.getValue(),
  }),
];

export const data = [
  {
    user: "mohhmad",
    comment: "بسیار کاربردی",
    reply: "تشکر",
  },
  {
    user: "mehdi",
    comment: "ممنونم میشم سوالات مقاطع بالا تر را وارد کنید",
    reply: "به زودی حتما",
  },
  {
    user: "zahra",
    comment: "سریع و کارآمد",
    reply: "بزرگوارید",
  },
  {
    user: "mohsen",
    comment: "سوالات بسیار با کیفیت اند",
    reply: "ممنوم",
  },
  {
    user: "moein",
    comment: "بسیار کاربردی",
    reply: "تشکر",
  },
];
