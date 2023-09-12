import { ICONS } from '@/constants';
import classNames from 'classnames';
import {
  ComponentPropsWithRef,
  HTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useContext,
} from 'react';
import { FormContext } from '../Form';

type InputProps = {
  name: string;
  icon?: keyof typeof ICONS;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ icon, name, ...args }: InputProps) => {
  const { onChange } = useContext(FormContext);
  const Icon = icon ? ICONS[icon] : null;

  return (
    <span className="relative flex w-full flex-col gap-1">
      {Icon && (
        <span className="absolute left-4 flex h-full w-[20px] items-center justify-center text-gray-500">
          <Icon />
        </span>
      )}

      <input
        className={classNames('input', { 'pl-10': !!icon })}
        id={name}
        name={name}
        onChange={onChange}
        {...args}
      />
    </span>
  );
};

export { Input };
