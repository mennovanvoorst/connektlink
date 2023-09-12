import { NavLink, NavLinkProps } from '../NavLink';

export interface HeaderNavigationProps {
  items: NavLinkProps[];
}

const HeaderNavigation = ({ items }: HeaderNavigationProps) => {
  const navItems = items.map(({ href, label, icon }) => (
    <NavLink href={href} label={label} icon={icon} />
  ));

  return <nav className="flex gap-2">{navItems}</nav>;
};

HeaderNavigation.COMPONENT_NAME = 'HEADER_NAVIGATION';

export { HeaderNavigation };
