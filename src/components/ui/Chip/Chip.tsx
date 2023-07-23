import React from "react";
interface Props {
  label: string | undefined;
  bgColor?: string;
}
export const Chip = ({ label, bgColor }: Props) => {
  return (
    <div className={`chip ${bgColor ?? "bg-slate-400"}`}>
      <div className="mt-px">{label}</div>
    </div>
  );
};
