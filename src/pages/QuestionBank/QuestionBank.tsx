import { Table } from "../../components/ui/table/Table";
import {
  column,
  data,
} from "../../components/questionsComponents/BankComponents/column";
import { Form } from "../../components/questionsComponents/BankComponents/form";
export const QuestionBank = () => {
  return (
    <div className="bg-slate-300 h-full flex items-start justify-center">
      <div className="w-11/12 mt-4 rounded-md shadow-md bg-slate-100 p-5">
        <Form />
        <Table data={data} columns={column} />
      </div>
    </div>
  );
};
