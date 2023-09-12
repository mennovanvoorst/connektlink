import { ReactNode } from 'react';

export interface CardTitleProps {
  title: string;
  subtitle: string;
}

const CardTitle = ({ title, subtitle }: CardTitleProps) => (
  <div className="mb-10">
    <h1>{title}</h1>
    <p className="text-gray-500 sm:mt-2">{subtitle}</p>
  </div>
);

CardTitle.COMPONENT_NAME = 'CARD_TITLE';

export { CardTitle };
