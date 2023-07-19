import { useState } from "react";
import translate from "../../assets/translate/translate.json";
import { LoginForm } from "../../components/LoginForm/LoginForm";
export const HomePage = () => {
  const [isLogin, setISignIn] = useState<boolean>(true);
  return (
    <div className="h-screen flex">
      <div className="w-3/12 h-full flex flex-col items-center pt-36 pb-10">
        <h1 className="font-bold text-green-800 text-3xl mb-14">
          {true ? translate.HOME_PAGE.LOGIN : translate.HOME_PAGE.SIGN_IN}
        </h1>
        <LoginForm isLogin={isLogin} />
      </div>
      <div className="bg-cover bg-signIn-pic h-full bg-no-repeat w-9/12 relative"></div>
    </div>
  );
};
