import { useState, FormEvent } from "react";
import FormInput from "../ui/input/Input";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import twitter from "../../assets/icons/twitter.png";
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
        ltr={true}
      />
      {!isLogin ? (
        <FormInput
          onChange={onChangeHandler}
          name="email"
          value={loginInfo.email}
          label={translate.HOME_PAGE.EMAIL}
          type="text"
          placeholder="example@email.com"
          ltr={true}
        />
      ) : null}

      <FormInput
        onChange={onChangeHandler}
        name="password"
        value={loginInfo.password}
        label={translate.HOME_PAGE.PASSWORD}
        type="password"
        ltr={true}
      />
      {!isLogin ? (
        <FormInput
          onChange={onChangeHandler}
          name="repeatPassword"
          value={loginInfo.repeatPassword}
          label={translate.HOME_PAGE.REPEAT_PASSWORD}
          type="password"
          ltr={true}
        />
      ) : null}
      <p
        className="text-sm cursor-pointer text-gray-500 hover:text-sky-600 font-bold mr-1"
        style={{ fontSize: "0.7rem" }}
      >
        {translate.HOME_PAGE.FORGET_PASSWORD}
      </p>
      <div className="flex justify-end gap-2">
        <button
          className={isLogin ? "btn btn-red" : "btn btn-green"}
          type="submit"
        >
          {isLogin ? translate.HOME_PAGE.LOGIN : translate.HOME_PAGE.SIGN_IN}
        </button>
      </div>
      <div className="bg-gray-400 rounded-sm h-8">
        <hr />
      </div>
      <div className="flex justify-center gap-5 px-1 items-center mt-3">
        <img src={facebook} alt="facebook" className="w-10" />
        <img src={telegram} alt="telegram" className="w-10" />
        <img src={instagram} alt="instagram" className="w-10" />
        <img src={twitter} alt="twitter" className="w-10" />
      </div>
    </form>
  );
};
