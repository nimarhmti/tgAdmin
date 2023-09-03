import exp from "constants";
import translate from "../../../assets/translate/translate.json";
const { DEGREE_SECTION } = translate.ADD_QUESTIONS;
export interface degreeOptionsModel {
  label: string;
  value: string;
}

export const degreeOptions: degreeOptionsModel[] = DEGREE_SECTION.map(
  (item, index) => ({ label: item, value: "" + index })
);

export const scores: number[] = [0.5, 1, 1.5, 2, 2.5, 3];
export const subjects = {
  0: [{ label: "", value: 1 }],
};
