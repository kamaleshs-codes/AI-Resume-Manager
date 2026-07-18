import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className='
        w-full
        rounded-xl
        border
        border-border
        bg-canvas

        px-4
        py-3

        text-text
        placeholder:text-text-muted

        outline-none

        transition-all
        duration-200

        focus:border-accent
        focus:ring-2
        focus:ring-accent/20

        hover:border-white/15
      '
    />
  );
};

export default Input;
