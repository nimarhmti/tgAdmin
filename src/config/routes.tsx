import {
  Dashboard,
  Members,
  QuestionBank,
  AddQuestion,
  HomePage,
} from "../pages/index";
import { createBrowserRouter } from "react-router-dom";
import { Authorization } from "../Authorization";

interface routeModel {
  id: string;
  path: string;
  private: boolean;
  component: React.ReactNode;
}

const routes: routeModel[] = [
  {
    id: "signIn",
    path: "/",
    private: false,
    component: <HomePage />,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    private: true,
    component: <Dashboard />,
  },
  {
    id: "members",
    path: "/members",
    private: true,
    component: <Members />,
  },
  {
    id: "questionBank",
    path: "/questionBank",
    private: true,
    component: <QuestionBank />,
  },
  {
    id: "addQuestion",
    path: "/addQuestion",
    private: true,
    component: <AddQuestion />,
  },
];

export const router = createBrowserRouter(
  routes.map((route: routeModel) => ({
    id: route.id,
    path: route.path,
    element: route.private ? (
      <Authorization>{route.component}</Authorization>
    ) : (
      route.component
    ),
  }))
);
