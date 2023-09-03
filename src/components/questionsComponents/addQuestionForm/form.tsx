import translate from "../../../assets/translate/translate.json";
import {
  degreeOptions,
  degreeOptionsModel,
  scores,
  subjects,
} from "./formUtils";

export const Form = () => {
  console.log(subjects["0"]);
  return (
    <form onSubmit={() => ""} className="flex flex-wrap ">
      <div className="w-full flex gap-3 px-4">
        <div className="w-1/3">
          <label htmlFor="greed" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.DEGREE}
          </label>
          <br></br>
          <select
            id="greed"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2 "
          >
            {degreeOptions.map((item: degreeOptionsModel) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="greed" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.SUBJECT}
          </label>
          <br></br>
          <select
            id="greed"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2"
          >
            {degreeOptions.map((item: degreeOptionsModel) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="greed" className="text-lg font-normal">
            {translate.ADD_QUESTIONS.SCORE}
          </label>
          <br></br>
          <select
            id="greed"
            className="w-full outline-none h-10 text-lg rounded-sm mt-2"
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
        <label htmlFor="questionBox" className="text-lg font-normal">
          {translate.ADD_QUESTIONS.QUESTION}
        </label>
        <textarea
          id="questionBox"
          className="text-input-color text-lg outline-none rounded-md resize-none w-full h-16 shadow-md "
          rows={10}
        />
        <label htmlFor="answerBox" className="text-lg font-normal">
          {translate.ADD_QUESTIONS.ANSWER}
        </label>
        <textarea
          id="answerBox"
          className="text-input-color text-lg outline-none rounded-md resize-none w-full h-56 shadow-md"
          rows={10}
        />
      </div>
      <div className="w-full text-left px-4 mt-4 ">
        <button className="btn btn-red shadow-md ">
          {translate.GENERAL.ERASE}
        </button>
        <button className="btn btn-green mr-3 shadow-md">
          {translate.GENERAL.SUBMIT}
        </button>
      </div>
    </form>
  );
};
