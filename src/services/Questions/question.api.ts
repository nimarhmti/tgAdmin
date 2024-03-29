import { api } from "../../config/axios";
import { addQuestionModel, allQuestionModel } from "./question.interface";
const serviceName = "/question";
export const addQuestion = async (data: addQuestionModel) => {
  const results = await api.post(`${serviceName}/new`, data);
  return results.data;
};

export const getAllQuestion = async () => {
  const data = await api.get<allQuestionModel[]>(`${serviceName}/all`);
  return data.data;
};
