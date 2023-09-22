import React from "react";
import { Comments } from "../../components/comments/Comments";

export const Inbox = () => {
  return (
    <div className="bg-slate-300 h-full flex flex-col items-center overflow-y-scroll gap-2">
      <Comments />
    </div>
  );
};
