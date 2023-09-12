import { getElementByName } from '@/utils/components';
import classNames from 'classnames';
import { Children, ReactElement } from 'react';

type CardProps = {
  children: ReactElement | ReactElement[];
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  const elements = Children.toArray(children) as ReactElement[];

  const cardTitle = getElementByName(elements, 'CARD_TITLE');
  const cardBody = getElementByName(elements, 'CARD_BODY');
  const cardFooter = getElementByName(elements, 'CARD_FOOTER');

  return (
    <div className={classNames('p-10 bg-white rounded-xl', className)}>
      {cardTitle}
      {cardBody}
      {cardFooter}
    </div>
  );
};

export { Card };
