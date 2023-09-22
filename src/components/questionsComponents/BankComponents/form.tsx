import { useState, FormEvent } from "react";
import FormInput from "../../ui/input/Input";
import translate from "../../../assets/translate/translate.json";
interface Props {
  getName: (name: string) => void;
  lesson: string;
}
export const Form = ({ getName, lesson }: Props) => {
  const onChangHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    getName(value);
  };
  return (
    <div className=" w-full h-28 bg-slate-100 flex gap-x-3">
      <FormInput
        name="subject"
        label={translate.ADD_QUESTIONS.DEGREE}
        onChange={onChangHandler}
        value={lesson}
      />
    </div>
  );
};
