import { ReactNode } from 'react';

export interface CardFooterProps {
  children: ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => (
  <div className="flex justify-end pt-4 mt-4 border-t">{children}</div>
);

CardFooter.COMPONENT_NAME = 'CARD_FOOTER';

export { CardFooter };
