import React, { useState, useEffect } from "react";
import { columns, users } from "./column";
import translate from "../../assets/translate/translate.json";
import { Table } from "../ui/table/Table";
import { useGetAllMembers } from "../../services/getAllmembers/members.query";
export const MembersInfo = () => {
  const { data, isLoading } = useGetAllMembers();

  if (isLoading) return <p>isLoading...</p>;
  return (
    <div className="w-11/12 mt-4 shadow-md bg-slate-100 p-5">
      <p className=" mb-6 text-2xl font-bold">{translate.SIDEBAR.MEMBERS}</p>
      <Table data={data} columns={columns} />
    </div>
  );
};
