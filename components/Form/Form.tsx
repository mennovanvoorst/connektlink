'use client';
import classNames from 'classnames';
import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { createContext } from 'react';
import { InferType, Schema, ValidationError } from 'yup';

type FormProps = {
  validationSchema?: Schema;
  children: ReactNode[];
  className?: string;
  submitOnChange?: boolean;
  onSubmit: (data: any) => void;
} & FormHTMLAttributes<HTMLFormElement>;

export const FormContext = createContext<{
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  errors: Record<string, string | null>;
}>({
  onChange: async function () {},
  errors: {},
});

const Form = ({
  validationSchema,
  children,
  className,
  submitOnChange,
  onSubmit,
  ...props
}: FormProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const form = event.target as unknown as { elements: HTMLInputElement[] };
      const inputs = Array.from(form.elements);

      let values = inputs.reduce(
        (prev, { value, name }) => ({
          ...prev,
          [name]: value,
        }),
        {}
      );

      let validatedValue = values;

      if (validationSchema) validatedValue = await validationSchema.validate(values);

      setErrors({});
      onSubmit(validatedValue);
    } catch (e: unknown) {
      const errors = e as ValidationError;
      console.log(errors);
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    try {
      let validatedValue = value;

      if (validationSchema) {
        validatedValue = await validationSchema.validateAt(name, { [name]: value });
      }

      setErrors((errors) => ({ ...errors, [name]: null }));
      if (submitOnChange) form.current?.requestSubmit();
    } catch (e: unknown) {
      const error = e as ValidationError;
      setErrors((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  return (
    <form
      ref={form}
      className={classNames('flex flex-col gap-3', className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FormContext.Provider value={{ onChange: handleChange, errors }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export { Form };
