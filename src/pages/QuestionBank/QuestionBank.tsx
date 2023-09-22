import { Table } from "../../components/ui/table/Table";
import {
  column,
  data,
} from "../../components/questionsComponents/BankComponents/column";
import { Form } from "../../components/questionsComponents/BankComponents/form";
import { useGetAllQuestion } from "../../services/Questions/question.query";
export const QuestionBank = () => {
  const { data: questions, isLoading } = useGetAllQuestion();
  if (isLoading) return <p>isLoading....</p>;
  console.log(questions);
  return (
    <div className="bg-slate-300 h-full flex items-start justify-center overflow-y-auto">
      <div className="w-11/12 mt-4 rounded-md shadow-md bg-slate-100 p-5">
        <Form />
        <Table data={[]} columns={column} />
      </div>
    </div>
  );
};
