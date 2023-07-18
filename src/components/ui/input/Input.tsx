import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  width?: string;
}
let defaultStyle =
  "mt-1 block px-3 py-2 font- text-input-color bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, width, label, ...otherProps },
  ref
) => {
  defaultStyle += width;

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        className={defaultStyle}
        id={name}
        name={name}
        ref={ref}
        {...otherProps}
      />
    </>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
