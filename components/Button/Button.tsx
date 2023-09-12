'use client';
import { ICONS, PLATFORMS } from '@/constants';
import { Platform } from '@/types';
import classNames from 'classnames';
import { ElementType } from 'react';
import { PiArrowRight } from 'react-icons/pi';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent';

export type ButtonProps<T extends ElementType> = {
  as?: T;
  variant: ButtonVariant | Platform;
  label: string;
  icon?: keyof typeof ICONS;
  fullWidth?: boolean;
  showArrow?: boolean;
  alwaysShowIcon?: boolean;
  className?: string;
};

const Button = <T extends ElementType = 'button'>({
  as,
  variant,
  label,
  icon,
  fullWidth = false,
  alwaysShowIcon = false,
  showArrow = false,
  className,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';
  const Icon = icon ? ICONS[icon] : null;

  return (
    <Component
      className={classNames(className, 'btn', {
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
        'btn--transparent': variant === 'transparent',
        'bg-gray-950 text-white': variant === PLATFORMS.github,
        'bg-purple-500 text-white': variant === PLATFORMS.instagram,
        'bg-red-500 text-white': variant === PLATFORMS.youtube,
        'w-full': fullWidth,
      })}
      {...props}
    >
      {Icon && (
        <span
          className={classNames({
            'inline-block md:hidden': !alwaysShowIcon,
            'inline-block': alwaysShowIcon,
          })}
        >
          <Icon size={20} />
        </span>
      )}

      <span className="hidden md:inline-block grow">{label}</span>

      {showArrow && (
        <span className="inline-block">
          <PiArrowRight />
        </span>
      )}
    </Component>
  );
};

export { Button };
