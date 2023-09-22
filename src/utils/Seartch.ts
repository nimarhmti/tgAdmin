import { allQuestionModel } from "../services/Questions/question.interface";
type inputType = allQuestionModel[] | [] | any[] | undefined;
export const searchByName = (list: inputType, query: string) => {
  return list?.filter((item: allQuestionModel) => {
    return query.toLowerCase() === "" ? item : item.lesson.includes(query);
  });
};
