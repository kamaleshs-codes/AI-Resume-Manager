import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FormField = ({ label, htmlFor, children }: FormFieldProps) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={htmlFor} className='block text-sm font-medium text-text'>
        {label}
      </label>

      {children}
    </div>
  );
};

export default FormField;
