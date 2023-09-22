import { useMutation, useQuery } from "@tanstack/react-query";
import { addQuestionModel } from "./question.interface";
import { addQuestion, getAllQuestion } from "./question.api";
import { queryClient } from "../../config/queryClient";
export const useAddQuestion = () => {
  return useMutation((data: addQuestionModel) => addQuestion(data), {
    onSuccess() {
      queryClient.invalidateQueries(["questions"]);
    },
  });
};

export const useGetAllQuestion = () =>
  useQuery({
    queryKey: ["questions"],
    queryFn: getAllQuestion,
  });
