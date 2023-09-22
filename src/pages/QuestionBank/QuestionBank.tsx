import { Table } from "../../components/ui/table/Table";
import { column } from "../../components/questionsComponents/BankComponents/column";
import { Form } from "../../components/questionsComponents/BankComponents/form";
import { useGetAllQuestion } from "../../services/Questions/question.query";
import { useEffect, useState } from "react";
import { allQuestionModel } from "../../services/Questions/question.interface";
import { searchByName } from "../../utils/Seartch";
export const QuestionBank = () => {
  const { data, isLoading } = useGetAllQuestion();
  const [questions, setQuestions] = useState<
    allQuestionModel[] | [] | undefined
  >([]);
  const [query, setQuery] = useState<string>("ریاضی");
  const getName = (name: string) => {
    setQuery(name);
  };
  useEffect(() => {
    setQuestions(data);
  }, [data]);

  if (isLoading) return <p>isLoading....</p>;

  return (
    <div className="bg-slate-300 h-full flex items-start justify-center overflow-y-auto">
      <div className="w-11/12 mt-4 rounded-md shadow-md bg-slate-100 p-5">
        <Form getName={getName} lesson={query} />
        <Table data={searchByName(questions, query)} columns={column} />
      </div>
    </div>
  );
};
