import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="shadow-md py-2 px-2 rounded-sm bg-card-color inline-block items-center">
      {children}
    </div>
  );
};
