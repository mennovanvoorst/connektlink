import { PropsWithChildren, useContext } from 'react';
import { FormContext } from '../Form/Form';

type FormFieldProps = {
  name: string;
  label: string;
} & PropsWithChildren;

const FormField = ({ name, label, children }: FormFieldProps) => {
  const { errors } = useContext(FormContext);

  return (
    <label htmlFor={name} className="w-full">
      <label htmlFor={name} className="block text-xs text-gray-500 mb-1">
        {label}
      </label>
      {children}
      {errors[name] && <p className="text-red-500">{errors[name]}</p>}
    </label>
  );
};

export { FormField };
