import clsx from 'clsx';
import React, { useContext } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { ThemeContext } from '@/context/ThemeContext';
const links = [
  { href: '/', icon: '' },
  // { href: '/', icon: <FacebookIcon /> },
  // { href: '/social', icon: <InstagramIcon /> },
  // { href: '/about', icon: <TelegramIcon /> },
  // { href: '/contact', icon: <TwitterIcon /> },
];

const ContactMenu = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <ul className='flex items-center justify-between space-x-4'>
      {links.map(({ href, icon }) => (
        <li key={`${href}${icon}`}>
          <UnstyledLink
            href={href}
            className={clsx(
              mode === 'dark' ? 'text-white' : 'text-black',
              'hover:text-primary-300'
            )}
          >
            {/* {icon} */}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
};

export default ContactMenu;
