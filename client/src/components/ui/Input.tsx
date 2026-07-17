import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className='w-full rounded-xl border border-gray-300 bg-canvas px-4 py-3 text-text placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20'
    />
  );
};

export default Input;
