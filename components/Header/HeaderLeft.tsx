import { ReactNode } from 'react';

export interface HeaderLeftProps {
  children: ReactNode;
}

const HeaderLeft = ({ ...props }: HeaderLeftProps) => {
  return <div>{props.children}</div>;
};

HeaderLeft.COMPONENT_NAME = 'HEADER_LEFT';

export { HeaderLeft };
