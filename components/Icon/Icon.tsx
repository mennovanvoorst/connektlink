import { ICONS } from '@/constants';
import { IconBaseProps } from 'react-icons';

type IconProps = {
  icon: keyof typeof ICONS;
} & IconBaseProps;

const Icon = ({ icon, ...args }: IconProps) => {
  const Element = ICONS[icon];

  return <Element {...args} />;
};

export { Icon };
