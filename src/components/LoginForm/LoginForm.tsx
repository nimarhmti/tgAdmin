import { useState } from "react";
import FormInput from "../ui/input/Input";

import translate from "../../assets/translate/translate.json";
interface loginForm {
  username: string;
  password: string;
}
interface signInForm extends loginForm {
  email: string;
  repeatPassword: string;
}
export const LoginForm = () => {
  return (
    <form>
      <FormInput />
    </form>
  );
};
