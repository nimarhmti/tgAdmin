import { useState } from "react";
import translate from "../../assets/translate/translate.json";
import { LoginForm } from "../../components/LoginForm/LoginForm";
export const HomePage = () => {
  const [isLogin] = useState<boolean>(false);
  return (
    <div className="h-screen flex">
      <div className="max-sm:w-full w-3/12 h-full flex flex-col items-center pt-36 pb-10">
        <h2 className="font-bold text-green-800 text-3xl mb-14">
          {isLogin ? translate.HOME_PAGE.LOGIN : translate.HOME_PAGE.SIGN_IN}
        </h2>
        <LoginForm isLogin={isLogin} />
        <p className="text-sm text-gray-400 mt-auto">
          created by @
          <span className="text-sky-400 cursor-pointer hover:text-sky-700">
            IlamDevTeam
          </span>
        </p>
      </div>
      <div className="max-sm:hidden bg-cover bg-signIn-pic h-full bg-no-repeat w-9/12 relative"></div>
    </div>
  );
};
