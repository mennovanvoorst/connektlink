import { ICONS } from '@/constants';
import { Platform } from '@/types';
import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { InputHTMLAttributes, SetStateAction, useContext, useState } from 'react';
import { FormContext } from '../Form';

export type Option = {
  label: string;
  icon: keyof typeof ICONS;
  value: Platform;
};

type ComboboxProps = {
  name: string;
  options: Option[];
} & InputHTMLAttributes<HTMLInputElement>;

const Autocomplete = ({ name, options, ...args }: ComboboxProps) => {
  const [value, setValue] = useState(options[0]);
  const [query, setQuery] = useState<string>('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.value.toLowerCase().includes(query.toLowerCase());
        });

  const Icon = ICONS[value.icon];

  const handleChange = (data: Option) => {
    setValue(data);
  };

  return (
    <div className="relative">
      <Combobox value={value} onChange={handleChange}>
        <div className="relative">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(option: any) => option.value}
            name={name}
            className="input pl-10"
            {...args}
          />

          {Icon && (
            <span className="absolute top-0 left-4 flex h-full w-[20px] items-center justify-center text-gray-500">
              <Icon />
            </span>
          )}
        </div>
        <Combobox.Options className="absolute left-0 right-0 top-full z-10 mt-2 grid max-h-[195px] gap-[1px] overflow-hidden overflow-y-auto rounded-lg bg-white shadow-lg">
          {filteredOptions.map((option) => {
            const Icon = ICONS[option.icon];

            return (
              <Combobox.Option
                key={option.value}
                value={option}
                className={classNames(
                  'gap-x-3 px-4 py-3 flex gap-2 items-center cursor-pointer text-gray-500',
                  'hover:bg-gray-100'
                )}
              >
                {Icon && <Icon />}

                {option.label}
              </Combobox.Option>
            );
          })}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export { Autocomplete };
