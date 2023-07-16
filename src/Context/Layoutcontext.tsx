import React, { createContext, PropsWithChildren, ReactNode, FC } from "react";
export const LayoutContext = createContext<
  string | null | FC<PropsWithChildren> | ReactNode
>(null);
