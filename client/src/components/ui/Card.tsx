import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className='w-full max-w-md rounded-2xl bg-canvas p-8 shadow-lg border border-gray-200'>
      {children}
    </div>
  );
};
export default Card;
