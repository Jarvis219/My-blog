import clsx from 'clsx';
import { useContext } from 'react';

import ButtonBase from '@/components/buttons';
import NextImage from '@/components/NextImage';

import { ThemeContext } from '@/context/ThemeContext';
import { ArrowTopIcon, HeartIcon, MessageIcon } from '@/svg';

const Card = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className='space-y-3 rounded-3xl !border-opacity-0 bg-white bg-opacity-40 p-4 shadow-lg backdrop-blur-lg backdrop-filter sm:space-y-5 sm:p-8 md:px-10 xl:py-14'>
      <div className='flow-root'>
        <div className='-my-1 flex flex-wrap space-x-2 '>
          <a
            href='https://ncmaz.chisnghiax.com/category/games/'
            className='relative inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-800 transition-colors  duration-300 hover:bg-green-800 hover:text-white'
          >
            Games
          </a>
          <a
            href='https://ncmaz.chisnghiax.com/category/garden/'
            className='relative inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-800 transition-colors  duration-300 hover:bg-green-800 hover:text-white'
          >
            Garden
          </a>
        </div>
      </div>
      <h2 className='nc-card-title text-xl font-semibold sm:text-2xl '>
        <a
          href='https://ncmaz.chisnghiax.com/labore-distinctio-quam-omnis-omnis/'
          className={clsx(
            mode === 'dark' ? 'text-white' : 'text-black',
            'font-sans text-3xl font-semibold md:text-4xl'
          )}
          title='Labore distinctio quam omnis omnis'
        >
          Labore distinctio quam omnis omnis
        </a>
      </h2>
      <a
        href='https://ncmaz.chisnghiax.com/author/feil-joan/'
        className='nc-CardAuthor2 inline-flex items-center'
      >
        <div className='wil-avatar relative z-0 mr-3 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-base font-semibold uppercase text-neutral-100 shadow-inner'>
          <NextImage
            width={8}
            height={8}
            className='absolute inset-0 h-full w-full object-cover'
            src='https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/x6uj51n5ce8-1-e1633222556192-150x150.jpg'
            alt='katlyn14'
          />
          <span className='wil-avatar__name'>k</span>
        </div>
        <div className='overflow-hidden'>
          <h4
            className={clsx(
              mode === 'dark' ? 'text-gray-100' : 'text-neutral-700',
              'truncate font-sans text-sm font-medium md:text-xl'
            )}
          >
            Frieda
          </h4>
          <span
            className={clsx(
              mode === 'dark' ? 'text-gray-200' : 'text-neutral-400',
              'mt-1 flex items-center truncate font-sans text-xs md:text-sm'
            )}
          >
            <span>Sep 09, 2021</span>
            <span className='mx-1 hidden transition-opacity lg:inline '>·</span>
            <span className='hidden truncate transition-opacity lg:inline '>
              <span> 3</span>
              <span>minutes</span>
            </span>
          </span>
        </div>
      </a>
      <div className='mt-auto flex items-center justify-between'>
        <div className='flex items-center space-x-2 '>
          <ButtonBase
            className={clsx(
              mode === 'dark'
                ? 'bg-[#263246]'
                : 'bg-transparent text-dark shadow-none',
              'rounded-full border-none hover:bg-red-200 hover:text-red-600'
            )}
          >
            <HeartIcon size={30} />
            <span className='mx-1 text-sm font-light md:text-lg'>34</span>
          </ButtonBase>
          <ButtonBase
            className={clsx(
              mode === 'dark'
                ? 'bg-[#263246]'
                : 'bg-transparent text-dark shadow-none',
              'rounded-full border-none hover:bg-green-200 hover:text-green-600'
            )}
          >
            <MessageIcon size={30} />
            <span className='mx-1 text-sm font-light md:text-lg'>10</span>
          </ButtonBase>
        </div>
        <div className='inline-block text-left'>
          <ButtonBase
            className={clsx(
              mode === 'dark' ? 'bg-dark text-white' : 'bg-white text-black',
              'flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 focus:outline-none'
            )}
            title='Share with'
            type='button'
          >
            <div>
              <ArrowTopIcon size={30} />
            </div>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default Card;
