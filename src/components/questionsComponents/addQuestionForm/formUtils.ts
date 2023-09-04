import translate from "../../../assets/translate/translate.json";
const { DEGREE_SECTION } = translate.ADD_QUESTIONS;
const { EIGHTH, FIFTH, FIRST, FOURTH, NINTH, SECOND, SEVENTH, SIXTH, THIRD } =
  translate.SUBJECTS;
export interface degreeOptionsModel {
  label: string;
  value: string;
}

export const degreeOptions: degreeOptionsModel[] = DEGREE_SECTION.map(
  (item, index) => ({ label: item, value: String(index + 1) })
);

export const scores: number[] = [0.5, 1, 1.5, 2, 2.5, 3];
export const subjects = {
  1: [...FIRST],
  2: [...SECOND],
  3: [...THIRD],
  4: [...FOURTH],
  5: [...FIFTH],
  6: [...SIXTH],
  7: [...SEVENTH],
  8: [...EIGHTH],
  9: [...NINTH],
};
