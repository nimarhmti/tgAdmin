import { useLocation } from "react-router-dom";
import translate from "../assets/translate/translate.json";
interface outPut {
  Path: string;
}
export const useGetPathName = () => {
  const { pathname } = useLocation();
  const Path = pathname.replace("/", "");

  switch (Path) {
    case "members":
      return { Path, label: translate.SIDEBAR.MEMBERS };
      break;
    case "dashboard":
      return { Path, label: translate.SIDEBAR.DASHBOARD };
      break;
    case "questionBank":
      return { Path, label: translate.SIDEBAR.QUESTION_LIST };
      break;
    case "addQuestion":
      return { Path, label: translate.SIDEBAR.ADD_QUESTIONS };
      break;
    case "inbox":
      return { Path, label: translate.SIDEBAR.INBOX };
      break;
    default:
      break;
  }
};
