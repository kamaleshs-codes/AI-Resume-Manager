import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='w-full rounded-xl bg-accent px-4 py-3 text-white font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98]'>
      {children}
    </button>
  );
};

export default Button;
