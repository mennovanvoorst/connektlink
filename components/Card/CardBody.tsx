import { ReactNode } from 'react';

export interface CardBodyProps {
  children: ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => <div>{children}</div>;

CardBody.COMPONENT_NAME = 'CARD_BODY';

export { CardBody };
