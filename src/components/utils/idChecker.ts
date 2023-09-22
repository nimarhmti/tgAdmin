import translate from "../../assets/translate/translate.json";
const { ADMIN, USER } = translate.HOME_PAGE;
export const positionChecker = (id: number) => {
  return id % 2 == 0 ? ADMIN : USER;
};
