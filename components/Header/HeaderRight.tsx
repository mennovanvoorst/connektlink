import { ReactNode } from 'react';

export interface HeaderRightProps {
  children: ReactNode;
}

const HeaderRight = ({ ...props }: HeaderRightProps) => {
  return <div>{props.children}</div>;
};

HeaderRight.COMPONENT_NAME = 'HEADER_RIGHT';

export { HeaderRight };
