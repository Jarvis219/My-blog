import clsx from 'clsx';
import { useContext } from 'react';

import Card from '@/components/banner/Card';
import NextImage from '@/components/NextImage';

import { ThemeContext } from '@/context/ThemeContext';

const Banner = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className='container mx-auto pt-12'>
      <div className=''>
        <h3
          className={clsx(
            mode === 'dark' ? 'text-white' : 'text-black',
            'font-sans text-3xl font-bold md:text-6xl'
          )}
        >
          Editor pick 🎲
        </h3>
        <span
          className={clsx(
            mode === 'dark' ? 'text-white' : 'text-neutral-500',
            'mt-2 block font-serif text-base font-normal sm:text-xl md:mt-3'
          )}
        >
          Discover the most outstanding articles in all topics of life.
        </span>
      </div>
      <div className='flex w-full flex-wrap-reverse justify-center px-3 sm:px-6 md:mt-20'>
        <div className='z-10 md:w-3/5 md:px-0 lg:w-1/2 xl:w-2/5'>
          <Card />
        </div>
        <div className='z-1 -mt-8 -translate-x-[5%] md:w-3/5 md:transform md:px-0 lg:w-1/2 xl:w-2/5'>
          <NextImage
            src='https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/photo-1440778303588-435521a205bc.jpeg'
            width={800}
            height={480}
            alt='banner'
            layout='fill'
            style={{
              borderRadius: '50px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
