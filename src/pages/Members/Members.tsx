import React from "react";
import { Table } from "../../components/ui/table/Table";
import { columns, users } from "../../components/membersComponents/column";
import { Card } from "../../components/ui/Card/Card";
export const Members = () => {
  return (
    <div className="h-full pt-14">
      <Table data={users} columns={columns} />
    </div>
  );
};
