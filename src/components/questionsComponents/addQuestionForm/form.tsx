import { FormEvent, useState, ChangeEvent } from "react";
import translate from "../../../assets/translate/translate.json";
import {
  degreeOptions,
  degreeOptionsModel,
  scores,
  subjects,
} from "./formUtils";
import { formInputModel } from "./form.interface";
import { useAddQuestion } from "../../../services/Questions/question.query";
interface warningModel {
  status: boolean;
  msg: string;
}
export const Form = () => {
  const [data, setData] = useState<formInputModel>({
    answer: "",
    degree: 1,
    question: "",
    score: 1.5,
    subject: "آموزش قرآن اول",
  });
  const [warning, setWaring] = useState<warningModel>({
    msg: "",
    status: false,
  });
  const { mutate: addNewQuestion, isLoading } = useAddQuestion();
  const subjectIndex = data.degree as keyof typeof subjects;

  const onChangeHandler = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewQuestion(
      {
        answer: data.answer,
        lesson: data.subject,
        question: data.question,
        level: data.degree.toString(),
        score: data.score,
      },
      {
        onSuccess() {
          setWaring({
            status: true,
            msg: "ثبت شد",
          });
        },
        onError() {
          setWaring({
            status: false,
            msg: "خظایی رخ داد",
          });
        },
      }
    );
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-wrap relative ">
      <div className="w-full flex gap-3 px-4">
        <div className="w-1/3">
          {/*------------------ degree -------------------- */}
          <label htmlFor="degree" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.DEGREE}
          </label>
          <br></br>
          <select
            id="degree"
            name="degree"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2 "
            value={data.degree}
            onChange={onChangeHandler}
          >
            {degreeOptions.map((item: degreeOptionsModel) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          {/*------------------ subjects -------------------- */}
          <label htmlFor="subject" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.SUBJECT}
          </label>
          <br></br>
          <select
            id="subject"
            name="subject"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2"
            onChange={onChangeHandler}
            value={data.subject}
          >
            {subjects[subjectIndex].map((subject: string) => (
              <option value={subject} key={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        {/*------------------ score -------------------- */}
        <div className="w-1/3">
          <label htmlFor="score" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.SCORE}
          </label>
          <br></br>
          <select
            id="score"
            name="score"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2"
            value={data.score}
            onChange={onChangeHandler}
          >
            {scores.map((item: number) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-3 px-4 mt-7">
        {/*------------------ question -------------------- */}
        <label htmlFor="question" className="text-lg font-normal">
          {translate.ADD_QUESTIONS.QUESTION}
        </label>
        <textarea
          id="question"
          name="question"
          value={data.question}
          className="text-input-color text-lg outline-none rounded-md resize-none w-full h-16 shadow-md "
          rows={10}
          onChange={onChangeHandler}
        />

        {/*------------------ answer -------------------- */}
        <label htmlFor="answer" className="text-lg font-normal">
          {translate.ADD_QUESTIONS.ANSWER}
        </label>
        <textarea
          id="answer"
          name="answer"
          value={data.answer}
          className="text-input-color text-lg outline-none rounded-md resize-none w-full h-56 shadow-md"
          rows={10}
          onChange={onChangeHandler}
        />
      </div>
      <div className="w-full text-left px-4 mt-4 ">
        <button
          className="btn btn-green mr-3 shadow-md"
          type="submit"
          disabled={!data.answer || !data.question}
        >
          {translate.GENERAL.SUBMIT}
        </button>
      </div>
      {!!warning.msg && (
        <div
          className={`absolute ${
            warning.status ? "border-green-700" : "border-red-700"
          } w-60 h-10 font-bold left-4 shadow-md rounded-md -top-9 flex items-center justify-between border-2 overflow-hidden pr-3 bg-white`}
        >
          {warning.msg}
          <button
            className={`btn ${warning.status ? "btn-green" : "btn-red"}`}
            onClick={() =>
              setWaring({
                status: false,
                msg: "",
              })
            }
          >
            تایید
          </button>
        </div>
      )}
    </form>
  );
};
