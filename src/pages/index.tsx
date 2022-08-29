import clsx from 'clsx';
import { useContext } from 'react';

import Banner from '@/components/banner';
import Seo from '@/components/Seo';

import { ThemeContext } from '@/context/ThemeContext';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <Seo templateTitle='Home' />
      <Seo />
      <section
        className={clsx(
          mode === 'dark' ? 'bg-dark' : 'bg-white',
          'h-screen max-h-fit'
        )}
      >
        <Banner />
        {/* <div className='layout flex min-h-screen flex-col items-center justify-center text-center'> */}
        {/* <Vercel className='text-5xl' /> */}

        {/* <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p> */}

        {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

        {/* <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink> */}
        {/* </div> */}
      </section>
    </>
  );
}
