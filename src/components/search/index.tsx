import clsx from 'clsx';
import { useContext } from 'react';

import ButtonBase from '@/components/buttons';

import { ThemeContext } from '@/context/ThemeContext';
import { SearchIcon } from '@/svg/icons';

const Search = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <ButtonBase
      variant='outline'
      className={clsx(
        mode === 'dark' ? 'text-white' : 'text-black',
        'shadow-none hover:bg-transparent focus:bg-transparent focus:shadow-none'
      )}
    >
      <SearchIcon />
    </ButtonBase>
  );
};

export default Search;
