import Link from 'next/link';
import { Header } from '@/components/Header';
import { HeaderNavigation } from '@/components/Header/HeaderNavigation';
import { HeaderLeft } from '@/components/Header/HeaderLeft';
import { HeaderRight } from '@/components/Header/HeaderRight';
import { NavLinkProps } from '@/components/NavLink';
import { Button } from '@/components/Button';

type CustomizeLayoutProps = {
  children: React.ReactNode;
};

const navItems: NavLinkProps[] = [
  {
    label: 'Links',
    href: '/editor/links',
    icon: 'link',
  },
  {
    label: 'Profile details',
    href: '/editor/profile',
    icon: 'profile',
  },
];

const EditorLayout = ({ children }: CustomizeLayoutProps) => (
  <div className="grid grid-rows-[82px_1fr] p-6 gap-6 min-h-screen">
    <Header>
      <HeaderLeft>
        <h1>ConnektLink</h1>
      </HeaderLeft>

      <HeaderNavigation items={navItems} />

      <HeaderRight>
        <Button
          as={Link}
          icon="preview"
          variant="secondary"
          href="/editor/preview"
          label="Preview"
        />
      </HeaderRight>
    </Header>

    <main className="grid grid-cols-1 gap-6 lg:grid-cols-3">{children}</main>
  </div>
);

export default EditorLayout;
