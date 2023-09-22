
import { column, data } from "./columns";
import translate from "../../assets/translate/translate.json";
import { Table } from "../ui/table/Table";
export const Comments = () => {
  return (
    <div className="w-11/12 mt-4 shadow-md bg-slate-100 p-5">
      <p className=" mb-6 text-2xl font-bold">{translate.GENERAL.COMMENTS}</p>
      <Table columns={column} data={data} />
    </div>
  );
};
