'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { ICONS } from '@/constants';
import { Button } from '../Button';

export type NavLinkProps = {
  href: string;
  label: string;
  icon: keyof typeof ICONS;
};

const NavLink = ({ href, label, icon }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Button
      as={Link}
      variant="transparent"
      icon={icon}
      label={label}
      href={href}
      alwaysShowIcon
      className={classNames({
        'bg-blue-50 text-blue-500': isActive,
      })}
    />
  );
};

export { NavLink };
