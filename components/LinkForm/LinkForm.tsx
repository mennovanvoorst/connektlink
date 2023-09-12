'use client';
import { SocialLink } from '@/types';
import { Input } from '../Input';
import { Icon } from '../Icon';
import { FormField } from '../FormField';
import { Form } from '../Form';
import { object, string } from 'yup';
import { PLATFORMS, PLATFORM_ICONS } from '@/constants';
import { Autocomplete, Option } from '../Autocomplete';

type LinkForm = {
  onRemove: (id: string) => void;
  onSubmit: (data: any) => void;
} & SocialLink;

const schema = object({
  link: string().url().required(),
  platform: string().oneOf(Object.values(PLATFORMS)).required(),
});

const platformOptions: Option[] = Object.keys(PLATFORMS).map((platform) => ({
  label: platform,
  value: PLATFORMS[platform],
  icon: PLATFORM_ICONS[PLATFORMS[platform]],
}));

const LinkForm = ({ id, title, platform, link, onRemove, onSubmit }: LinkForm) => (
  <li className="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-xl p-5 bg-gray-50">
    <span className="cursor-pointer">
      <Icon icon="drag" size={16} className="text-gray-500" />
    </span>

    <p className="font-bold text-gray-500 select-none">{title}</p>

    <button
      className="font-normal text-gray-500 hover:underline"
      onClick={() => onRemove(id)}
    >
      Remove
    </button>

    <Form
      validationSchema={schema}
      onSubmit={onSubmit}
      className="col-span-3 mt-3"
      submitOnChange
    >
      <FormField name="platform" label="Platform">
        <Autocomplete
          name="platform"
          options={platformOptions}
          placeholder="Enter platform"
        />
      </FormField>

      <FormField name="link" label="Link">
        <Input
          name="link"
          icon="link"
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
      </FormField>
    </Form>
  </li>
);

export { LinkForm };
