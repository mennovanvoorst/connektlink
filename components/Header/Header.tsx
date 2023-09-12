import { getElementByName } from '@/utils/components';
import { Children, ReactElement } from 'react';

type HeaderProps = {
  children: ReactElement | ReactElement[];
};

const Header = ({ children }: HeaderProps) => {
  const elements = Children.toArray(children) as ReactElement[];

  const headerLeft = getElementByName(elements, 'HEADER_LEFT');
  const headerRight = getElementByName(elements, 'HEADER_RIGHT');
  const headerNavigation = getElementByName(elements, 'HEADER_NAVIGATION');

  return (
    <header className="w-full bg-white flex justify-between p-4 items-center rounded-xl">
      {headerLeft}
      {headerNavigation}
      {headerRight}
    </header>
  );
};

export { Header };
