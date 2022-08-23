import clsx from 'clsx';
import { useContext } from 'react';

import ButtonSwitch from '@/components/buttons/ButtonSwitch';
import ContactMenu from '@/components/contact/ContactMenu';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Search from '@/components/search';

import { ThemeContext } from '@/context/ThemeContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/social', label: 'Social' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <header
      className={clsx(
        mode === 'dark' ? 'bg-dark' : 'bg-gray-50',
        'sticky top-0 z-50 py-4 shadow-2xl'
      )}
    >
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/'>
          <NextImage src='/images/logo.png' width={42} height={42} alt='Logo' />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink
                  href={href}
                  className={clsx(
                    mode === 'dark' ? 'text-white' : 'text-black'
                  )}
                >
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center justify-center gap-2'>
          <ContactMenu />
          <ButtonSwitch mode={mode} setMode={toggleMode} />
          <Search />
        </div>
      </div>
    </header>
  );
}
