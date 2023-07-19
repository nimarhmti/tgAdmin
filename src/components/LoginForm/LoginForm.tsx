import { useState, FormEvent } from "react";
import FormInput from "../ui/input/Input";

import translate from "../../assets/translate/translate.json";
import { type } from "os";

interface loginForm {
  username: string;
  password: string;
  email?: string;
  repeatPassword?: string;
}
interface Props {
  isLogin: boolean;
}
type eventType = FormEvent<HTMLInputElement>;
export const LoginForm = ({ isLogin }: Props) => {
  const [loginInfo, setLoginInfo] = useState<loginForm>({
    email: "",
    password: "",
    username: "",
    repeatPassword: "",
  });

  const onChangeHandler = (e: eventType) => {
    const { name, value, id } = e.currentTarget;

    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(loginInfo);
  };
  return (
    <form onSubmit={onSubmitHandler} className="h-3/5 flex flex-col gap-3">
      <FormInput
        onChange={onChangeHandler}
        name="username"
        value={loginInfo.username}
        label={translate.HOME_PAGE.USERNAME}
        type="text"
        placeholder="example1122"
      />
      {!isLogin ? (
        <FormInput
          onChange={onChangeHandler}
          name="email"
          value={loginInfo.email}
          label={translate.HOME_PAGE.EMAIL}
          type="text"
          placeholder="example@email.com"
        />
      ) : null}

      <FormInput
        onChange={onChangeHandler}
        name="password"
        value={loginInfo.password}
        label={translate.HOME_PAGE.PASSWORD}
        type="password"
      />
      {!isLogin ? (
        <FormInput
          onChange={onChangeHandler}
          name="repeatPassword"
          value={loginInfo.repeatPassword}
          label={translate.HOME_PAGE.REPEAT_PASSWORD}
          type="password"
        />
      ) : null}
      <div className="flex justify-end gap-2">
        <button
          className={isLogin ? "btn btn-red" : "btn btn-green"}
          type="submit"
        >
          {isLogin ? translate.HOME_PAGE.LOGIN : translate.HOME_PAGE.SIGN_IN}
        </button>
      </div>
    </form>
  );
};
