import React from "react";
interface Props {
  id: string | number;
}
const scores = ["1", "2", "3", "4", "5"];
export const RowAction = ({ id }: Props) => {
  return (
    <div>
      <select className="outline-none rounded-md border-none text-black">
        {scores.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
