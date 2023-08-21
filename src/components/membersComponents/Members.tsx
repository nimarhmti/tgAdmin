import React from "react";
import { columns, users } from "./column";
import translate from "../../assets/translate/translate.json";
import { Table } from "../ui/table/Table";
export const MembersInfo = () => {
  return (
    <div className="w-11/12 mt-4 shadow-md bg-slate-100 p-5">
      <p className=" mb-6 text-2xl font-bold">{translate.SIDEBAR.MEMBERS}</p>
      <Table data={users} columns={columns} />
    </div>
  );
};
