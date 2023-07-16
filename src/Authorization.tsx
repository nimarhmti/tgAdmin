import { useState, FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "./components/ui/Layout/layout";
export const Authorization: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  return isAuth ? <Layout>{children}</Layout> : <Navigate to="/signIn" />;
};
