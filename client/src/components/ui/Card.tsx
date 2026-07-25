import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={`
        rounded-2xl
        bg-canvas
        border
        border-border
        p-8
        shadow-(--shadow-card)
        ${className}
      `}>
      {children}
    </div>
  );
};

export default Card;
