import {
  Dashboard,
  Members,
  QuestionBank,
  AddQuestion,
  HomePage,
} from "../pages/index";

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

export default routes;
