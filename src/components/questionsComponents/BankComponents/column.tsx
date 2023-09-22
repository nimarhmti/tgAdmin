import { createColumnHelper } from "@tanstack/react-table";
import translate from "../../../assets/translate/translate.json";
import { RowAction } from "./rowAction";
export interface dataModel {
  id: number;
  question: string;
  score: number;
}

export const data: dataModel[] = [
  { id: 1, question: "تست", score: 4 },
  { id: 2, question: "تست", score: 5 },
  { id: 3, question: "تست", score: 7 },
  { id: 4, question: "تست", score: 9 },
];

const columnHelper = createColumnHelper<any>();
export const column = [
  columnHelper.accessor("lesson", {
    header: translate.ADD_QUESTIONS.SUBJECT,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("question", {
    header: translate.ADD_QUESTIONS.QUESTION,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("score", {
    header: translate.GENERAL.SCORES,
    cell: (info) => <RowAction id={info.getValue()} />,
  }),
];
