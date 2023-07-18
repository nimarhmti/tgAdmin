import React from "react";
import FormInput from "../../components/ui/input/Input";
import translate from "../../assets/translate/translate.json";
import { LoginForm } from "../../components/LoginForm/LoginForm";
export const HomePage = () => {
  return (
    <div className="h-screen flex">
      <div className="w-4/12 h-full flex flex-col items-center pt-36 pb-10">
        <h1 className="font-bold text-3xl mb-14">
          {translate.HOME_PAGE.LOGIN}
        </h1>
        <LoginForm />
      </div>
      <div className="bg-cover bg-signIn-pic h-full bg-no-repeat w-8/12 relative"></div>
    </div>
  );
};
